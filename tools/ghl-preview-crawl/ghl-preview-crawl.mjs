#!/usr/bin/env node
/**
 * Crawl a GoHighLevel site preview: collect in-scope links (nav/footer + full page),
 * optional bounded BFS, write preview-pages.json and preview-pages.txt.
 *
 * Usage: node tools/ghl-preview-crawl/ghl-preview-crawl.mjs [seedUrl]
 * Env: MAX_DEPTH (default 2), MAX_PAGES (default 50), NO_BFS=1 to disable crawl
 */

import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, URL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "../..");

const seedArg = process.argv[2]?.trim();
const seedUrl =
  seedArg ||
  "https://app.thebrobot.com/v2/preview/UW22A1RbU44ayy1BLHlW";

const maxDepth = Math.max(0, Number(process.env.MAX_DEPTH ?? 2) || 2);
const maxPages = Math.max(1, Number(process.env.MAX_PAGES ?? 50) || 50);
const noBfs = process.env.NO_BFS === "1" || process.env.NO_BFS === "true";

function previewPrefixFromSeed(seed) {
  const u = new URL(seed);
  const parts = u.pathname.split("/").filter(Boolean);
  // /v2/preview/<id>
  const idx = parts.indexOf("preview");
  if (idx >= 0 && parts[idx + 1]) {
    return "/" + parts.slice(0, idx + 2).join("/");
  }
  return u.pathname.replace(/\/$/, "") || u.pathname;
}

function scopeHostFromSeed(seed) {
  return new URL(seed).hostname;
}

function normalizeHttpUrl(href, base) {
  try {
    const resolved = new URL(href, base);
    if (resolved.protocol !== "http:" && resolved.protocol !== "https:") {
      return null;
    }
    resolved.hostname = resolved.hostname.toLowerCase();
    return resolved.href;
  } catch {
    return null;
  }
}

function isSkippableSchemeOrHost(urlStr) {
  try {
    const u = new URL(urlStr);
    const p = u.protocol;
    if (p === "mailto:" || p === "tel:" || p === "javascript:") return true;
    return false;
  } catch {
    return true;
  }
}

function isInScope(absUrl, host, pathPrefix) {
  let u;
  try {
    u = new URL(absUrl);
  } catch {
    return false;
  }
  if (u.hostname !== host) return false;
  if (u.protocol !== "http:" && u.protocol !== "https:") return false;
  const path = u.pathname.endsWith("/") && u.pathname.length > 1
    ? u.pathname.slice(0, -1)
    : u.pathname;
  const prefix = pathPrefix.endsWith("/") ? pathPrefix.slice(0, -1) : pathPrefix;
  return path === prefix || path.startsWith(prefix + "/");
}

const SOCIAL_HOST_SUFFIXES = [
  "instagram.com",
  "facebook.com",
  "fb.com",
  "twitter.com",
  "x.com",
  "linkedin.com",
  "tiktok.com",
  "pinterest.com",
  "threads.net",
];

function isSocialUrl(urlStr) {
  try {
    const h = new URL(urlStr).hostname.toLowerCase();
    return SOCIAL_HOST_SUFFIXES.some(
      (s) => h === s || h.endsWith(`.${s}`)
    );
  } catch {
    return false;
  }
}

async function collectCategorizedLinks(page) {
  return page.evaluate(() => {
    const uniq = (arr) => [...new Set(arr)];
    const hrefsFromSelector = (selector, excludeTagNames = []) => {
      const skip = new Set(excludeTagNames.map((t) => t.toUpperCase()));
      return uniq(
        [...document.querySelectorAll(selector)]
          .filter((n) => !skip.has(n.tagName))
          .map((n) => n.getAttribute("href"))
          .filter((h) => h && !h.startsWith("javascript:"))
      );
    };

    return {
      navHrefs: hrefsFromSelector(
        'header [href], nav [href], [role="navigation"] [href]',
        ["LINK"]
      ),
      footerHrefs: hrefsFromSelector("footer [href]", ["LINK"]),
      allHrefs: hrefsFromSelector("a[href], map area[href]"),
    };
  });
}

async function harvestPage(page, baseForResolve) {
  const { navHrefs, footerHrefs, allHrefs } = await collectCategorizedLinks(page);
  const resolveList = (list) =>
    list
      .map((h) => normalizeHttpUrl(h, baseForResolve))
      .filter(Boolean)
      .filter((u) => !isSkippableSchemeOrHost(u));

  return {
    nav: resolveList(navHrefs),
    footer: resolveList(footerHrefs),
    all: resolveList(allHrefs),
  };
}

async function main() {
  const scopeHost = scopeHostFromSeed(seedUrl);
  const pathPrefix = previewPrefixFromSeed(seedUrl);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (compatible; GHLPreviewCrawl/1.0; +local script)",
  });

  const visited = new Set();
  const allUrls = new Set();
  const navUrls = new Set();
  const footerUrls = new Set();
  const redirects = [];

  /** @type {{ url: string, depth: number }[]} */
  const queue = [{ url: seedUrl, depth: 0 }];

  try {
    while (queue.length > 0 && visited.size < maxPages) {
      const { url: rawUrl, depth } = queue.shift();
      if (visited.has(rawUrl)) continue;
      if (visited.size >= maxPages) break;
      visited.add(rawUrl);

      const page = await context.newPage();
      let finalUrl = rawUrl;
      try {
        const resp = await page.goto(rawUrl, {
          waitUntil: "networkidle",
          timeout: 90_000,
        });
        if (resp?.url()) finalUrl = resp.url();
        if (finalUrl !== rawUrl) {
          redirects.push({ from: rawUrl, to: finalUrl });
        }
        const wanted = new URL(rawUrl);
        if (wanted.hash) {
          await page.evaluate((hash) => {
            if (hash) window.location.hash = hash;
          }, wanted.hash);
          await new Promise((r) => setTimeout(r, 1000));
        }
        await new Promise((r) => setTimeout(r, 1500));
      } catch (e) {
        console.error(`Failed to load ${rawUrl}:`, e.message || e);
        await page.close();
        continue;
      }

      if (!isInScope(finalUrl, scopeHost, pathPrefix)) {
        await page.close();
        continue;
      }

      if (finalUrl !== rawUrl) visited.add(finalUrl);

      const harvest = await harvestPage(page, page.url());
      for (const u of harvest.nav) {
        if (isSocialUrl(u)) continue;
        navUrls.add(u);
        allUrls.add(u);
      }
      for (const u of harvest.footer) {
        if (isSocialUrl(u)) continue;
        footerUrls.add(u);
        allUrls.add(u);
      }
      for (const u of harvest.all) {
        allUrls.add(u);
      }

      if (!noBfs && depth < maxDepth) {
        for (const u of harvest.all) {
          if (!isInScope(u, scopeHost, pathPrefix)) continue;
          if (isSocialUrl(u)) continue;
          if (visited.has(u)) continue;
          if (queue.some((q) => q.url === u)) continue;
          queue.push({ url: u, depth: depth + 1 });
        }
      }

      await page.close();
    }
  } finally {
    await browser.close();
  }

  const inScopeUrls = [...allUrls].filter(
    (u) => isInScope(u, scopeHost, pathPrefix) && !isSocialUrl(u)
  );
  const externalUrls = [...allUrls].filter(
    (u) => !isInScope(u, scopeHost, pathPrefix) || isSocialUrl(u)
  );
  const rootNoHash = new URL(seedUrl);
  rootNoHash.hash = "";
  const rootKey = rootNoHash.href;
  const pagesSet = new Set(inScopeUrls);
  if (isInScope(rootKey, scopeHost, pathPrefix)) {
    pagesSet.add(rootKey);
  }
  const sorted = [...pagesSet].sort();
  const report = {
    seedUrl,
    scopeHost,
    pathPrefix,
    maxDepth,
    maxPages,
    noBfs,
    pagesVisited: visited.size,
    uniqueUrls: sorted.length,
    redirects,
    urls: sorted,
    externalUrls: externalUrls.sort(),
    urlsNav: [...navUrls].sort(),
    urlsFooter: [...footerUrls].sort(),
    visitedUrls: [...visited].sort(),
  };

  const jsonPath = join(projectRoot, "preview-pages.json");
  const txtPath = join(projectRoot, "preview-pages.txt");

  writeFileSync(jsonPath, JSON.stringify(report, null, 2), "utf8");
  writeFileSync(txtPath, sorted.join("\n") + (sorted.length ? "\n" : ""), "utf8");

  console.log(JSON.stringify({
    pagesVisited: visited.size,
    uniqueUrls: sorted.length,
    json: jsonPath,
    txt: txtPath,
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
