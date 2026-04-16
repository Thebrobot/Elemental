/** Elemental Skin & Body Medical Aesthetics - service registry */

export type ServiceCategory = "injectables" | "skin" | "body" | "wellness";

export type FaqItem = { q: string; a: string };

export type ServiceDefinition = {
  category: ServiceCategory;
  slug: string;
  name: string;
  metaDescription: string;
  heroDescription: string;
  whatIsIt: string | string[];
  howItWorks: string[];
  benefits: string[];
  candidate: string;
  expectBefore: string;
  expectDuring: string;
  expectAfter: string;
  faq: FaqItem[];
  /** Three short bullets shown in the hero (visit time, downtime, best for). */
  atAGlance?: string[];
  /** "You may love this if…" scannable bullets for relatability. */
  goodFitIf?: string[];
  /** Plain-language onset, peak, and maintenance timeline. */
  visitAndResults?: string;
  /** Hero-column image slot - right side on wide screens. */
  heroImage?: { label?: string; caption: string };
  /** In-body image slot - placed after the "You May Love This If" block. */
  bodyImage?: { label?: string; caption: string };
};

const BRAND = "Elemental Skin & Body Medical Aesthetics";

export const categoryLabels: Record<ServiceCategory, string> = {
  injectables: "Injectables & facial rejuvenation",
  skin: "Skin & laser treatments",
  body: "Body contouring & devices",
  wellness: "Wellness & performance",
};

// ─────────────────────────────────────────────────────────────────────────────
// INJECTABLES
// ─────────────────────────────────────────────────────────────────────────────

const botoxJeuveau: ServiceDefinition = {
  category: "injectables",
  slug: "botox-jeuveau",
  name: "Botox & Jeuveau",
  metaDescription:
    "Soften expression lines with Botox® & Jeuveau® at Elemental Skin & Body in Elkhorn, WI. Natural-looking neuromodulator results for Walworth County.",
  heroDescription:
    "Those lines between your brows that show up on every video call or in every photo-neuromodulators can soften them while keeping your expression entirely yours.",
  whatIsIt: [
    "Botox® and Jeuveau® are FDA-approved neuromodulators that temporarily relax specific facial muscles by blocking the nerve signals that trigger repeated contraction. The result is softened dynamic wrinkles-the kind formed by expression rather than sun damage or volume loss.",
    `At ${BRAND}, every neuromodulator visit starts with a facial assessment. We map the muscles actually driving your lines, discuss your movement preferences, and dose conservatively so results look like a well-rested version of you-not a departure from your face.`,
  ],
  howItWorks: [
    "Facial assessment and muscle mapping to identify what's actually driving your expression lines.",
    "A goal conversation: how much softening you want, which areas matter most, and any prior treatment history.",
    "Precise injection of individually dosed units using a very fine needle-most visits take under 15 minutes of treatment time.",
    "Post-care review and optional two-week follow-up to confirm results and make any minor adjustments.",
  ],
  benefits: [
    "Softened forehead lines, glabellar 11s, and crow's feet without a frozen appearance",
    "Conservative dosing that preserves natural expression and movement",
    "Quick in-office treatment with no downtime for most patients",
    "Preventive value when started before lines become static (present at rest)",
    "Results that refine visit to visit based on your anatomy and feedback",
    "Convenient Elkhorn location serving Walworth County and the Lake Geneva area",
  ],
  candidate:
    "Adults who notice forehead lines, glabellar lines (11s), or crow's feet-whether at expression or beginning to appear at rest-and are in generally good health, not pregnant or nursing, and able to pause blood-thinning supplements if medically appropriate.",
  expectBefore:
    "Avoid NSAIDs, alcohol, and fish oil supplements for a few days if medically appropriate to reduce bruising risk. Come with a clean, makeup-free face or allow time to remove makeup at the appointment.",
  expectDuring:
    "Your provider discusses your desired outcome, marks strategic injection points, and uses a very fine needle. Most patients describe a light pinch; topical numbing is available if preferred. Treatment itself typically takes under 15 minutes.",
  expectAfter:
    "Avoid lying flat, strenuous exercise, or rubbing the treated areas for the first four hours. Softening appears gradually over three to seven days; peak effect is visible by two weeks. A follow-up check is available if you'd like a minor adjustment.",
  atAGlance: [
    "Visit: ~30 min including consult",
    "Downtime: none for most patients",
    "Best for: expression lines, preventive care",
  ],
  goodFitIf: [
    "You notice forehead lines or 11s between your brows on video calls or in photos that weren't there a few years ago",
    "You want to look refreshed-not done-and keep your natural expression",
    "Lines are starting to appear at rest and you want to address them before they deepen",
    "You're a returning patient ready to fine-tune your results visit to visit",
  ],
  visitAndResults:
    "Softening appears in three to seven days and peaks around two weeks; most patients plan their next visit at the three to four month mark. Consistent scheduling often extends duration over time.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Softly lit treatment room - provider and patient reviewing facial expressions together in a handheld mirror, both relaxed and engaged. No injection in progress. Warm, trustworthy atmosphere that puts the patient at ease.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of a gloved professional hand holding a fine-gauge syringe near a neat sterile tray - no patient face visible. Precise, clinical, calm.",
  },
  faq: [
    {
      q: "Will I look frozen?",
      a: "We start conservatively and discuss your comfort with movement before injecting. Frozen results come from overdosing or ignoring anatomy-neither is our approach.",
    },
    {
      q: "How long do results last?",
      a: "Most patients enjoy results for three to four months; individual metabolism, dose, and muscle strength all play a role. Consistent scheduling often extends duration.",
    },
    {
      q: "Is it safe to start young as a preventive measure?",
      a: "Many providers and patients see value in beginning neuromodulators before static lines form. Candidacy is discussed individually-there is no universal right age.",
    },
    {
      q: "What is the difference between Botox and Jeuveau?",
      a: "Both are FDA-approved botulinum toxin type A products. Your provider will explain how each fits your anatomy and goals at consultation.",
    },
    {
      q: "Can I combine this with fillers or laser the same day?",
      a: "Often yes, though sequencing depends on the areas treated. Multi-service visits are planned safely during your consultation.",
    },
    {
      q: "How is pricing determined?",
      a: "Cost is based on units used and areas treated, discussed at consultation. We never recommend more than your plan calls for.",
    },
  ],
};

const dermalFillers: ServiceDefinition = {
  category: "injectables",
  slug: "dermal-fillers",
  name: "Dermal Fillers",
  metaDescription:
    "Restore volume and refine facial contours with dermal fillers at Elemental Skin & Body, Elkhorn WI. Hyaluronic acid and advanced filler options.",
  heroDescription:
    "Volume naturally shifts over time-cheeks flatten, lips thin, folds deepen. Precisely placed filler can restore what's changed without rewriting your face.",
  whatIsIt: [
    "Dermal fillers are injectable gels-most commonly hyaluronic acid (HA)-that replace lost volume, define contours, and soften folds like nasolabial creases and marionette lines. Results are visible immediately and can be refined for symmetry.",
    `${BRAND} offers filler formulations matched to specific tissue depth and area. Fine-tipped lip products address definition and symmetry; thicker volumizing gels restore cheeks, temples, and jawline. Your provider selects the right product for your anatomy and goals.`,
  ],
  howItWorks: [
    "Full facial assessment mapping areas of volume loss, asymmetry, and your primary concerns-photos are often taken for reference.",
    "Product selection based on tissue depth, area, and desired longevity.",
    "Injection using cannula or needle technique with on-table assessment for symmetry and shape throughout.",
    "Post-treatment review and a two-week follow-up scheduled to assess final results and discuss any refinement.",
  ],
  benefits: [
    "Immediate, visible improvement in cheek volume, lip shape, and facial contours",
    "Natural-looking softening of nasolabial folds, marionette lines, and chin creasing",
    "Hyaluronic acid options are reversible with enzyme if desired",
    "Customizable product layering for multi-area correction in one visit",
    "Results settle beautifully as post-treatment swelling resolves over 7–14 days",
  ],
  candidate:
    "Adults with noticeable volume loss, asymmetry, or deepened folds who understand that fillers address hollow or deflated tissue rather than fine surface lines. Final suitability, including contraindications and any medications to pause, is confirmed at consultation.",
  expectBefore:
    "Avoid NSAIDs, alcohol, and supplements such as fish oil and vitamin E for 48–72 hours if medically appropriate to reduce bruising. Arrive without makeup or allow time for removal.",
  expectDuring:
    "Your provider performs a thorough facial assessment, marks injection points, and applies topical numbing cream for comfort. Most filler sessions take 30–60 minutes depending on the areas treated. Symmetry is assessed on the table throughout.",
  expectAfter:
    "Expect mild swelling, tenderness, or bruising for 3–7 days. Avoid massage or pressure on treated areas and intense heat for the first 24–48 hours. Final symmetry and results are best assessed at two weeks once swelling fully resolves.",
  atAGlance: [
    "Visit: 30–60 min",
    "Downtime: mild swelling 3–7 days",
    "Best for: volume loss, contours, folds",
  ],
  goodFitIf: [
    "Your cheeks look hollow in photos or when you're tired, even though you feel fine",
    "Nasolabial folds or marionette lines have become something you notice in conversation",
    "Your lips have lost definition or symmetry that used to feel natural",
    "You want visible but natural results-something people notice but can't quite name",
  ],
  visitAndResults:
    "Improvement is visible immediately on the treatment table; final results settle over 7–14 days as swelling resolves. Duration varies by product and area-commonly 6 months to over a year in well-suited patients.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Bright, clean treatment room: aesthetician and patient reviewing a facial mapping diagram or treatment plan together, warm and collaborative atmosphere. No injection in progress.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of a selection of unopened filler syringes arranged neatly on a stainless tray - clinical precision, teal accent props in background if available.",
  },
  faq: [
    {
      q: "Will fillers look obvious or fake?",
      a: "Over-filling or incorrect placement can look unnatural. Our approach is conservative-we prefer a second appointment over over-correction at the first visit.",
    },
    {
      q: "Can fillers be dissolved if I don't like the result?",
      a: "Hyaluronic acid fillers can be partially or fully dissolved with an enzyme called hyaluronidase. This option is discussed at consultation.",
    },
    {
      q: "Does it hurt?",
      a: "Most HA filler products contain lidocaine, and we apply topical numbing before treatment. Discomfort is typically mild and short-lived.",
    },
    {
      q: "How is a cannula different from a needle?",
      a: "A cannula is a blunt-tipped flexible tube that covers more area through fewer entry points and reduces bruising risk in certain zones. Your provider chooses the technique that best suits each area.",
    },
    {
      q: "Can I combine fillers with Botox or laser on the same visit?",
      a: "Often yes-neuromodulators and fillers complement each other well and can be sequenced during one appointment when appropriate.",
    },
    {
      q: "What if I'm not happy with my results?",
      a: "We schedule a two-week follow-up to assess results together. Minor refinements are discussed then, and HA fillers can be dissolved if needed.",
    },
  ],
};

const biofill: ServiceDefinition = {
  category: "injectables",
  slug: "biofill",
  name: "BioFill",
  metaDescription:
    "BioFill biostimulatory injectables at Elemental Skin & Body in Elkhorn, WI. Gradual collagen rebuilding for natural-looking facial renewal in Walworth County.",
  heroDescription:
    "Gradual, structural renewal from the inside out-biostimulatory injectables work with your skin's own biology to rebuild collagen over weeks rather than adding passive volume.",
  whatIsIt: [
    "BioFill-style treatments use biostimulatory agents-injectables that recruit your body's collagen-producing cells rather than simply filling space with gel. Results develop progressively over six to twelve weeks as your own connective tissue rebuilds.",
    "This approach is appealing to patients who want improvement that looks like their skin genuinely got better-not like something was placed inside it. Your provider will explain which biostimulatory formulation suits your anatomy, skin quality, and goals.",
  ],
  howItWorks: [
    "Consultation to evaluate skin quality, depth of concern, and whether a biostimulatory approach fits your goals better than traditional HA filler.",
    "Product selection and injection technique discussion-different formulations have distinct placements and timelines.",
    "Treatment session using technique appropriate for the selected product; some patients undergo a short series.",
    "Follow-up visits to assess collagen response and discuss whether additional sessions are recommended.",
  ],
  benefits: [
    "Improvement that looks organic-built by your own collagen rather than placed gel",
    "Longer duration compared with many HA fillers in appropriate candidates",
    "Structural benefit that addresses skin quality alongside volume",
    "Useful for patients where traditional fillers weren't the ideal fit",
    "Gradual results that colleagues and family may notice without identifying as 'work done'",
  ],
  candidate:
    "Adults with skin laxity, thinning facial tissue, or prior filler experience who are interested in a structural, biostimulatory approach. A thorough consultation is required to determine suitability-not every patient or concern is a candidate.",
  expectBefore:
    "Avoid NSAIDs and blood-thinning supplements as directed. Hydrate well in the days leading up to treatment. Come with clean skin.",
  expectDuring:
    "Your provider explains the product, injection technique, and expected timeline in detail before beginning. Topical numbing is applied for comfort. Session length depends on the formulation and areas treated.",
  expectAfter:
    "Some swelling or lumpiness is normal initially and resolves as the product integrates. Massage or specific aftercare protocols may be recommended depending on the product. Results build progressively-patience is part of the process.",
  atAGlance: [
    "Visit: 30–45 min",
    "Results build over 6–12 weeks",
    "Best for: gradual, structural collagen support",
  ],
  goodFitIf: [
    "You want improvement that looks like your skin genuinely got better, not like something was added",
    "Traditional HA fillers haven't been quite right for your goals or tissue quality",
    "You're comfortable letting results develop over weeks rather than seeing immediate volume",
    "You want a longer-lasting structural approach reviewed with your provider",
  ],
  visitAndResults:
    "Biostimulatory results develop gradually over six to twelve weeks as collagen production responds; a series of sessions may be recommended for optimal outcome. Duration often exceeds that of standard HA fillers.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Patient and provider in a relaxed consultation, reviewing a treatment plan diagram together. Warm, educational atmosphere - no treatment in progress.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of smooth, naturally lit skin on a cheekbone or jawline - warm studio light, soft focus, suggesting gradual skin quality improvement.",
  },
  faq: [
    {
      q: "How is this different from traditional filler?",
      a: "Traditional HA filler provides immediate volume by occupying space. Biostimulatory agents prompt your own cells to build collagen, producing results that develop over weeks and often last longer.",
    },
    {
      q: "Will I see results right away?",
      a: "Some initial change may be visible, but the meaningful results build progressively. Your provider will set a clear timeline at consultation.",
    },
    {
      q: "How many sessions will I need?",
      a: "Most patients benefit from one to three sessions spaced weeks apart, depending on the product and the extent of the concern. Your plan is individualized.",
    },
    {
      q: "Is it reversible?",
      a: "Biostimulatory products are generally not dissolved the way HA fillers are. This makes the consultation and patient selection process especially important.",
    },
    {
      q: "Can it be combined with other treatments?",
      a: "Often yes-biostimulatory injectables pair well with skin treatments, neuromodulators, and other modalities as part of a comprehensive plan.",
    },
  ],
};

const vampireFacial: ServiceDefinition = {
  category: "injectables",
  slug: "vampire-facial",
  name: "Vampire Facial",
  metaDescription:
    "Vampire facial - microneedling with PRP at Elemental Skin & Body, Elkhorn WI. Collagen renewal, brighter tone, and smoother texture using your own growth factors.",
  heroDescription:
    "Dull skin and uneven texture are no match for your own growth factors. Microneedling with PRP recruits your body's renewal response exactly where it's needed most.",
  whatIsIt: [
    "The vampire facial combines controlled microneedling-which creates thousands of micro-channels to trigger the skin's healing response-with platelet-rich plasma (PRP) drawn from your own blood. PRP is concentrated in a centrifuge and applied during or after microneedling so that growth factors penetrate where they're most effective.",
    "The result is improved collagen density, refined pore appearance, more even tone, and a lasting glow that builds progressively over several weeks. Because PRP comes from your own body, it is naturally well-tolerated.",
  ],
  howItWorks: [
    "Blood draw from your arm-typically a small vial-followed by centrifuge processing to concentrate your platelets into PRP.",
    "Topical numbing is applied while PRP is prepared to ensure a comfortable microneedling experience.",
    "Microneedling pass over the treatment area, followed by PRP application to deliver growth factors into the micro-channels.",
    "Post-care instructions reviewed; follow-up scheduled to assess response and plan any additional sessions.",
  ],
  benefits: [
    "Improved skin tone and texture using your body's own regenerative biology",
    "Refined pore appearance and reduced fine surface lines",
    "Supports post-acne or general pigmentation improvement over a series",
    "Naturally well-tolerated-PRP is autologous (from your own blood)",
    "Collagen-building results that continue developing for four to six weeks post-treatment",
    "Minimal downtime compared with ablative resurfacing",
  ],
  candidate:
    "Adults with dull skin, uneven texture, enlarged pores, fine lines, or mild scarring who are in good health and not currently on blood thinners or retinoids without guidance. Active skin infections or certain skin conditions may affect candidacy-reviewed at consultation.",
  expectBefore:
    "Hydrate well in the 24 hours before your appointment. Avoid NSAIDs and alcohol for a few days before the blood draw if medically appropriate. Pause retinoids as directed by your provider.",
  expectDuring:
    "The appointment takes approximately 60–75 minutes from blood draw through treatment completion. Topical numbing is applied in advance so microneedling is comfortable. Some patients experience mild pressure and warmth.",
  expectAfter:
    "Expect redness similar to a moderate sunburn for 24–48 hours. Skin may feel tight and slightly rough for a few days. Avoid active skincare ingredients and sun exposure during the initial healing window-your provider will give a specific aftercare checklist.",
  atAGlance: [
    "Visit: ~60–75 min",
    "Downtime: 1–2 days redness",
    "Best for: tone, texture, glow, fine lines",
  ],
  goodFitIf: [
    "Your skin looks dull or uneven despite a consistent skincare routine",
    "Fine texture, enlarged pores, or early post-acne marks are your primary concern",
    "You want skin renewal using your body's own biology rather than synthetic products",
    "You're comfortable with mild redness for a day or two in exchange for genuine improvement",
  ],
  visitAndResults:
    "Redness resolves in 24–48 hours; a glow often appears within the first week. Collagen improvements build for four to six weeks. Most patients see best results after a series of two to three sessions spaced four to six weeks apart.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Modern treatment room with a centrifuge unit visible in the background - sterile, professional, and confidence-inspiring. No patient visible. Clean teal and white color palette.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of healthy, glowing skin on a jawline or cheekbone - warm, natural light, soft focus. Suggests skin quality improvement without before/after framing.",
  },
  faq: [
    {
      q: "Is the 'vampire' name a gimmick?",
      a: "The nickname refers to the blood draw used to prepare PRP. The underlying science-using your own platelets to support tissue healing-is well-studied and widely used in both medical and aesthetic contexts.",
    },
    {
      q: "How much downtime should I plan for?",
      a: "Most patients look presentably normal within 48–72 hours. Mineral SPF and gentle skincare are the main requirements during the healing window.",
    },
    {
      q: "How many sessions do I need?",
      a: "A series of two to three treatments spaced four to six weeks apart is a common starting plan for texture and tone goals; maintenance depends on your response.",
    },
    {
      q: "Can this be combined with other treatments?",
      a: "PRP pairs well with other skin services. Your provider will guide sequencing so treatments complement rather than conflict with each other.",
    },
    {
      q: "Is it safe for darker skin tones?",
      a: "Microneedling is generally well-tolerated across skin tones when performed at appropriate depth and intensity. Candidacy is reviewed at consultation including your Fitzpatrick type.",
    },
  ],
};

const vampireFacelift: ServiceDefinition = {
  category: "injectables",
  slug: "vampire-facelift",
  name: "Vampire Facelift",
  metaDescription:
    "Vampire facelift with PRP at Elemental Skin & Body, Elkhorn WI. Whole-face regenerative rejuvenation combining platelet-rich plasma with complementary techniques.",
  heroDescription:
    "A whole-face regenerative approach-combining PRP with complementary techniques to improve skin quality, restore subtle lift, and address multiple concerns in one personalized plan.",
  whatIsIt: [
    "A vampire facelift approach uses platelet-rich plasma alongside complementary aesthetic methods-which may include a neuromodulator, filler, or energy-based treatment-to address global facial rejuvenation. Rather than targeting a single area, this type of plan considers the face as a system.",
    "The result is an improvement in skin quality, tone, and subtle structural support that builds progressively. Because it is regenerative rather than surgical, the changes appear gradually and naturally over weeks to months. Your provider designs the plan around your specific anatomy and priorities.",
  ],
  howItWorks: [
    "Comprehensive facial consultation to identify areas of concern, set realistic expectations, and design a personalized multi-modality plan.",
    "Blood draw and PRP preparation; topical numbing applied during this time.",
    "Sequential treatment steps based on your plan-PRP, and any complementary modalities selected for your goals.",
    "Follow-up visits to assess response, refine the plan, and determine if additional sessions are beneficial.",
  ],
  benefits: [
    "Comprehensive, personalized plan rather than a single isolated treatment",
    "Gradual, natural-looking improvement that builds over weeks to months",
    "Regenerative approach using your own biology-naturally well-tolerated",
    "Addresses skin quality, subtle volume, and tone together as a system",
    "No surgical incisions, general anesthesia, or extended recovery",
  ],
  candidate:
    "Adults noticing multiple simultaneous concerns-early laxity, volume shift, dullness, or skin quality changes-who want a comprehensive regenerative approach. Surgery is not a prerequisite for this path, nor a replacement; candidacy is determined during a thorough consultation.",
  expectBefore:
    "Avoid NSAIDs and blood-thinning supplements as directed before your blood draw. Arrive with clean skin; your provider will outline any additional preparation based on the specific treatments included in your plan.",
  expectDuring:
    "The session is longer than a single injectable treatment-typically 60–90 minutes-as multiple steps are performed. Your provider explains each step and checks comfort throughout. Topical numbing is applied in advance.",
  expectAfter:
    "Downtime depends on the specific combination of treatments performed. Mild redness, tenderness, or swelling is normal; your provider gives specific aftercare instructions for each modality included in your plan.",
  atAGlance: [
    "Visit: 60–90 min",
    "Downtime: varies by plan (typically light)",
    "Best for: global rejuvenation without surgery",
  ],
  goodFitIf: [
    "You're noticing laxity, dullness, and volume changes at the same time and want a plan that addresses all of them",
    "A single injectable treatment hasn't addressed everything you're concerned about",
    "You want meaningful improvement without surgery, general anesthesia, or extended downtime",
    "You value a personalized approach designed around your whole face as a system",
  ],
  visitAndResults:
    "A regenerative plan builds results over four to twelve weeks as collagen and tissue quality respond; your provider outlines a realistic, individualized timeline at consultation. Maintenance intervals are discussed after assessing your initial response.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Provider and patient engaged in a thoughtful consultation, reviewing a facial diagram or treatment plan. Warm, professional atmosphere. No treatment in progress.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "PRP preparation setup: centrifuge tubes with golden-colored plasma visible alongside a neat treatment tray - clinical, precise, and confidence-inspiring.",
  },
  faq: [
    {
      q: "Is this a surgical facelift?",
      a: "No. It is an in-office regenerative aesthetic plan. If you are interested in surgical options, that is a separate consultation with a board-certified surgeon.",
    },
    {
      q: "How is this different from just getting PRP alone?",
      a: "The facelift approach combines PRP with complementary techniques designed to address multiple dimensions of facial change-volume, skin quality, and structure-rather than a single concern.",
    },
    {
      q: "How many visits does the plan involve?",
      a: "Plans vary. Many patients begin with an initial series and then maintain with periodic visits; your provider outlines a realistic plan at consultation.",
    },
    {
      q: "Is it painful?",
      a: "Topical numbing is applied before treatment, and techniques are adjusted for your comfort. Most patients find the experience very manageable.",
    },
    {
      q: "How do I know if this plan is right for me versus other options?",
      a: "That is exactly what the consultation is for. Your provider reviews your concerns, anatomy, and goals and presents the option that best fits your starting point, timeline, and budget.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SKIN & LASER
// ─────────────────────────────────────────────────────────────────────────────

const diamondGlow: ServiceDefinition = {
  category: "skin",
  slug: "diamond-glow",
  name: "Diamond Glow",
  metaDescription:
    "DiamondGlow® medical exfoliation and serum infusion in Elkhorn, WI. Instant glow, no downtime - skin resurfacing for Walworth County and Lake Geneva.",
  heroDescription:
    "The glow you want before an event or just a regular Tuesday-DiamondGlow® delivers medical-grade exfoliation and targeted serum infusion in a single pass, with no downtime for most patients.",
  whatIsIt: [
    "DiamondGlow® is a medical-grade skin-resurfacing device that simultaneously exfoliates with a recessed diamond tip, extracts debris from pores through suction, and infuses condition-specific serums in a single continuous treatment pass.",
    "Unlike traditional facials or mechanical exfoliation alone, the infusion step delivers active ingredients-brightening, hydrating, clarifying, or anti-aging-directly into the freshly resurfaced skin, maximizing penetration and results. Most patients leave with visibly brighter, dewier skin and no visible recovery.",
  ],
  howItWorks: [
    "Skin assessment and serum selection based on your skin type, sensitivity, and current concerns-brightening, hydrating, acne-clarifying, or anti-aging formulations are available.",
    "A single-pass treatment using the diamond-tip wand: exfoliation, suction extraction, and serum infusion happen in one continuous motion.",
    "Provider review of the extracted debris (visible in the collection tube) and any targeted follow-up steps.",
    "Post-treatment skincare review and recommended home-care products to extend results.",
  ],
  benefits: [
    "Immediate, visible improvement in brightness, smoothness, and skin hydration",
    "Deep pore extraction without harsh manual squeezing or irritation",
    "Medical-grade serum infusion customized to your skin's current needs",
    "No downtime-most patients return to normal activity and makeup right away",
    "Complements injectable treatments and laser protocols in a multi-service plan",
  ],
  candidate:
    "Most skin types and tones are candidates. It is particularly well-suited for dull, congested, or dehydrated skin and works well as a monthly maintenance treatment. Active rosacea flares or open wounds in the treatment area are contraindications reviewed at consultation.",
  expectBefore:
    "Arrive with clean skin. Pause active retinoids or exfoliating acids for 48 hours before your appointment. No other special preparation is typically required.",
  expectDuring:
    "Treatment takes approximately 30–45 minutes. The wand glides gently across the skin with light suction; most patients find it relaxing. Your provider adjusts tip pressure based on your skin's response.",
  expectAfter:
    "Skin may appear slightly flushed for a few hours. The benefits of the infused serums continue to develop over the following 24–48 hours. Resume your regular skincare-your provider will recommend any specific additions.",
  atAGlance: [
    "Visit: ~45–60 min",
    "Downtime: none for most patients",
    "Best for: dull skin, congested pores, instant glow",
  ],
  goodFitIf: [
    "You have an event coming up and want your best skin with absolutely no recovery time",
    "Your skin feels congested, uneven, or lackluster despite a solid at-home routine",
    "You want a step up from a traditional facial with medical-grade results",
    "You're looking for a monthly maintenance treatment that keeps your skin consistently clear",
  ],
  visitAndResults:
    "Most patients see immediate improvement in brightness and smoothness; the infused serums continue working over the next 24–48 hours. Monthly sessions are common during a correction phase, spacing out to maintenance as skin stabilizes.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "DiamondGlow device handpiece resting elegantly on a clean treatment table in a modern spa-style room. Teal accent details. Professional and inviting, no patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of dewy, glowing skin on a cheekbone - soft warm light, no device or marks visible. Suggests the fresh, luminous result achieved immediately after treatment.",
  },
  faq: [
    {
      q: "How is this different from a regular facial?",
      a: "DiamondGlow uses a medical-grade device to exfoliate, extract, and infuse simultaneously rather than relying on manual pressure and surface-only products. The serum infusion step makes it meaningfully more effective than most spa facials.",
    },
    {
      q: "Can I get it done right before a big event?",
      a: "Yes-DiamondGlow is one of the few treatments we recommend the day before or day of a special event. Most patients have no redness at all.",
    },
    {
      q: "How often should I schedule?",
      a: "Many patients start with monthly sessions during a correction phase, then space out to every six to eight weeks for maintenance.",
    },
    {
      q: "Which serum is right for me?",
      a: "Your provider selects based on your skin type and concern-brightening, hydrating, clarifying, or anti-aging formulations are available.",
    },
    {
      q: "Can it be combined with other services?",
      a: "Yes. DiamondGlow pairs well with neuromodulators, chemical peels (not the same day), and light-based treatments when sequenced appropriately.",
    },
  ],
};

const elementalFacial: ServiceDefinition = {
  category: "skin",
  slug: "elemental-facial",
  name: "Elemental Facial",
  metaDescription:
    "The Elemental signature facial in Elkhorn, WI - fully customized to your skin's season, sensitivity, and goals. Medical-grade professional facial care.",
  heroDescription:
    "Your skin has a season, and no two are alike. Our signature facial is designed around your skin that day-not a fixed menu applied to everyone who walks through the door.",
  whatIsIt: [
    "The Elemental Facial is our signature professional facial built around a real-time assessment of your skin's current state-its hydration level, sensitivity, active concerns, and overall condition-rather than a locked-in protocol.",
    "Each session blends professional exfoliation, targeted treatment masks, and restorative techniques selected specifically for you. Whether your skin is reacting to stress, seasonal changes, breakouts, or dryness, the steps adapt so your skin leaves better than it arrived.",
  ],
  howItWorks: [
    "Skin consultation at the start of each visit-what's changed since last time, what's bothering you most, and what your skin looks like under a magnifying lamp.",
    "Customized cleansing, exfoliation, and extractions (if appropriate) matched to your skin's current congestion level and sensitivity.",
    "Targeted mask, serum, and massage steps selected to address your primary concern-hydration, brightening, calming, or balancing.",
    "Home-care recommendations adjusted to what your skin needs this season.",
  ],
  benefits: [
    "Fully personalized protocol-no two visits are identical if your skin has changed",
    "Safe for sensitive, rosacea-prone, dry, oily, and combination skin types",
    "Professional exfoliation and extractions with no trauma or unnecessary irritation",
    "Deeply relaxing-addresses both skin health and the stress that often drives skin issues",
    "Ideal as a standalone treatment or as preparation for other services",
  ],
  candidate:
    "Virtually any adult looking for professional skin care with a customized approach. Particularly valuable for patients with sensitive, reactive, or hard-to-treat skin who have been frustrated by one-size protocols. Pregnancy-safe options are available; please mention this when booking.",
  expectBefore:
    "Arrive with clean or makeup-free skin if possible. Mention any new skincare products, medications, or skin changes to your provider at the start of the visit.",
  expectDuring:
    "Sessions typically run 60–75 minutes. You'll be guided through each step with comfort as the priority throughout-if anything is too warm, too cool, or uncomfortable, your provider adjusts immediately.",
  expectAfter:
    "Skin typically looks calm and refreshed immediately. Avoid active exfoliating acids and retinoids for 24 hours if extractions or peeling enzymes were performed. Wear SPF the following day.",
  atAGlance: [
    "Visit: 60–75 min",
    "Downtime: none",
    "Best for: all skin types, maintenance, sensitive skin",
  ],
  goodFitIf: [
    "You want a professional facial that's actually built around your skin-not a fixed spa menu",
    "Your skin is sensitive, reactive, or has conditions that haven't responded well to standard facials",
    "You're new to professional skin care and want to start with something approachable and educational",
    "You've been dealing with a specific skin change-breakouts, dryness, dullness-and want expert hands on it",
  ],
  visitAndResults:
    "Refreshed, calmer, clearer skin is typically visible immediately after the session. Regular visits every four to six weeks support long-term skin health and allow your provider to track and address changes over time.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Serene, softly lit treatment room with elegant facial tools and product bottles artfully arranged - warm, spa-like atmosphere. No patient visible. Teal accent colors.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of a calming facial mask applied to smooth skin - gentle warm lighting, peaceful and professional. Suggests relaxation and care.",
  },
  faq: [
    {
      q: "How is this different from a spa facial?",
      a: "The Elemental Facial is performed by a licensed professional using medical-grade products, a real-time skin assessment, and techniques matched to your current condition rather than a fixed spa script.",
    },
    {
      q: "Is it safe for rosacea or extremely sensitive skin?",
      a: "Yes. The protocol adapts entirely to your skin's sensitivity level. Many rosacea patients find professional facials helpful when performed correctly-we never push past your skin's threshold.",
    },
    {
      q: "Can I come in with makeup on?",
      a: "We can remove makeup at the start of your visit-no need to arrive bare-faced if it's not convenient.",
    },
    {
      q: "How often should I book?",
      a: "Every four to six weeks is a popular maintenance interval. Some patients come monthly for a specific concern and then space out once skin is stable.",
    },
    {
      q: "Can I combine this with other services?",
      a: "Yes-the Elemental Facial pairs well with DiamondGlow, dermaplaning, and chemical peels when appropriate and when properly sequenced.",
    },
  ],
};

const dermaplaning: ServiceDefinition = {
  category: "skin",
  slug: "dermaplaning",
  name: "Dermaplaning",
  metaDescription:
    "Dermaplaning in Elkhorn, WI at Elemental Skin & Body. Vellus hair removal and surface exfoliation for silky skin and flawless makeup application.",
  heroDescription:
    "Silky, bare skin that holds makeup like nothing else-dermaplaning removes peach fuzz and the dull outer layer in one gentle pass, leaving you smooth before any occasion.",
  whatIsIt: [
    "Dermaplaning is a manual exfoliation technique that uses a sterile surgical-grade blade held at a precise angle to gently plane the epidermis-removing the layer of dead skin cells and vellus (peach fuzz) hair from the surface.",
    "The result is immediately noticeable: skin feels genuinely smooth, looks brighter, and provides an ideal base for serums and makeup. There are no acids, no devices, and no heat involved-making it one of the most universally tolerated professional exfoliation options available.",
  ],
  howItWorks: [
    "Skin cleansing and assessment to confirm suitability and check for any active breakouts or irritation that would delay treatment.",
    "Dermaplaning pass using a sterile, single-use surgical blade held at a 45-degree angle-light, feathering strokes across the face.",
    "Serum, mask, or targeted treatment applied to the freshly exfoliated surface for enhanced penetration.",
    "SPF and post-care guidance; recommended home-care adjustments if needed.",
  ],
  benefits: [
    "Immediate, tactile improvement in skin smoothness you can feel right away",
    "Vellus hair removal that makes makeup application noticeably smoother",
    "Brightening from surface cell removal without acids or irritants",
    "Enhanced serum penetration immediately following treatment",
    "No downtime-safe for the day of or day before events",
  ],
  candidate:
    "Most skin types including sensitive and dry skin. Dermaplaning is particularly well-suited for patients who don't tolerate chemical exfoliants. It is not recommended for active acne, rosacea flares, or thick terminal facial hair. Reviewed at consultation.",
  expectBefore:
    "Arrive with clean skin. Pause retinoids for 48–72 hours before your appointment. No other special preparation is needed.",
  expectDuring:
    "Treatment takes 30–45 minutes. The blade strokes feel like a gentle scraping sensation-most patients find it relaxing. There is no pain, and the process is rhythmic and methodical.",
  expectAfter:
    "Skin may feel slightly sensitive to the touch for a few hours. Wear SPF immediately after and avoid active acids or retinoids for 24–48 hours. Your provider may apply a calming serum or mask before you leave.",
  atAGlance: [
    "Visit: 30–45 min",
    "Downtime: none",
    "Best for: texture, peach fuzz, event prep",
  ],
  goodFitIf: [
    "Your makeup looks uneven or cakey and you suspect vellus hair is part of the issue",
    "You want smoother skin without acids, devices, or heat",
    "Your skin is sensitive and doesn't tolerate chemical exfoliants well",
    "You're preparing for a wedding, photoshoot, or any occasion where skin needs to look its best",
  ],
  visitAndResults:
    "Results are immediate-skin feels noticeably smoother after the session and makeup application is genuinely different. Vellus hair returns within three to four weeks at the same texture and thickness. Scheduling every four to six weeks maintains results.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Aesthetician holding a dermaplaning tool, professional and focused, patient visibly relaxed and comfortable. Clean, modern treatment room. No close-up of blade on skin.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Side profile of smooth, bare skin with soft studio lighting - no device or marks. Suggests the silky, luminous surface result achieved right after dermaplaning.",
  },
  faq: [
    {
      q: "Will the hair grow back thicker or darker?",
      a: "No. This is a well-established cosmetic myth. Vellus (peach fuzz) hair returns at the same color, texture, and density-dermaplaning does not affect the hair follicle itself.",
    },
    {
      q: "Can it be done if I have active acne?",
      a: "Not during an active breakout with open or inflamed lesions. Mild comedonal acne in clear-skin zones may be acceptable; your provider assesses at the visit.",
    },
    {
      q: "Does it hurt?",
      a: "Not at all for most patients. The sensation is like light, rhythmic scraping-many people find it relaxing.",
    },
    {
      q: "Can I add a chemical peel the same day?",
      a: "Dermaplaning is sometimes performed before a light peel to enhance penetration, but this depends on your skin's tolerance. Your provider will discuss whether a same-day combination is appropriate.",
    },
    {
      q: "How often should I schedule dermaplaning?",
      a: "Every four to six weeks, aligned with your skin's natural cell turnover cycle. More frequent sessions are rarely necessary.",
    },
  ],
};

const chemicalPeels: ServiceDefinition = {
  category: "skin",
  slug: "chemical-peels",
  name: "Chemical Peels",
  metaDescription:
    "Medical-grade chemical peels in Elkhorn, WI at Elemental Skin & Body. Targeted resurfacing for pigment, acne, texture, and photoaging in Walworth County.",
  heroDescription:
    "Uneven tone, stubborn sun spots, and textural issues that nothing topical has touched-a medical-grade peel resurfaces on your schedule, at the depth your skin actually needs.",
  whatIsIt: [
    "Chemical peels apply medical-grade acids-such as glycolic, salicylic, lactic, trichloroacetic (TCA), or combination formulations-to accelerate skin cell turnover, remove damaged outer layers, and stimulate collagen production.",
    "The right peel depth depends on your concern, skin type, and how much downtime you can accommodate. Superficial peels address dullness and early pigmentation with minimal recovery; medium-depth peels target more established sun damage, uneven tone, or acne scarring with a more visible peel process. Your provider matches the formulation and depth to your goals and lifestyle.",
  ],
  howItWorks: [
    "Skin consultation and Fitzpatrick typing to determine the appropriate peel formulation, strength, and depth for your concern and skin type.",
    "Pre-treatment preparation with a skin cleanser; protective covering for eyes and any sensitive areas.",
    "Peel application with timed contact and visual assessment; some formulations self-neutralize while others require a neutralizer.",
    "Post-peel care and a detailed home-care protocol including sun protection, which is non-negotiable during healing.",
  ],
  benefits: [
    "Targeted improvement in hyperpigmentation, melasma, and post-acne marks",
    "Smoother texture and refined pore appearance over a series",
    "Collagen stimulation that continues working after the skin heals",
    "Options available for virtually every skin type with the right formulation selection",
    "Cumulative results that build with each session in a series",
  ],
  candidate:
    "Adults with sun damage, uneven pigmentation, active or post-acne skin, rough texture, or early signs of photoaging. Darker skin tones are candidates with appropriate formulation selection-Fitzpatrick type is evaluated at consultation. Active skin infections, recent isotretinoin use, or pregnancy may affect timing.",
  expectBefore:
    "Follow the pre-peel protocol provided by your provider, which typically includes pausing retinoids and active exfoliants for several days. Do not tan or sunburn the treatment area in the weeks before a medium-depth peel.",
  expectDuring:
    "Sessions typically take 30–60 minutes. You may experience tingling, warmth, or mild stinging during the application. A fan or cool air is available; your provider monitors your skin's response throughout.",
  expectAfter:
    "Superficial peels cause minimal visible peeling; medium-depth peels produce more apparent flaking or peeling beginning around days two to four. Strict daily SPF is required during healing. Avoid picking any peeling skin.",
  atAGlance: [
    "Visit: 30–60 min",
    "Downtime: light to moderate depending on peel depth",
    "Best for: pigment, acne, texture, sun damage",
  ],
  goodFitIf: [
    "Sun spots, post-acne marks, or uneven skin tone are your primary concern",
    "Your skin texture is rough, congested, or has pores that a surface product can't address",
    "You want more than a surface treatment but aren't ready for laser-based resurfacing",
    "You can plan a few days of mild peeling into your schedule for a meaningful skin reset",
  ],
  visitAndResults:
    "Superficial peels show results within days; medium-depth peels reveal improvement as skin heals over one to two weeks. A series of three to six peels spaced four to six weeks apart addresses most concerns, with ongoing sun protection extending results.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Treatment room counter with several medical-grade peel solution bottles and a clean applicator brush arranged neatly - clinical, confident, and professional.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of a peel application brush being dipped into a small glass bowl of peel solution on a sterile tray - clinical precision, warm lighting.",
  },
  faq: [
    {
      q: "Is the peel painful?",
      a: "Most patients experience tingling or mild stinging that peaks during application and subsides quickly. Deep formulations feel more intense; your provider prepares you for what to expect with your specific peel.",
    },
    {
      q: "How much will I actually peel?",
      a: "It depends on the peel depth. Light peels may cause almost no visible flaking; medium-depth peels produce more apparent shedding. Your provider outlines the expected visible reaction at consultation.",
    },
    {
      q: "Can I wear makeup right after?",
      a: "After most superficial peels, yes-within 24 hours. After deeper peels, makeup should wait until initial healing is complete per your provider's instructions.",
    },
    {
      q: "Is this safe for darker skin tones?",
      a: "Yes, with appropriate formulation selection. Not every peel is suitable for every skin tone. Fitzpatrick typing and formulation matching are central to your consultation.",
    },
    {
      q: "Can I combine a peel with other treatments?",
      a: "Some combinations are excellent-dermaplaning before a light peel enhances penetration, for example. Others require careful sequencing. Your provider guides this based on your full plan.",
    },
    {
      q: "How do I maintain results?",
      a: "Daily SPF is non-negotiable. A vitamin C serum and targeted brightening or retinoid product between sessions significantly extend peel results.",
    },
  ],
};

const hyfrecator: ServiceDefinition = {
  category: "skin",
  slug: "hyfrecator",
  name: "Hyfrecator",
  metaDescription:
    "Hyfrecator for benign skin lesions in Elkhorn, WI at Elemental Skin & Body. Precise high-frequency removal of skin tags, keratoses, and select cosmetic concerns.",
  heroDescription:
    "That skin tag, keratosis, or benign spot you've been noticing-the Hyfrecator addresses it precisely in office so you can stop thinking about it every time you look in the mirror.",
  whatIsIt: [
    "The Hyfrecator is a high-frequency electrosurgical device that delivers controlled electrical current to superficial skin tissue, effectively treating benign lesions by desiccating targeted cells with precision.",
    "Common applications include skin tags, sebaceous hyperplasia (enlarged oil glands that appear as small raised bumps), milia, and other minor cosmetic skin concerns that have been properly identified as benign. All lesions are assessed before treatment to confirm appropriateness for this modality.",
  ],
  howItWorks: [
    "Examination of the lesion to confirm its nature and suitability for Hyfrecator treatment-all areas are assessed before any procedure is performed.",
    "Cleansing and, when appropriate, topical numbing of the treatment area.",
    "Application of the Hyfrecator probe with precise, conservative current delivery to the target tissue.",
    "Post-care instructions including wound care protocol and sun protection for the healing area.",
  ],
  benefits: [
    "Precise targeting of individual lesions without affecting surrounding tissue",
    "Single-session clearance for most benign lesions",
    "Minimal equipment and quick in-office procedure",
    "Conservative settings minimize scarring risk when combined with proper aftercare",
  ],
  candidate:
    "Patients with clearly benign lesions-skin tags, sebaceous hyperplasia, milia, or select other superficial concerns-that have been assessed by a licensed provider. Any lesion with unclear characteristics is referred for appropriate evaluation before treatment.",
  expectBefore:
    "Arrive with clean skin in the treatment area. Mention any blood-thinning medications, skin conditions, or recent changes to the lesion to your provider at the start of your visit.",
  expectDuring:
    "Sessions for minor lesions are typically brief-15 to 30 minutes for a small number of spots. Topical numbing is applied for comfort. The sensation is often described as a brief sting or snap.",
  expectAfter:
    "A small scab forms over the treated area and resolves naturally in seven to ten days. Do not pick or scratch the area. Apply the provided aftercare as directed and protect the healing skin from sun exposure.",
  atAGlance: [
    "Visit: 15–30 min",
    "Downtime: light scabbing resolves in 7–10 days",
    "Best for: skin tags, sebaceous hyperplasia, select benign lesions",
  ],
  goodFitIf: [
    "You have a skin tag, sebaceous bump, or other small benign lesion you've wanted gone for months",
    "You want a precise, low-downtime option that doesn't require a surgical procedure",
    "Your concern has been assessed and confirmed appropriate for this type of treatment",
  ],
  visitAndResults:
    "Most benign lesions are cleared in a single session; the treatment area forms a small scab that resolves within seven to ten days. Final clearance is visible once the healing process is complete.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Clean clinical room with a Hyfrecator device on a stand - professional, precise, and organized. Modern aesthetic clinic setting. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Gloved provider hands preparing the treatment area on a forearm or facial zone - clinical close-up, no identifiable patient features, precise and controlled.",
  },
  faq: [
    {
      q: "Will I have a scar?",
      a: "Scarring risk is minimized with conservative settings, proper technique, and careful aftercare. Your provider reviews expectations based on your skin type and the specific lesion treated.",
    },
    {
      q: "Do I need a separate dermatology visit first?",
      a: "Not necessarily for clearly benign lesions. Your provider assesses the area at your visit. Any lesion that raises questions is referred appropriately before treatment.",
    },
    {
      q: "How many treatments will I need?",
      a: "Most benign lesions are addressed in a single session. Occasionally a follow-up is needed for complete clearance.",
    },
    {
      q: "Can multiple lesions be treated in one visit?",
      a: "Yes, in most cases-multiple small skin tags or sebaceous bumps can be treated during one appointment.",
    },
    {
      q: "Is it covered by insurance?",
      a: "Cosmetic skin lesion removal is typically not covered by insurance. Pricing is discussed at consultation.",
    },
  ],
};

const microneedling: ServiceDefinition = {
  category: "skin",
  slug: "microneedling",
  name: "Microneedling",
  metaDescription:
    "Microneedling collagen induction therapy in Elkhorn, WI at Elemental Skin & Body. Refine pores, soften scars, and improve skin texture with minimal downtime.",
  heroDescription:
    "Your skin's collagen-building response is powerful-it just needs a reliable trigger. Microneedling refines pores, softens scars, and improves overall texture with minimal downtime and lasting results.",
  whatIsIt: [
    "Microneedling-also called collagen induction therapy (CIT)-uses a medical-grade device with fine needles to create thousands of precise micro-channels in the skin. This controlled injury triggers the body's wound-healing response: collagen and elastin production increase, pores appear smaller, surface texture smooths, and scars fill from below.",
    "Unlike radiofrequency or laser treatments, standard microneedling does not deliver thermal energy, making it an appropriate option for a wide range of skin types including darker skin tones. It is one of the most evidence-supported treatments for scar reduction, pore refinement, and general skin quality improvement.",
  ],
  howItWorks: [
    "Skin assessment and discussion of target concerns-whether texture, scarring, pore size, or fine lines-to set the appropriate needle depth and treatment intensity.",
    "Topical numbing cream applied for 20–30 minutes before the procedure to ensure comfort.",
    "Microneedling pass across the treatment area using a medical-grade device; depth and passes are adjusted based on your skin and concern.",
    "Post-treatment serum or PRP application (if included in your plan); aftercare instructions reviewed before you leave.",
  ],
  benefits: [
    "Collagen and elastin stimulation that continues for four to six weeks after each session",
    "Visible improvement in pore size, surface texture, and skin tone over a series",
    "Effective for post-acne scarring, including rolling and boxcar scars",
    "Suitable for a wide range of skin tones without pigmentation risk when performed correctly",
    "Pairs with PRP to enhance regenerative results (vampire facial option)",
    "Minimal downtime compared with ablative resurfacing alternatives",
  ],
  candidate:
    "Adults with enlarged pores, acne scarring, uneven texture, fine lines, or dull skin in generally good health. Active acne, open wounds, active rosacea, blood-thinning medications, and certain skin conditions may affect timing or depth-all reviewed at consultation.",
  expectBefore:
    "Pause retinoids and active exfoliating acids for three to five days before your session. Avoid prolonged sun exposure and tanning in the week prior. Arrive with clean skin.",
  expectDuring:
    "After numbing cream is applied and removed, the microneedling device is passed over the skin. Most patients feel light pressure and occasional minor sensitivity but not pain. Mild pinpoint bleeding is normal and expected. Sessions take approximately 45–60 minutes including numbing time.",
  expectAfter:
    "Skin will look and feel like a moderate sunburn for 24–48 hours-redness and mild swelling are normal. Avoid active skincare, makeup, and sun exposure for the first day. Your provider gives a specific post-care protocol to follow for the first week.",
  atAGlance: [
    "Visit: ~60 min including numbing",
    "Downtime: 1–2 days redness",
    "Best for: pores, scars, texture, collagen support",
  ],
  goodFitIf: [
    "Enlarged pores, acne scars, or rough skin texture is a consistent concern you want to address seriously",
    "You want collagen stimulation without heat or RF energy",
    "You're comfortable with 24–48 hours of redness in exchange for cumulative, lasting improvement",
    "You're planning a series and want progressive, visible results over months",
  ],
  visitAndResults:
    "Initial improvement appears within one to two weeks as the skin heals; collagen remodeling continues for four to six weeks after each session. Most patients complete a series of three to six treatments spaced four to six weeks apart for their primary concern.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Modern microneedling device pen resting on a clean surgical-grade surface in a professional aesthetic clinic. Teal accent colors, no patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of smooth, healthy-looking skin showing refined pores and even tone - warm natural light. Suggests the texture improvement achieved over a treatment series.",
  },
  faq: [
    {
      q: "How many sessions will I need?",
      a: "A series of three to six treatments spaced four to six weeks apart is common for texture and scarring goals. Maintenance sessions once or twice a year are popular afterward.",
    },
    {
      q: "Is it painful?",
      a: "Topical numbing cream is applied 20–30 minutes before treatment. Most patients describe mild pressure and occasional sensitivity-not significant pain.",
    },
    {
      q: "Is it safe for darker skin tones?",
      a: "Yes. Standard microneedling does not use heat or UV light, making it appropriate for Fitzpatrick types IV–VI when performed at the correct depth by a trained provider.",
    },
    {
      q: "How is this different from Morpheus8?",
      a: "Morpheus8 adds radiofrequency (RF) energy to the microneedle tip, which heats deeper tissue layers for added skin tightening and fat-layer remodeling. Standard microneedling does not deliver thermal energy.",
    },
    {
      q: "Can I add PRP to my session?",
      a: "Yes-PRP combined with microneedling is our Vampire Facial option. Adding PRP enhances the growth-factor environment and can improve results for glow, tone, and healing.",
    },
    {
      q: "What should I avoid after treatment?",
      a: "Avoid makeup, active skincare, and sun exposure on the day of treatment. Your provider gives a detailed protocol for the first week.",
    },
  ],
};

const morpheus8: ServiceDefinition = {
  category: "skin",
  slug: "morpheus8",
  name: "Microneedling RF (Morpheus8)",
  metaDescription:
    "Morpheus8 RF microneedling in Elkhorn, WI. Deeper skin tightening, contour refinement, and scar improvement for Walworth County and the Lake Geneva area.",
  heroDescription:
    "Deeper remodeling for tighter skin, sharper contours, and improved scars-Morpheus8 combines radiofrequency with microneedling to address both the surface and the deeper tissue that supports it.",
  whatIsIt: [
    "Morpheus8 is a fractional radiofrequency microneedling device that penetrates the skin at adjustable depths and delivers RF energy directly through insulated needles. This combination heats the collagen-rich dermis and underlying adipose tissue, triggering contraction, remodeling, and new collagen synthesis at a level standard microneedling cannot reach.",
    "The result is measurable skin tightening, improved jaw and lower face definition, reduced appearance of deep scars and textural irregularities, and-in some applications-subtle refinement of fat pockets directly beneath the skin. Your provider selects the appropriate tip, depth, and RF settings for your anatomy and concern.",
  ],
  howItWorks: [
    "Consultation to assess skin laxity, scar depth, target areas, and realistic expectations-including a review of downtime tolerance.",
    "Topical numbing cream applied for 30–45 minutes; some patients receive additional numbing for comfort at deeper settings.",
    "Morpheus8 treatment using tip and depth settings matched to each zone of the face or body being treated.",
    "Post-care protocol provided and a follow-up visit scheduled to assess healing and plan additional sessions if desired.",
  ],
  benefits: [
    "RF-driven collagen remodeling at depths standard microneedling cannot address",
    "Measurable skin tightening and improved jawline and neck definition",
    "Effective for rolling and boxcar acne scars as well as stretch marks",
    "Subtle fat-pocket refinement in treatment areas where RF reaches the subdermal layer",
    "Long-lasting results that continue to develop for three to six months",
    "Can be used on face and body treatment areas",
  ],
  candidate:
    "Adults with mild to moderate skin laxity, deeper acne scarring, early jowling, or textural irregularities who can accommodate two to five days of visible healing. Those with active acne, pacemakers, or certain skin conditions may not be candidates; reviewed at consultation.",
  expectBefore:
    "Pause retinoids and active exfoliants for five to seven days before treatment. Avoid extended sun exposure for two weeks prior. Arrive with clean skin; discuss all medications including blood thinners at your consultation.",
  expectDuring:
    "Numbing is applied in advance for 30–45 minutes. During treatment, the device delivers pulses at programmed depths and RF levels-most patients feel controlled heat and pressure. Mild pinpoint bleeding is normal. Sessions run approximately 60–90 minutes for full-face treatment.",
  expectAfter:
    "Swelling and redness are expected for 24–72 hours; some patients experience mild bruising. Skin texture may look rough or dotted as micro-wounds heal. Strict sun protection is required for several weeks. Full results continue developing for three to six months.",
  atAGlance: [
    "Visit: 60–90 min including numbing",
    "Downtime: 2–5 days of redness and swelling",
    "Best for: skin tightening, scars, contour refinement",
  ],
  goodFitIf: [
    "You're noticing skin laxity, early jowling, or loss of definition in the lower face or neck",
    "Deeper acne scars or textural irregularities are a priority concern",
    "You want a non-surgical tightening option with measurable depth and result",
    "You can plan around a few days of visible healing in exchange for meaningful, lasting improvement",
  ],
  visitAndResults:
    "Visible improvement begins as initial swelling resolves in one to two weeks. Collagen remodeling continues for three to six months, with final results often not fully apparent for several months after the last session. Many patients schedule a series of one to three treatments.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Morpheus8 handpiece resting on a clean treatment table in a modern aesthetic clinic - precision technology, professional setting, teal accent details. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Side profile highlighting a defined jawline and smooth neck area - warm studio light, no device or marks. Suggests the contour and tightening result achieved over a treatment series.",
  },
  faq: [
    {
      q: "Is Morpheus8 painful?",
      a: "Topical numbing is applied in advance, and settings are adjusted for your tolerance. Most patients describe controlled heat and pressure. Technique adjustments are made throughout the session.",
    },
    {
      q: "How is this different from standard microneedling?",
      a: "Morpheus8 delivers radiofrequency energy through the needle tips at adjustable depths, heating the deeper dermis and subdermal tissue. Standard microneedling creates micro-channels without thermal energy-effective for surface remodeling but not for the deeper tightening RF provides.",
    },
    {
      q: "How many treatments do I need?",
      a: "One to three treatments spaced four to six weeks apart is a common plan. Single sessions are sometimes sufficient for mild concerns; deeper or more extensive concerns benefit from a series.",
    },
    {
      q: "Can it be used on the body?",
      a: "Yes. Morpheus8 is used for body applications including abdomen, arms, thighs, and other areas with laxity or texture concerns.",
    },
    {
      q: "Is there a risk of burns or pigmentation changes?",
      a: "When performed by a trained provider using appropriate settings, risk is low. Darker skin types require specific protocols; candidacy is reviewed at consultation.",
    },
    {
      q: "How long do results last?",
      a: "Results from a completed series can last one to two years. Annual maintenance treatments are popular to sustain the improvement.",
    },
  ],
};

const iplPhotofacial: ServiceDefinition = {
  category: "skin",
  slug: "ipl-photofacial",
  name: "IPL Photofacial",
  metaDescription:
    "IPL photofacial in Elkhorn, WI at Elemental Skin & Body. Treat sun spots, redness, and uneven skin tone with broad-band light for Walworth County.",
  heroDescription:
    "Years of Lake Geneva sun show up differently on everyone. IPL targets the spots, capillaries, and uneven tone that dull your complexion-so your skin color looks like yours again.",
  whatIsIt: [
    "Intense pulsed light (IPL) delivers controlled broad-spectrum light pulses through a filtered handpiece that targets chromophores-pigment molecules in sun spots and freckles, and hemoglobin in visible capillaries and redness. The targeted cells absorb the light energy and are broken down, allowing the body to clear them over the following weeks.",
    "Unlike laser treatments that use a single wavelength, IPL can address both pigmentation and vascular concerns simultaneously in appropriate skin types. Your provider selects the filter and energy settings based on your Fitzpatrick skin type, the specific targets being treated, and the area of the face or body.",
  ],
  howItWorks: [
    "Skin consultation and Fitzpatrick typing to confirm candidacy, identify target concerns (pigmentation vs. redness vs. both), and select appropriate filter and energy settings.",
    "Protective eyewear applied; a cool gel is spread over the treatment area.",
    "Light pulses delivered through the handpiece across the treatment area-each pulse feels like a warm snap or rubber band flick.",
    "Post-care instructions including essential sun avoidance and SPF protocol during the treatment series.",
  ],
  benefits: [
    "Reduction in sun spots, freckles, and age spots over a series",
    "Decreased visible redness and capillaries in rosacea-prone and sun-damaged skin",
    "More even, unified skin tone that makes cosmetics apply more smoothly",
    "Non-ablative treatment with minimal recovery for most patients",
    "Dual targeting of pigment and vascular concerns in a single session type",
  ],
  candidate:
    "Best suited for lighter Fitzpatrick skin types (I–IV) with sun damage, freckles, redness, or visible capillaries. Darker skin types are at higher risk for pigmentation changes and may require alternative treatments-reviewed at consultation. Recent tanning, certain medications, and active skin conditions affect candidacy.",
  expectBefore:
    "Avoid sun exposure and tanning (including self-tanner) for four weeks before treatment. Pause retinoids and photosensitizing medications as directed. Arrive with clean, unmedicated skin.",
  expectDuring:
    "Treatment takes 20–45 minutes depending on the area. Protective eyewear is worn throughout. Each pulse delivers a warm snap sensation; a cooling handpiece and gel reduce discomfort. Skin will appear flushed and brown spots may look darker immediately after.",
  expectAfter:
    "Brown spots typically darken for three to seven days before beginning to flake off naturally-this is the expected response, not a complication. Do not pick at darkened spots. Daily SPF is required between sessions and for months after completing a series.",
  atAGlance: [
    "Visit: 30–45 min",
    "Downtime: redness 24 hrs, brown spots darken then flake 7–10 days",
    "Best for: sun spots, redness, uneven tone",
  ],
  goodFitIf: [
    "Sun spots, freckles, or uneven skin tone from years of outdoor life in Walworth County are your primary concern",
    "Persistent facial redness or visible capillaries bother you in photographs or conversation",
    "You want meaningful tone improvement without aggressive resurfacing or extended recovery",
    "A provider has confirmed your skin tone and current sun avoidance make you a candidate",
  ],
  visitAndResults:
    "Brown spots darken then flake off within seven to ten days after each session; final tone improvement is visible at four weeks. Most concerns improve over a series of three to five sessions spaced three to four weeks apart, followed by annual maintenance.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "IPL device in a modern treatment room with protective eye shields resting beside it on a clean tray - professional, reassuring, clinical. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of even-toned, clear skin on a cheekbone in warm natural light - smooth, unified color. Suggests the tone-evening result achieved over an IPL series.",
  },
  faq: [
    {
      q: "How many treatments will I need?",
      a: "Most patients see significant improvement over three to five sessions spaced three to four weeks apart. Maintenance once or twice a year after the initial series is common.",
    },
    {
      q: "Why do brown spots get darker after treatment?",
      a: "The darker appearance after IPL is the pigment rising to the surface as melanin is being broken down. This is the expected response-the darkened spots flake off naturally in the days that follow.",
    },
    {
      q: "Is it painful?",
      a: "Most patients describe a warm snap with each pulse. A cooled handpiece and gel reduce discomfort significantly. Sensitive areas like the nose may feel more intense.",
    },
    {
      q: "Can it be used on the body?",
      a: "Yes. IPL is used on the chest, neck, hands, and other areas with sun damage. Treatment parameters are adjusted for each area.",
    },
    {
      q: "What if my skin is darker?",
      a: "Higher Fitzpatrick skin types carry more risk of post-inflammatory pigmentation with IPL. Your provider will discuss whether IPL is appropriate or whether an alternative such as a chemical peel is a better fit.",
    },
    {
      q: "How important is sun protection during a series?",
      a: "Critical. Sun exposure between sessions can negate results and increase risk of uneven pigmentation. Daily SPF 30 or higher is non-negotiable throughout your series.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// BODY & DEVICES
// ─────────────────────────────────────────────────────────────────────────────

const laserHairRemoval: ServiceDefinition = {
  category: "body",
  slug: "laser-hair-removal",
  name: "Laser Hair Removal",
  metaDescription:
    "Laser hair removal in Elkhorn, WI at Elemental Skin & Body. Long-term hair reduction for face and body - serving Walworth County and Lake Geneva.",
  heroDescription:
    "Imagine walking into summer without a single wax appointment on your calendar. Laser hair removal provides long-term reduction of unwanted hair in planned sessions that fit your life.",
  whatIsIt: [
    "Laser hair removal targets melanin (pigment) in the hair follicle using concentrated light energy, selectively damaging the follicle to inhibit future growth while leaving surrounding tissue unaffected. Because follicles are only vulnerable during their active growth phase, a series of sessions is necessary to reach all hairs at the right time.",
    "Treatment areas include virtually anywhere on the face and body-upper lip, chin, underarms, bikini, legs, arms, back, and more. Your provider assesses your hair and skin type to select the appropriate laser settings for effective and safe treatment.",
  ],
  howItWorks: [
    "Consultation to evaluate hair and skin type, Fitzpatrick score, and determine which treatment areas are appropriate candidates for the laser being used.",
    "Shaving the treatment area before each session (provider or self); topical numbing is available for sensitive areas.",
    "Laser pulses delivered across the treatment area, targeting follicles while the cooling mechanism protects surface skin.",
    "Session-by-session assessment to track response; sessions are spaced based on hair growth cycles in each area.",
  ],
  benefits: [
    "Significant, long-term reduction in unwanted hair across face and body",
    "Elimination of ingrown hairs associated with shaving and waxing",
    "Smooth skin between sessions-no regrowth waiting time as with waxing",
    "Precision targeting of follicles without affecting surrounding skin when performed correctly",
    "Time and cost savings over a lifetime compared with ongoing waxing or shaving",
  ],
  candidate:
    "Best results are achieved on dark terminal hair against lighter skin due to melanin contrast. Certain skin and hair type combinations require specific laser selection. Blond, gray, red, or very fine hair may not respond well; reviewed at consultation. Active skin conditions, recent tanning, and certain medications affect timing.",
  expectBefore:
    "Shave the treatment area 24 hours before your session. Do not wax, pluck, or use hair-removal creams for at least four to six weeks before treatment-the follicle must be intact. Avoid sun exposure and tanning for four weeks prior.",
  expectDuring:
    "A cooling gel or device is applied to the treatment area. Laser pulses feel like a warm snap or flick; most patients tolerate it well. Session length varies from a few minutes for small areas to 45–60 minutes for legs or back.",
  expectAfter:
    "Expect redness and mild follicular swelling for a few hours-this is normal. Apply SPF to treated areas. Hairs shed gradually over two to three weeks following each session; avoid sun exposure and shaving for 24 hours post-treatment.",
  atAGlance: [
    "Per session: 15–60 min depending on area",
    "Series: 6–8 sessions recommended",
    "Best for: permanent reduction, ingrown hairs",
  ],
  goodFitIf: [
    "You're tired of shaving every other day or scheduling waxing appointments every few weeks",
    "Ingrown hairs on your bikini line, legs, or face are a persistent skin concern",
    "You have dark terminal hair and want a long-term solution confirmed appropriate at consultation",
    "You're ready to invest in a series of sessions for results you'll appreciate indefinitely",
  ],
  visitAndResults:
    "Each session targets actively growing follicles; most patients see significant reduction after four to six sessions with a full series of six to eight recommended. Annual touch-up sessions may be beneficial as dormant follicles become active over time.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Laser hair removal handpiece resting on a clean treatment surface in a professional clinic - precision technology, professional setting. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of smooth, bare skin on a forearm or lower leg in soft light - no device visible. Suggests the smooth, hair-free result achieved over a treatment series.",
  },
  faq: [
    {
      q: "How many sessions do I need?",
      a: "Most areas benefit from six to eight sessions to reach all follicles during their active growth phases. Some coarser areas or hormonal hair may require additional sessions.",
    },
    {
      q: "Does it work on all hair colors?",
      a: "Best results are on dark, coarse (terminal) hair. Blond, gray, or white hair contains insufficient melanin for most laser systems. Your provider will give an honest assessment of your hair and skin combination.",
    },
    {
      q: "Is it permanent?",
      a: "Laser hair removal achieves long-term significant reduction-not always 100% permanent elimination. Most patients achieve 70–90% reduction after a full series and may need occasional maintenance.",
    },
    {
      q: "How far apart are sessions spaced?",
      a: "Spacing depends on the area-facial hair grows faster (four to six weeks) while body hair cycles more slowly (six to ten weeks). Your provider sets a schedule at consultation.",
    },
    {
      q: "Is it safe for dark skin?",
      a: "Certain laser platforms are specifically designed for darker Fitzpatrick types. The consultation includes assessment of your skin type to confirm safe treatment parameters.",
    },
    {
      q: "Can I shave between sessions?",
      a: "Yes-shaving is fine between sessions. Waxing, plucking, or threading is not, as these remove the follicle that the laser needs to target.",
    },
  ],
};

const faceTite: ServiceDefinition = {
  category: "body",
  slug: "facetite",
  name: "FaceTite",
  metaDescription:
    "FaceTite minimally invasive RF contouring in Elkhorn, WI. Tighten lower face, jowls, and neck without surgery - Elemental Skin & Body, Walworth County.",
  heroDescription:
    "When non-invasive options haven't delivered the jawline or neck definition you're looking for-but surgery isn't where you want to go-FaceTite tightens from the inside out with RF energy.",
  whatIsIt: [
    "FaceTite is a minimally invasive radiofrequency-assisted lipocontouring (RFAL) procedure that uses a small cannula placed beneath the skin alongside an external electrode to deliver RF energy between them. This heats and contracts the fibrous tissue and skin from the inside while simultaneously addressing any underlying fat contributing to laxity.",
    "It is specifically designed for the lower face, jawline, and neck-areas where non-invasive treatments often fall short but where surgical options feel like more than the concern warrants. Results are real and visible, but the procedure requires small entry points, local anesthesia, and compression wear during recovery.",
  ],
  howItWorks: [
    "Detailed consultation with careful evaluation of facial anatomy, laxity degree, skin quality, and realistic expectations for what RFAL can achieve versus surgical options.",
    "Treatment planning including areas to address, expected recovery timeline, and compression garment protocol.",
    "In-office procedure under local anesthesia; RF energy delivered through a fine cannula as the provider maps targeted areas.",
    "Post-procedure compression garment worn as directed; follow-up visits to assess healing and progressive tightening results.",
  ],
  benefits: [
    "Measurable tightening of the lower face, jowl, and neck with a single procedure",
    "RF-induced collagen remodeling that continues improving for three to six months after treatment",
    "Small entry points and local anesthesia rather than general anesthesia",
    "Meaningful improvement for patients between non-invasive options and full surgical facelift",
    "Simultaneous treatment of skin laxity and any underlying fat contributions",
  ],
  candidate:
    "Adults with mild to moderate lower face or neck laxity who want more than non-invasive devices can deliver but are not ready or appropriate candidates for a surgical facelift. Candidacy requires a thorough in-person assessment; not all patients are appropriate candidates.",
  expectBefore:
    "A detailed pre-procedure consultation covers medical history, medications (including blood thinners), and any conditions that affect anesthesia or healing. Pre-operative instructions will be provided specific to your plan.",
  expectDuring:
    "FaceTite is performed under local anesthesia in-office. The procedure typically takes one to two hours depending on the areas treated. You remain awake but comfortable throughout.",
  expectAfter:
    "Expect noticeable swelling and bruising for one to two weeks. Compression garment wear is required as directed. Most patients return to normal social activity within seven to ten days; final tightening results evolve over three to six months.",
  atAGlance: [
    "Visit: 1–2 hrs in-office procedure",
    "Downtime: 7–14 days; compression wear required",
    "Best for: lower face laxity, jawline, neck",
  ],
  goodFitIf: [
    "You see jowling or neck laxity when you look in the mirror but are not ready or interested in a surgical facelift",
    "Non-invasive devices haven't produced the definition you're looking for in the lower face or neck",
    "You want a procedure with meaningful tightening from the inside out",
    "You understand results develop progressively and can plan around a recovery period",
  ],
  visitAndResults:
    "Initial tightening is visible once post-procedure swelling resolves at one to two weeks; the full benefit of RF-induced collagen remodeling becomes apparent at three to six months and continues to mature.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Consultation room with InMode-style device visible in background - physician and patient reviewing a treatment diagram together. Professional, confident, clinical atmosphere.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Side profile of a defined jawline and clean neck - warm studio light, no marks or device visible. Suggests the tightening and contour result achievable with FaceTite.",
  },
  faq: [
    {
      q: "Is FaceTite surgery?",
      a: "It is minimally invasive-it requires small entry points and local anesthesia-but is not a surgical facelift. Results are meaningful but differ from what surgical excision can achieve.",
    },
    {
      q: "What is the downtime like?",
      a: "Most patients take one to two weeks before feeling comfortable in social settings. Compression garment wear extends beyond that; your provider gives a specific timeline.",
    },
    {
      q: "Can it replace a facelift?",
      a: "For patients with mild to moderate laxity, FaceTite may deliver satisfying results without surgery. Patients with significant skin excess or deep structural changes may be better served by surgical options, which your provider will discuss honestly.",
    },
    {
      q: "When will I see final results?",
      a: "Progressive tightening occurs over three to six months as RF-stimulated collagen matures. Some patients continue to see improvement up to nine months post-procedure.",
    },
    {
      q: "Can it be combined with other treatments?",
      a: "FaceTite is often paired with other procedures to maximize outcomes-your consultation covers how your plan can be structured.",
    },
  ],
};

const bodytite: ServiceDefinition = {
  category: "body",
  slug: "bodytite",
  name: "BodyTite",
  metaDescription:
    "BodyTite RF-assisted body contouring in Elkhorn, WI. Address stubborn areas and skin laxity together - Elemental Skin & Body, Walworth County.",
  heroDescription:
    "Stubborn areas that resist every diet and exercise effort are frustrating on their own. BodyTite addresses them while stimulating skin tightening in the same treatment, for contour you can actually see.",
  whatIsIt: [
    "BodyTite is a radiofrequency-assisted lipocontouring (RFAL) procedure that uses the same principle as FaceTite applied to body areas-delivering RF energy between an internal cannula and an external electrode to heat and contract tissue while addressing underlying fat.",
    "Common treatment areas include the abdomen, flanks, arms, inner thighs, and knees. The simultaneous combination of fat treatment and skin tightening makes BodyTite particularly relevant for patients where loose skin has been a barrier to getting results from non-invasive fat reduction alone.",
  ],
  howItWorks: [
    "Comprehensive consultation assessing the treatment area, skin laxity, fat distribution, and realistic expectations for what BodyTite can achieve versus surgical body contouring.",
    "Pre-procedure planning including anesthesia approach, compression garment requirements, and activity restrictions.",
    "In-office procedure with local anesthesia; RF energy delivered through a small cannula as the provider works mapped zones.",
    "Post-procedure care including compression garment wear, follow-up visits, and timeline for progressive results assessment.",
  ],
  benefits: [
    "Simultaneous fat treatment and skin tightening-combined in a single procedure",
    "Addresses laxity that non-invasive fat reduction alone cannot correct",
    "RF-driven collagen remodeling continues improving for months post-procedure",
    "Available for multiple body areas including abdomen, arms, thighs, and flanks",
    "Minimally invasive approach compared with traditional excision-based body surgery",
  ],
  candidate:
    "Adults at or near a stable weight who have stubborn fat deposits with associated skin laxity that makes non-invasive-only approaches insufficient. Significant skin excess may still require surgical excision; candidacy is assessed thoroughly at consultation.",
  expectBefore:
    "Pre-procedure consultation covers medical history, medications, activity level, and post-procedure support (compression garment care, restricted activity). Specific preparation instructions are provided for your plan.",
  expectDuring:
    "Performed under local or tumescent anesthesia in-office. Duration depends on the number of areas treated. You are awake but comfortable; your provider monitors your response throughout.",
  expectAfter:
    "Swelling, bruising, and firmness in the treated area are expected for two to four weeks. Compression garment wear is required. Most patients return to light activity within one week; final contour and tightening results develop over three to six months.",
  atAGlance: [
    "Visit: varies by treatment area",
    "Downtime: compression wear; moderate recovery 1–2 weeks",
    "Best for: fat + skin laxity in one treatment",
  ],
  goodFitIf: [
    "You have a stubborn area that doesn't respond to diet and exercise and you also notice skin laxity in that zone",
    "You want contouring that addresses both fat and skin simultaneously rather than two separate procedures",
    "Surgery feels like more than your concern requires but non-invasive devices alone aren't enough",
    "Your weight is stable and you're ready for refinement rather than general weight loss",
  ],
  visitAndResults:
    "Visible contour change appears as swelling resolves over the first two weeks; skin retraction and tightening continue improving over three to six months as collagen remodels.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Clinical room with InMode BodyTite-style device on a stand - professional, modern, clinical setting. Clean lines, teal accent details. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Healthy torso or arm silhouette in profile under soft, directional studio light - smooth contour, no marks or device visible. Suggests the result potential achievable with BodyTite.",
  },
  faq: [
    {
      q: "Is this the same as liposuction?",
      a: "BodyTite adds RF energy for simultaneous skin tightening; traditional liposuction does not include this. Your provider explains both options and the difference in outcomes at consultation.",
    },
    {
      q: "How much fat can be addressed?",
      a: "BodyTite is intended for contouring and refinement, not significant fat removal. Candidacy and expected volume reduction are discussed based on your anatomy at consultation.",
    },
    {
      q: "When will I see results?",
      a: "Initial contour change is visible once swelling resolves-typically two to four weeks. Full results from collagen remodeling develop over three to six months.",
    },
    {
      q: "Will I need general anesthesia?",
      a: "BodyTite is typically performed under local or tumescent anesthesia in-office. General anesthesia is not typically required.",
    },
    {
      q: "What areas can be treated?",
      a: "Common areas include the abdomen, flanks, inner and outer thighs, arms, and knees. Multiple areas can sometimes be addressed in one session; scope is determined at consultation.",
    },
  ],
};

const quantum: ServiceDefinition = {
  category: "body",
  slug: "quantum",
  name: "Quantum",
  metaDescription:
    "Quantum energy-based skin and body treatments at Elemental Skin & Body in Elkhorn, WI. Advanced protocols selected to your concern - Walworth County.",
  heroDescription:
    "Advanced energy-based protocols selected by your provider after a thorough assessment-Quantum-class technology applied to the right concern, at the right settings, in the right hands.",
  whatIsIt: [
    "Quantum treatments leverage a multi-handpiece energy platform to address skin and body concerns with calibrated energy delivery. The specific modality-whether tightening, resurfacing, pigment, or body application-is matched to your anatomy, skin type, and downtime tolerance at consultation.",
    "The flexibility of Quantum-class technology means your provider isn't limited to a single approach. A plan built around your specific goals is more effective than applying the same protocol to every patient. Your consultation identifies exactly which Quantum application fits your concern.",
  ],
  howItWorks: [
    "Consultation to review your skin and body concerns, desired outcomes, and downtime availability-this drives handpiece and protocol selection.",
    "Treatment preparation including any necessary numbing, protective equipment, or pre-treatment skin priming.",
    "Energy delivery using the selected Quantum protocol; settings adjusted in real time based on your skin's response.",
    "Post-care instructions and a follow-up plan tailored to the specific treatment performed.",
  ],
  benefits: [
    "Protocol matched to your specific concern rather than a fixed one-size approach",
    "Multi-handpiece platform versatility for skin and body applications",
    "Medical-grade energy delivery with provider oversight",
    "Treatments can be staged or combined depending on concern and recovery tolerance",
  ],
  candidate:
    "Candidacy depends entirely on the specific Quantum protocol selected. Your consultation identifies whether you are appropriate for the planned treatment, including skin type, medications, and downtime considerations.",
  expectBefore:
    "Pre-treatment preparation is protocol-specific and will be outlined at your consultation. General guidelines include sun avoidance, pausing certain topicals, and arriving with clean skin.",
  expectDuring:
    "Your provider explains each step of the selected protocol, applies any comfort measures, and monitors your response throughout. Session length varies by handpiece and area.",
  expectAfter:
    "Post-care and downtime are protocol-specific-your provider outlines exactly what to expect for your specific treatment, including any restrictions and healing timeline.",
  atAGlance: [
    "Visit: 30–60 min (varies by protocol)",
    "Downtime: varies by treatment selected",
    "Best for: determined at consultation",
  ],
  goodFitIf: [
    "You want an energy-based treatment and want your provider to recommend the best modality for your specific concern",
    "Your skin or body concern benefits from a platform that offers multiple energy approaches",
    "You prefer a consultation-first, technology-second approach to device selection",
  ],
  visitAndResults:
    "Timeline and maintenance schedule depend entirely on the specific Quantum protocol selected for your concern-reviewed comprehensively at consultation.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Modern multi-handpiece energy device in a clean aesthetic treatment room - precision, versatility, professional. Teal accent details. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Provider hand near a precision energy device handpiece in a clinical setup - suggests thoughtful, expert application of technology to a specific concern.",
  },
  faq: [
    {
      q: "What specific treatments does Quantum cover?",
      a: "Your provider will explain which Quantum handpieces and protocols are available and which best matches your concern at consultation.",
    },
    {
      q: "How many sessions will I need?",
      a: "This depends entirely on the selected protocol and your concern. Your provider outlines a realistic plan at consultation.",
    },
    {
      q: "Is it safe for my skin type?",
      a: "Candidacy including skin type compatibility is reviewed at consultation for each specific protocol.",
    },
  ],
};

const emsculptNeo: ServiceDefinition = {
  category: "body",
  slug: "emsculpt-neo",
  name: "Emsculpt Neo",
  metaDescription:
    "Emsculpt Neo® muscle building and fat reduction in Elkhorn, WI. Simultaneous HIFEM and RF technology - Elemental Skin & Body, Walworth County.",
  heroDescription:
    "More muscle, less fat-simultaneously-in 30 minutes of lying still. Emsculpt Neo® combines HIFEM technology with RF to produce body composition results that complement your existing fitness routine.",
  whatIsIt: [
    "Emsculpt Neo® is the only FDA-cleared device to simultaneously build muscle and reduce fat in a single 30-minute session. It combines High-Intensity Focused Electromagnetic (HIFEM) technology, which contracts muscles at supramaximal intensity beyond what voluntary exercise achieves, with Radiofrequency (RF) energy that heats and reduces the fat layer above the muscle.",
    "Clinical studies on the Emsculpt Neo platform report an average 30% reduction in subcutaneous fat and 25% increase in muscle volume in treated areas after a standard four-session series. Common treatment areas include abdomen, buttocks, arms, thighs, and calves. Emsculpt Neo is not a weight loss treatment-it is a body composition and contouring treatment for patients near their goal weight.",
  ],
  howItWorks: [
    "Consultation to confirm candidacy, review treatment areas, and discuss realistic expectations based on your current body composition and fitness baseline.",
    "Applicators positioned and secured over the treatment area; settings selected based on your tolerance and target.",
    "30-minute session during which RF heats the treatment area and HIFEM drives thousands of supramaximal muscle contractions-no movement required on your part.",
    "Series of four sessions completed over two to three weeks; reassessment and maintenance planning at the follow-up visit.",
  ],
  benefits: [
    "Simultaneous fat reduction and muscle building in a single 30-minute session",
    "FDA-cleared technology with published clinical data on results",
    "No incisions, anesthesia, or downtime-return to normal activity immediately",
    "Effective for abdomen, buttocks, arms, calves, and thighs",
    "Complements existing exercise programs rather than replacing them",
    "Measurable body composition change confirmed in peer-reviewed clinical studies",
  ],
  candidate:
    "Adults at or near a healthy weight who want to improve muscle tone and reduce a specific fat area that exercise alone hasn't fully addressed. Not suitable for patients with metal implants in the treatment zone, pacemakers, or during pregnancy. BMI and treatment area are reviewed at consultation.",
  expectBefore:
    "No special preparation is required. Eat lightly before treatment if you prefer; sessions are typically more comfortable on a not-too-full stomach. Wear comfortable, non-metallic clothing for the treatment area.",
  expectDuring:
    "Applicators are placed on the treatment area and secured. You feel intense muscle contractions alternating with vibrating sensations as the RF heats the area. The intensity is adjustable-your provider increases it gradually to your tolerance. You remain still and the device does the work.",
  expectAfter:
    "Treated muscles may feel sore like after an intense workout for one to three days-this is expected and indicates the treatment is working. No wound, redness, or visible recovery. Resume all normal activities immediately.",
  atAGlance: [
    "Visit: 30 min per session",
    "Series: 4 sessions over 2–3 weeks",
    "Best for: muscle building + fat reduction, no downtime",
  ],
  goodFitIf: [
    "You exercise consistently but a specific area-abs, glutes, arms-won't respond the way you want",
    "You want measurable body composition improvement without surgery or recovery time",
    "You're postpartum and working on core reconnection after medical clearance",
    "You want to see what more muscle engagement actually looks and feels like",
  ],
  visitAndResults:
    "Patients often notice muscle engagement changes and early results within two to four weeks. Fat reduction and muscle definition results continue to develop over two to three months following the final session. Maintenance sessions every three to six months are popular.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Emsculpt Neo applicators being prepared for abdominal treatment in a modern clinic - professional setup, no patient visible. Clean, clinical, results-focused atmosphere.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Athletic abdomen side profile under warm, directional studio light - toned and defined. Suggests the muscle and contour outcome achievable with Emsculpt Neo.",
  },
  faq: [
    {
      q: "Is this a weight loss treatment?",
      a: "No. Emsculpt Neo targets body composition-muscle building and fat reduction in a specific area. Patients near their goal weight see the best results.",
    },
    {
      q: "How many sessions do I need?",
      a: "The standard protocol is four sessions over two to three weeks. Some patients choose additional sessions for enhanced results.",
    },
    {
      q: "When will I see results?",
      a: "Many patients notice changes beginning two to four weeks after completing the series. Full results-including the fat reduction component-develop over two to three months.",
    },
    {
      q: "Does it hurt?",
      a: "The intense muscle contractions are unusual and intense but not painful. RF warmth is comfortable. Intensity is increased gradually and can be adjusted at any point.",
    },
    {
      q: "Can it be used on the buttocks?",
      a: "Yes-Emsculpt Neo is popular for gluteal muscle development and contouring. Different applicators are used for each body area.",
    },
    {
      q: "Do I need to exercise less?",
      a: "Absolutely not. Emsculpt Neo is designed to complement your fitness routine, not replace it. Most patients find their workouts feel more effective after a series.",
    },
  ],
};

const emsella: ServiceDefinition = {
  category: "body",
  slug: "emsella",
  name: "Emsella",
  metaDescription:
    "Emsella® pelvic floor treatment in Elkhorn, WI. Non-invasive electromagnetic strengthening for stress incontinence and pelvic tone - Elemental Skin & Body.",
  heroDescription:
    "The pelvic floor is one of the most overlooked muscles in the body-until it reminds you it exists. Emsella® delivers thousands of supramaximal contractions per session, fully clothed, in about 28 minutes.",
  whatIsIt: [
    "Emsella® is an FDA-cleared device that uses High-Intensity Focused Electromagnetic (HIFEM) technology to stimulate the entire pelvic floor musculature from outside the body. You sit fully clothed on a specialized chair, and the device drives thousands of supramaximal contractions per session-equivalent to thousands of Kegel exercises without any voluntary effort.",
    "The primary clinical indication is stress urinary incontinence (SUI)-the leakage that occurs with sneezing, laughing, jumping, or coughing. It is also used for urge incontinence and general pelvic floor strengthening. Clinical studies on the platform report significant improvement in quality of life and incontinence scores after a standard series.",
  ],
  howItWorks: [
    "Consultation to discuss your symptoms, history, and goals-and confirm that Emsella is an appropriate option versus pelvic physical therapy or medical management.",
    "You sit fully clothed on the Emsella chair; no gown change or disrobing required.",
    "28-minute session during which you feel rhythmic, intense pelvic floor contractions. Intensity is adjustable to your comfort level.",
    "Series of six sessions over three weeks typically recommended; response assessment at a follow-up visit after the final session.",
  ],
  benefits: [
    "Significant improvement in stress urinary incontinence reported in peer-reviewed clinical studies",
    "Non-invasive-no incisions, injections, or insertion of any kind",
    "Fully clothed treatment with no need to undress",
    "28 minutes per session-fits into a lunch break or appointment slot",
    "Addresses entire pelvic floor musculature, not just the muscles targeted by isolated Kegel exercises",
    "Discreet concern addressed in a private, professional setting",
  ],
  candidate:
    "Adults experiencing stress urinary incontinence, urge incontinence, or general pelvic floor weakness who have been evaluated by a provider. Not suitable during pregnancy, for patients with metal implants in the treatment zone, or certain pelvic floor conditions; reviewed at consultation.",
  expectBefore:
    "No special preparation is needed. Wear comfortable clothing. Mention any pelvic conditions, prior surgeries, or implants at your consultation.",
  expectDuring:
    "You sit comfortably on the chair throughout the 28-minute session. The sensations are unique-rhythmic, intense contractions you don't control. Most patients find the experience unusual but not painful. Intensity is increased gradually and can be adjusted.",
  expectAfter:
    "You may experience mild pelvic muscle soreness similar to after a workout. No wound, recovery period, or activity restriction. Normal activities resume immediately.",
  atAGlance: [
    "Visit: ~28 min, fully clothed",
    "Series: 6 sessions over 3 weeks",
    "Best for: stress incontinence, pelvic floor tone",
  ],
  goodFitIf: [
    "You experience leakage when you sneeze, laugh, jump, or exercise and have accepted it as your new normal",
    "You've tried Kegel exercises but consistency or results have been frustrating",
    "Pelvic floor changes from pregnancy, postpartum recovery, or menopause are affecting your confidence",
    "You want a discreet, non-invasive approach that doesn't require any undressing",
  ],
  visitAndResults:
    "Many patients report improvement after the third session; full benefit is typically assessed after the complete six-session series over three weeks. Maintenance sessions are individualized based on your ongoing response.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Emsella chair in a clean, private treatment room - welcoming, non-clinical feel with soft lighting. Dignified and professional atmosphere. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of the Emsella chair seat surface to show the device clearly - clean, modern design. Conveys technology without being clinical or intimidating.",
  },
  faq: [
    {
      q: "Do I need to take off my clothes?",
      a: "No. Emsella is a fully clothed treatment. You sit on the chair in your regular clothes-no gown, no undressing.",
    },
    {
      q: "How quickly will I notice improvement?",
      a: "Many patients report improvement beginning around the third session. Full benefit is typically apparent one to two months after completing the series.",
    },
    {
      q: "Is it only for women?",
      a: "No. Emsella is used for pelvic floor concerns in both men and women. Male applications include stress urinary incontinence and post-prostate surgery recovery.",
    },
    {
      q: "How long do results last?",
      a: "Duration varies; many patients maintain improvement for six to twelve months. Maintenance sessions are recommended based on your individual response.",
    },
    {
      q: "Is this a replacement for pelvic floor physical therapy?",
      a: "Not necessarily-Emsella and pelvic PT can be complementary. Your provider can discuss how Emsella fits alongside or instead of other approaches.",
    },
    {
      q: "What about metal implants or IUDs?",
      a: "Metal implants in the pelvic zone are generally a contraindication. Copper and hormonal IUDs require a specific candidacy review-discuss this at consultation.",
    },
  ],
};

const shockwave: ServiceDefinition = {
  category: "body",
  slug: "shockwave",
  name: "Shockwave",
  metaDescription:
    "Shockwave acoustic therapy at Elemental Skin & Body in Elkhorn, WI. Musculoskeletal, intimate wellness, and select aesthetic protocols - Walworth County.",
  heroDescription:
    "Pulsatile acoustic energy applied where you need it-whether for a musculoskeletal concern, intimate wellness, or a select aesthetic protocol recommended after your provider evaluates your goals.",
  whatIsIt: [
    "Shockwave therapy delivers high-energy acoustic pulses to targeted tissue through a handheld applicator. These mechanical pulses stimulate circulation, promote cellular activity, support tissue remodeling, and modulate nerve signaling depending on the clinical goal.",
    "At Elemental Skin & Body, shockwave is used across several clinical contexts-musculoskeletal discomfort, intimate wellness protocols, and select aesthetic applications-each with its own evidence base and treatment parameters. Your provider will identify which indication applies to your situation and whether shockwave is the appropriate tool.",
  ],
  howItWorks: [
    "Consultation to identify your clinical indication and confirm shockwave is appropriate for your concern.",
    "Coupling gel applied to the treatment area; the applicator is positioned and settings selected for your indication and tolerance.",
    "Treatment session of 15–30 minutes per area with acoustic pulses delivered at the programmed frequency and energy level.",
    "Series planning-most indications benefit from three to six sessions; your provider outlines the recommended schedule and expected response timeline.",
  ],
  benefits: [
    "Non-invasive application with no incisions, injections, or surgical preparation",
    "Stimulates circulation and tissue remodeling in targeted areas",
    "Multiple clinical applications in one platform",
    "Short session times with no required downtime for most protocols",
    "Evidence supporting use across musculoskeletal, intimate wellness, and aesthetic indications",
  ],
  candidate:
    "Candidacy depends on the specific indication being treated. Your provider reviews your history, symptoms, and goals to confirm whether shockwave therapy is appropriate and which protocol applies. Certain implants and conditions are contraindications.",
  expectBefore:
    "Preparation is indication-specific. Arrive without lotions or oils on the treatment area. Mention all medications, implants, and relevant medical history at your consultation.",
  expectDuring:
    "The applicator delivers rhythmic pulses to the tissue-sensation varies from mild pressure to moderate intensity depending on settings and the area treated. Intensity is adjustable throughout.",
  expectAfter:
    "Some temporary soreness or mild redness in the treatment area is normal. Activity modifications depend on the indication; your provider gives specific post-care guidance for your plan.",
  atAGlance: [
    "Visit: 15–30 min per area",
    "Series: typically 3–6 sessions",
    "Best for: evaluated at consultation",
  ],
  goodFitIf: [
    "You have a musculoskeletal concern your provider recommends acoustic therapy for",
    "You're exploring a non-invasive option for intimate wellness or specific aesthetic concerns",
    "You prefer a provider-guided, consultation-first approach to whether this treatment is right for you",
  ],
  visitAndResults:
    "Response varies by indication and individual. Your provider outlines realistic expectations and a session schedule at consultation.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Shockwave device handpiece resting on a treatment table in a clean clinical setting - professional, precision-focused. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Provider applying a shockwave applicator to a patient's lower leg or joint area with clinical precision - professional close-up, no identifiable patient features.",
  },
  faq: [
    {
      q: "Is shockwave painful?",
      a: "Sensation varies by the area and energy setting. Most patients describe it as intense pressure or mild discomfort rather than pain. Intensity is adjusted throughout the session.",
    },
    {
      q: "How many sessions will I need?",
      a: "Most protocols recommend three to six sessions. Your provider outlines a specific plan based on your indication and response.",
    },
    {
      q: "What conditions is shockwave used for?",
      a: "At Elemental Skin & Body, shockwave is used for select musculoskeletal concerns, intimate wellness indications, and specific aesthetic protocols-reviewed case by case at consultation.",
    },
    {
      q: "Is there any downtime?",
      a: "Most protocols have minimal downtime. Your provider gives indication-specific post-care instructions.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WELLNESS
// ─────────────────────────────────────────────────────────────────────────────

const medicalWeightLoss: ServiceDefinition = {
  category: "wellness",
  slug: "medical-weight-loss",
  name: "Medical Weight Loss",
  metaDescription:
    "Physician-supervised medical weight loss in Elkhorn, WI. Nutrition, accountability, labs, and medication options when appropriate - Elemental Skin & Body.",
  heroDescription:
    "When diet and exercise aren't producing results-or life, hormones, and metabolism are working against you-a physician-supervised plan provides the structure, tools, and monitoring to change the equation.",
  whatIsIt: [
    "Medical weight loss at Elemental Skin & Body combines a thorough metabolic and health assessment with structured nutrition guidance, accountability check-ins, and FDA-cleared pharmacotherapy when you qualify and opt in. It is not a program you follow alone-it is a supervised partnership.",
    "Plans are built around your labs, medical history, lifestyle, and goals. If GLP-1 receptor agonists or other approved medications are appropriate for your case, that conversation happens after a proper evaluation-never as a starting assumption. Weight is a complex health concern influenced by hormones, sleep, stress, and metabolism; your plan addresses the whole picture.",
  ],
  howItWorks: [
    "Initial consultation reviewing medical history, current medications, lifestyle factors, and weight history-including any prior attempts at weight management.",
    "Baseline labs to evaluate metabolic markers, hormones, and any factors affecting weight or medication candidacy.",
    "Personalized plan development: dietary approach, activity guidance, accountability structure, and pharmacotherapy review if appropriate.",
    "Regular follow-up visits to monitor progress, adjust the plan, and provide ongoing support-weight loss is not a one-appointment outcome.",
  ],
  benefits: [
    "Physician oversight throughout the plan, not just at the starting point",
    "Lab-informed decisions about medication candidacy rather than assumption-based prescribing",
    "Accountability structure that most self-directed programs lack",
    "Addresses co-occurring hormonal or metabolic factors that affect weight",
    "Plan that adjusts over time based on your actual response",
  ],
  candidate:
    "Adults who have not achieved their weight goals through diet and exercise alone, or who have a BMI or health history that suggests medical oversight is appropriate. Medication options require evaluation and are never guaranteed before assessment.",
  expectBefore:
    "Come prepared with an honest weight and health history, a list of current medications, and any recent labs you have. The more context you provide, the more tailored your initial plan will be.",
  expectDuring:
    "Initial visits are 45–60 minutes covering a thorough history and plan development. Follow-up visits are shorter and focused on progress, adjustments, and ongoing support.",
  expectAfter:
    "Weight loss is a process measured over weeks and months, not a single appointment. Your provider sets realistic expectations for your timeline based on your starting point, plan, and whether pharmacotherapy is included.",
  atAGlance: [
    "Initial consult: 45–60 min",
    "Program: ongoing physician supervision",
    "Best for: metabolic support, accountability, GLP-1 evaluation",
  ],
  goodFitIf: [
    "You've been trying to lose weight and it's not moving despite consistent effort",
    "You want medically supervised support-not just a meal plan app or a program you follow alone",
    "You've heard about GLP-1 medications and want an honest evaluation from a physician, not a telehealth shortcut",
    "Your weight feels connected to hormones, sleep, or metabolic changes and you want someone to actually look at the full picture",
  ],
  visitAndResults:
    "Timeline for meaningful change depends on starting point, plan adherence, and whether pharmacotherapy is part of your plan. Your provider sets realistic milestones and adjusts the approach based on your actual progress at each visit.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Warm consultation room: provider reviewing wellness paperwork or a metabolic chart with a patient. Collaborative, hopeful, non-clinical atmosphere. No identifiable patient information visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Healthy balanced meal in a natural light setting alongside a notepad and pen - lifestyle context, clean and aspirational without being preachy.",
  },
  faq: [
    {
      q: "Do you prescribe GLP-1 medications like semaglutide?",
      a: "Options are discussed after a thorough review of your labs, medical history, and BMI. Prescriptions are never guaranteed before evaluation-and we don't prescribe to patients who aren't candidates.",
    },
    {
      q: "Is this only medication-based?",
      a: "No. Medical weight loss is a comprehensive approach. Medication may be one component for qualifying patients, but nutrition guidance, accountability, and monitoring are central to every plan.",
    },
    {
      q: "How is this different from a commercial weight loss program?",
      a: "Physician supervision, lab monitoring, and the ability to address hormonal or metabolic contributors distinguish medical weight loss from commercial programs.",
    },
    {
      q: "How long does it take to see results?",
      a: "Meaningful progress typically begins within the first four to eight weeks with consistent adherence. Your provider sets realistic expectations based on your starting point and plan.",
    },
    {
      q: "Do I need labs before starting?",
      a: "Yes. Baseline labs are an essential part of the evaluation and inform both your plan and medication candidacy.",
    },
    {
      q: "What if I've tried everything and nothing works?",
      a: "That's exactly the situation medical weight loss is designed for. Metabolic, hormonal, or other physiological barriers often explain why standard efforts fall short. We evaluate those first.",
    },
  ],
};

const bioHormoneReplacement: ServiceDefinition = {
  category: "wellness",
  slug: "bio-id-hormone-replacement",
  name: "BIO-ID Hormone Replacement",
  metaDescription:
    "Bioidentical hormone replacement at Elemental Skin & Body, Elkhorn WI. Lab-guided BHRT for fatigue, brain fog, mood, and hormone deficiency - Walworth County.",
  heroDescription:
    "Fatigue, brain fog, low mood, and changes no lab result has explained-hormonal imbalance affects quality of life in ways a number doesn't always capture. Bioidentical replacement, guided by labs and symptoms, changes that.",
  whatIsIt: [
    "Bioidentical hormone replacement therapy (BHRT) uses hormones with a molecular structure identical to those produced by the human body-most commonly estrogen, progesterone, testosterone, and DHEA-to restore levels that have declined due to age, perimenopause, menopause, or other factors.",
    "At Elemental Skin & Body, every BHRT plan begins with comprehensive labs and a detailed symptom review. Dosing is individualized to your results and how you feel-not applied from a standard chart. Follow-up labs are required to confirm levels are in a therapeutic range and to guide ongoing adjustments safely.",
  ],
  howItWorks: [
    "Initial consultation covering symptoms, medical and family history, current medications, and any prior hormonal evaluations.",
    "Comprehensive baseline labs measuring relevant hormones and metabolic markers before any treatment begins.",
    "Plan development: hormone selection, delivery method, and starting dose based on your labs and symptom profile.",
    "Regular follow-up labs and visits to monitor levels, assess symptom response, and adjust dosing over time.",
  ],
  benefits: [
    "Hormone molecules structurally matched to those your body produces",
    "Individualized dosing based on labs and symptoms rather than one-size protocols",
    "Addresses multiple overlapping symptoms-fatigue, cognition, mood, libido, body composition-in one plan",
    "Ongoing monitoring and dose adjustment to keep levels in a therapeutic range",
    "Available for appropriate patients of multiple genders",
  ],
  candidate:
    "Adults with confirmed hormone deficiency on labs who have symptoms affecting quality of life. Not appropriate for patients with certain hormone-sensitive conditions; a thorough evaluation including medical and family history is required before treatment.",
  expectBefore:
    "Come to your initial consultation with a list of current symptoms, medications, and any prior lab work. Fasting may be required for your baseline blood draw-confirmed at scheduling.",
  expectDuring:
    "Initial visits are comprehensive and educational-your provider reviews your labs in detail and explains the proposed plan, delivery method, and what to expect as levels adjust. Follow-up visits are shorter and focused on your response.",
  expectAfter:
    "Hormonal balance is typically not immediate-most patients notice meaningful changes within four to eight weeks as levels stabilize. Follow-up labs confirm that dosing is in a safe and effective range.",
  atAGlance: [
    "Initial labs + consult",
    "Follow-up monitoring required",
    "Best for: confirmed hormonal deficiency with symptoms",
  ],
  goodFitIf: [
    "Fatigue, brain fog, low mood, or low libido have become your new normal and you want more than a shrug from a provider",
    "Perimenopause or menopause symptoms are meaningfully affecting your quality of life",
    "You've been told your labs are 'normal' but still feel significantly off",
    "You want a bioidentical approach with actual lab monitoring-not a convenience-first prescription",
  ],
  visitAndResults:
    "Many patients notice meaningful improvement in energy, mood, and cognitive clarity within four to eight weeks as hormone levels stabilize. Ongoing monitoring ensures levels stay in a therapeutic range and dosing evolves as your physiology changes over time.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Lab results printout alongside a calm consultation desk - professional, personal, and data-informed. Warm lighting. No identifiable patient information visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Warm morning light through a window beside a plant and resting hands - restorative, calm atmosphere. Conveys the quality-of-life improvement that drives hormone optimization.",
  },
  faq: [
    {
      q: "Is BHRT the same as traditional HRT?",
      a: "Bioidentical hormones are structurally identical to those your body produces; some synthetic hormones used in traditional HRT have different molecular structures. Your provider explains the distinction and the evidence for each at consultation.",
    },
    {
      q: "Do I need blood work before starting?",
      a: "Yes-always. Baseline and follow-up labs guide safe dosing and ongoing monitoring. Treatment without labs is not how we practice.",
    },
    {
      q: "How are bioidentical hormones delivered?",
      a: "Delivery methods include creams, gels, capsules, injections, and pellets depending on the hormone and your preference. Your provider recommends a method based on your plan.",
    },
    {
      q: "Is BHRT available for men?",
      a: "Yes. Testosterone decline affects men significantly-testosterone optimization for men with confirmed low levels is part of our hormone service.",
    },
    {
      q: "How long will I need to be on BHRT?",
      a: "This depends on your reason for starting, your response, and your overall health goals. Your provider discusses a realistic long-term plan at consultation.",
    },
    {
      q: "Are there risks?",
      a: "All hormone therapy has potential risks that depend on your medical history, the hormones used, and dosing. These are reviewed thoroughly during your consultation.",
    },
  ],
};

const wellnessLabs: ServiceDefinition = {
  category: "wellness",
  slug: "wellness-labs",
  name: "Wellness Labs",
  metaDescription:
    "Wellness laboratory panels in Elkhorn, WI at Elemental Skin & Body. Hormones, metabolism, inflammation, and nutrient markers - personalized health data.",
  heroDescription:
    "You can't optimize what you can't measure. A targeted lab panel gives you and your provider a clear view of your hormones, metabolism, inflammation, and nutrients-so every recommendation is grounded in your actual biology.",
  whatIsIt: [
    "Wellness labs are targeted laboratory panels that go beyond a standard annual physical to provide actionable data on hormones, metabolic function, inflammatory markers, nutrient levels, and other factors that influence how you feel, how your body responds to treatment, and what risks deserve attention.",
    "At Elemental Skin & Body, lab results are not just reviewed-they are explained in context and used to guide treatment sequencing, supplement recommendations, and ongoing plan adjustments. Labs can be an entry point for understanding your health or a milestone to track progress.",
  ],
  howItWorks: [
    "Consultation to identify which panel is most relevant to your symptoms, goals, or starting treatment.",
    "Blood draw-typically 15–30 minutes in office; fasting requirements confirmed at scheduling.",
    "Results reviewed by your provider, who explains findings in plain language and outlines recommended next steps.",
    "Follow-up labs may be scheduled to track response to any interventions or monitor levels over time.",
  ],
  benefits: [
    "Objective data informing every nutrition, supplement, hormone, and treatment recommendation",
    "Panels tailored to your specific concerns-hormone, metabolic, inflammatory, or nutrient-focused",
    "Provider-reviewed results explained in plain language-not just a number with a reference range",
    "Identifies underlying factors that explain symptoms a provider might otherwise miss",
    "Useful as a starting point, a progress check-in, or both",
  ],
  candidate:
    "Anyone seeking data-driven insight into their health, or any patient beginning a hormone, weight loss, wellness, or aesthetic plan who wants objective baseline measurements.",
  expectBefore:
    "Fasting may be required for certain panels-confirmed at scheduling. Stay well-hydrated. Bring a list of current medications and supplements that may affect lab values.",
  expectDuring:
    "Blood is drawn in office-a quick, routine process. Depending on the panel, multiple small vials are collected. Most draws take 10–15 minutes.",
  expectAfter:
    "Results are typically available within three to five business days. Your provider reviews them at a follow-up visit, explaining what's in or out of range, what it means for your specific situation, and what, if anything, to do about it.",
  atAGlance: [
    "Visit: ~15–30 min for draw",
    "Results: typically 3–5 business days",
    "Best for: baseline health data and treatment planning",
  ],
  goodFitIf: [
    "You want data-driven decisions about your supplements, diet, or treatment plan rather than guesswork",
    "You've started a weight loss or hormone plan and want labs to guide or confirm the approach",
    "You've never had a comprehensive metabolic or hormonal panel and are curious what yours actually shows",
    "You want a provider who explains your results in plain language and actually acts on them",
  ],
  visitAndResults:
    "Lab results are available within three to five business days. A follow-up appointment is recommended to review findings in detail and outline next steps based on your specific results.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Clean lab requisition form alongside small vials on a clinical desk - professional, data-informed, and organized. Warm lighting, no patient identifiers.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Wellness lab results printout showing anonymized hormone and metabolic values with a pen marking key data points - clinical but accessible.",
  },
  faq: [
    {
      q: "What panels do you offer?",
      a: "We offer a range of panels tailored to your concern-hormone panels for men and women, metabolic panels, inflammatory markers, nutrient levels, and thyroid function. Your provider recommends the most relevant panel at consultation.",
    },
    {
      q: "Do I need to fast?",
      a: "Some panels require fasting (typically 8–12 hours); others do not. This is confirmed when you schedule your draw.",
    },
    {
      q: "Do you accept outside lab results?",
      a: "Recent outside results can often be reviewed; your provider may request certain tests be repeated for consistency or completeness.",
    },
    {
      q: "Are results covered by insurance?",
      a: "Coverage depends on your insurance plan. We can provide documentation; patients are encouraged to verify with their insurer. Self-pay pricing is available.",
    },
    {
      q: "How often should I get labs?",
      a: "This depends on what you're monitoring. Hormone and metabolic optimization typically involves follow-up labs at three to six month intervals; specific protocols are recommended based on your plan.",
    },
  ],
};

const prpJointInjections: ServiceDefinition = {
  category: "wellness",
  slug: "prp-joint-injections",
  name: "PRP Joint Injections",
  metaDescription:
    "PRP joint injections in Elkhorn, WI at Elemental Skin & Body. Platelet-rich plasma for joint and soft-tissue discomfort - Walworth County regenerative wellness.",
  heroDescription:
    "Joint discomfort that limits the activities you love doesn't have to be the new normal. PRP joint injections use your own growth factors to support healing and comfort where it's needed.",
  whatIsIt: [
    "Platelet-rich plasma (PRP) for joint and soft-tissue applications concentrates growth factors from your own blood and delivers them directly to irritated or degenerative tissue. The goal is to support the body's natural healing and remodeling process in joints that are under chronic stress or have sustained soft-tissue injury.",
    "PRP joint injections are used for conditions like knee osteoarthritis, tendinopathy, and other soft-tissue injuries where the clinical evidence supports a regenerative approach. Injections are landmark-guided or ultrasound-guided for precision. Because PRP comes from your own blood, it is naturally well-tolerated.",
  ],
  howItWorks: [
    "Medical consultation to review symptoms, imaging if available, and clinical history-confirming that PRP is an appropriate option for your specific condition.",
    "Blood draw followed by centrifuge processing to concentrate platelets into PRP.",
    "Injection of PRP into the target joint or soft-tissue structure using landmark or ultrasound guidance for precision.",
    "Activity modification instructions for 24–48 hours post-injection; follow-up visit to assess response and discuss whether additional sessions are beneficial.",
  ],
  benefits: [
    "Regenerative approach using your own biology-naturally well-tolerated",
    "Targets the underlying tissue quality, not just symptom suppression",
    "Useful for patients seeking an option between conservative management and surgical intervention",
    "Evidence supporting use in knee osteoarthritis, tendinopathy, and other soft-tissue conditions",
    "Short procedure time with minimal required recovery",
  ],
  candidate:
    "Adults with joint or soft-tissue discomfort confirmed by clinical evaluation. Not all joint conditions are appropriate candidates; imaging review and clinical history are assessed before treatment. Active infection, certain blood conditions, and specific medications may affect candidacy.",
  expectBefore:
    "Hydrate well in the 24 hours before your appointment. Avoid anti-inflammatory medications (NSAIDs) for several days before the injection if your physician approves-they may reduce PRP efficacy. Mention all current medications at consultation.",
  expectDuring:
    "Blood draw followed by centrifuge preparation of PRP while the injection site is prepared and numbed. The injection itself is brief-typically a few minutes. Some pressure or discomfort is expected at injection.",
  expectAfter:
    "Mild soreness, swelling, or warmth at the injection site is normal for two to five days as the PRP integrates. Avoid NSAIDs and strenuous use of the treated joint for 48–72 hours. Activity modifications are reviewed in detail at your visit.",
  atAGlance: [
    "Visit: ~45–60 min including draw",
    "Downtime: light activity modification 48–72 hrs",
    "Best for: joint/soft-tissue discomfort, individually evaluated",
  ],
  goodFitIf: [
    "You have knee, shoulder, hip, or soft-tissue discomfort that limits how you move, exercise, or enjoy daily activities",
    "You want to explore a regenerative option before committing to more invasive intervention",
    "Anti-inflammatory medications manage your symptoms but you're looking for something that supports actual tissue healing",
    "Your physician has indicated PRP is an appropriate next step for your condition",
  ],
  visitAndResults:
    "Some patients notice improvement within two to four weeks; maximal benefit often develops over six to twelve weeks as the tissue responds. A short series of two to three injections spaced several weeks apart may be recommended for optimal results.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Provider preparing a PRP centrifuge tube in a clean clinical setting - golden-colored plasma visible in the tube, precise and professional. No identifiable patient.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Gloved hands preparing an injection near a knee or joint model - clinical precision, professional close-up, no identifiable patient features.",
  },
  faq: [
    {
      q: "How is PRP different from a cortisone injection?",
      a: "Cortisone injections reduce inflammation quickly but do not support tissue healing and can have side effects with repeated use. PRP aims to support the tissue repair process using your own growth factors.",
    },
    {
      q: "Is it painful?",
      a: "Local numbing is applied before the injection. Mild discomfort during and after is expected; significant pain is not.",
    },
    {
      q: "How soon will I feel improvement?",
      a: "Some patients notice change within two to four weeks; full response typically develops over six to twelve weeks. Response varies by the condition treated and the individual.",
    },
    {
      q: "Do I need imaging before treatment?",
      a: "Relevant imaging (X-ray, MRI, ultrasound) helps confirm the diagnosis and appropriate injection target. If you have recent imaging, bring it to your consultation.",
    },
    {
      q: "Is PRP covered by insurance?",
      a: "PRP joint injections are generally not covered by insurance and are billed as elective procedures. Pricing is discussed at consultation.",
    },
    {
      q: "How many injections do I need?",
      a: "Most protocols begin with one to three injections. Response is assessed before recommending additional sessions.",
    },
  ],
};

const oShot: ServiceDefinition = {
  category: "wellness",
  slug: "o-shot",
  name: "O-Shot® (Women's Intimate Wellness)",
  metaDescription:
    "O-Shot® women's intimate wellness at Elemental Skin & Body, Elkhorn WI. PRP for sensitivity, arousal, stress incontinence, and vaginal health - Walworth County.",
  heroDescription:
    "Changes in sensitivity, comfort, and intimate function are more common than most women talk about-and more treatable than most realize. The O-Shot® uses your own platelet-rich plasma to support tissue quality, sensation, and pelvic health in a private, clinical setting.",
  whatIsIt: [
    "The O-Shot® (Orgasm Shot) is a platelet-rich plasma (PRP) protocol designed specifically for women's intimate wellness. A small blood draw is processed in a centrifuge to concentrate growth factors, which are then injected into targeted areas of vaginal and clitoral tissue using thorough topical anesthetic to minimize discomfort.",
    "The growth factors in PRP support tissue vascularization, sensitivity, and cellular regeneration where applied. Common applications include stress urinary incontinence-the leakage that occurs with sneezing, laughing, or exercise-as well as reduced arousal, difficulty with orgasm, vaginal dryness, and dyspareunia (discomfort during intercourse). Because PRP comes from your own blood, it does not introduce synthetic hormones or foreign substances.",
    "This treatment is often a conversation women have been wanting to have with a provider for years. Every consultation and treatment is conducted in a private room with a licensed clinical provider. You will never feel rushed.",
  ],
  howItWorks: [
    "Private consultation reviewing your symptoms, health history, and goals in a discreet, judgment-free setting with a licensed provider.",
    "Blood draw and centrifuge preparation of PRP while the treatment area is prepared and topical numbing cream is applied.",
    "PRP injected into the clitoral area and anterior vaginal wall using precise, gentle technique-topical numbing ensures comfort is maintained throughout.",
    "Post-care instructions provided; a follow-up visit is scheduled to assess your response and determine if additional sessions would be beneficial.",
  ],
  benefits: [
    "Supports improved sensitivity, arousal, and orgasmic function",
    "May improve stress urinary incontinence by supporting urethral and vaginal tissue quality",
    "Reduces vaginal dryness and discomfort during intercourse",
    "Uses your own PRP-no synthetic hormones, no foreign substances",
    "Non-surgical, in-office procedure with minimal required downtime",
    "All care delivered privately by a licensed clinical provider",
  ],
  candidate:
    "Women experiencing reduced sensitivity, arousal difficulty, stress urinary incontinence, vaginal dryness, difficulty with orgasm, or discomfort during intercourse related to aging, hormonal changes, postpartum recovery, or other factors. Not appropriate during pregnancy or with certain platelet disorders; reviewed thoroughly at consultation.",
  expectBefore:
    "Hydrate well the day before and morning of your appointment. Avoid NSAIDs for several days before the blood draw if your provider approves. No other preparation is needed - topical numbing is applied at the appointment.",
  expectDuring:
    "The appointment takes approximately 45–60 minutes from arrival through completion. Topical numbing is applied and allowed adequate time to take effect before any injection. Most women report mild pressure rather than pain. All steps are explained before they happen and consent is thorough.",
  expectAfter:
    "Mild swelling or sensitivity in the treated area may be present for one to two days - this is normal. Tampon use and intimacy restrictions are briefly reviewed at your visit. Most patients return to normal daily activities immediately.",
  atAGlance: [
    "Visit: ~45–60 min",
    "Downtime: minimal, brief activity note",
    "Best for: sensitivity, arousal, SUI, vaginal health",
  ],
  goodFitIf: [
    "Sensitivity, arousal, or orgasmic function has changed since childbirth, menopause, or over recent years",
    "You experience leakage when sneezing, laughing, or exercising that limits what you feel comfortable doing",
    "Vaginal dryness or discomfort during intercourse is affecting your quality of life or your relationship",
    "You've been wanting to have this conversation with a provider but haven't found the right setting - this is that setting",
  ],
  visitAndResults:
    "Many women report improvement in sensitivity, comfort, and urinary control over four to twelve weeks as PRP promotes tissue remodeling and vascularization. A second session three to six months later may enhance or sustain results.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Private, warmly lit consultation room - comfortable chairs, soft lighting, welcoming and completely discreet. Professional atmosphere that conveys absolute privacy. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Clean clinical suite with discrete medical supplies arranged neatly on a tray - dignified, professional. No intimate body references or identifiable patient features.",
  },
  faq: [
    {
      q: "Is the visit completely private?",
      a: "Yes. The consultation and all treatment steps are conducted in a private room by a licensed provider. Everything discussed is fully confidential.",
    },
    {
      q: "Does it hurt?",
      a: "Topical numbing cream is applied and given adequate time to take effect before any injection. Most women report mild pressure or brief discomfort - not significant pain.",
    },
    {
      q: "How soon will I notice results?",
      a: "Many patients report improvement beginning four to eight weeks after treatment as PRP promotes tissue regeneration and vascularization. Full response may continue developing through twelve weeks.",
    },
    {
      q: "How many treatments are needed?",
      a: "Many women see meaningful improvement after one session. A second session three to six months later is sometimes recommended for enhanced or sustained results.",
    },
    {
      q: "Can the O-Shot be combined with Emsella?",
      a: "Yes - and it's a popular combination. The O-Shot supports tissue quality while Emsella strengthens the pelvic floor musculature. Your provider can discuss sequencing for best results.",
    },
    {
      q: "Is this a hormonal treatment?",
      a: "No. PRP uses concentrated growth factors from your own blood. It does not contain synthetic hormones and can be used alongside hormonal therapies or independently.",
    },
    {
      q: "What if I've already tried hormone therapy and still have these symptoms?",
      a: "The O-Shot addresses tissue quality and vascularization directly - mechanisms different from systemic or topical hormones. Many women find it a useful complement when hormones alone haven't fully resolved their concerns.",
    },
  ],
};

const pShot: ServiceDefinition = {
  category: "wellness",
  slug: "p-shot",
  name: "P-Shot® (Men's Intimate Wellness)",
  metaDescription:
    "P-Shot® men's intimate wellness at Elemental Skin & Body, Elkhorn WI. PRP for sexual function, sensitivity, and Peyronie's disease support - Walworth County.",
  heroDescription:
    "Changes in sensitivity, performance, and confidence in intimate areas are among the most common concerns men don't bring to a provider. The P-Shot® offers a regenerative, in-office approach using your own platelet-rich plasma-privately, professionally, and without systemic medications.",
  whatIsIt: [
    "The P-Shot® (Priapus Shot) is a platelet-rich plasma (PRP) protocol designed for men's intimate wellness. PRP is prepared from a small blood draw and injected into penile tissue after thorough topical and local anesthetic is applied. The growth factors concentrated in PRP support vascularization, tissue quality, and nerve function in the treated area.",
    "Clinical applications include supporting erectile function in men with mild to moderate concerns, improving penile sensitivity, and addressing the tissue changes associated with Peyronie's disease (fibrous plaque causing penile curvature or discomfort). The P-Shot is not a pharmaceutical and carries no systemic side effects - because it comes from your own blood.",
    "Every consultation and treatment is handled privately by a licensed clinical provider. Men who've hesitated to bring this type of concern to a doctor will find this is exactly the conversation worth having.",
  ],
  howItWorks: [
    "Private, confidential consultation reviewing your symptoms, health history, and goals - including any relevant prior treatments or medications.",
    "Blood draw and centrifuge processing of PRP while the treatment area is prepared with thorough topical and local anesthetic.",
    "PRP injected into specific areas of penile tissue using precise technique; numbing is prioritized so comfort is maintained throughout the brief procedure.",
    "Post-care instructions and a follow-up visit scheduled to assess your response and determine if additional sessions would benefit you.",
  ],
  benefits: [
    "Supports erectile function in men with mild to moderate concerns, evaluated individually",
    "May improve penile sensitivity and sexual sensation",
    "Potentially beneficial for Peyronie's disease symptoms (curvature, plaque, discomfort) in select patients",
    "Uses your own PRP - no pharmaceutical medications, no systemic side effects",
    "Non-surgical, in-office procedure with minimal required recovery",
    "Completely private - consultation and treatment in a dedicated private clinical setting",
  ],
  candidate:
    "Men experiencing changes in erectile function, penile sensitivity, or the symptoms of Peyronie's disease, who have been properly evaluated by a provider. The P-Shot is not a replacement for a medical workup of erectile dysfunction - underlying causes are reviewed at consultation. Candidacy requires a thorough clinical history.",
  expectBefore:
    "Hydrate well the day before and morning of your appointment. Avoid NSAIDs for several days before the blood draw if your provider approves. Discuss your full health history and current medications honestly at consultation - this ensures your plan is safe and appropriate.",
  expectDuring:
    "The appointment takes approximately 45–60 minutes. Thorough topical and local anesthetic is applied and given adequate time before any injection. Most men are surprised by how manageable the experience is. All steps are fully explained before they are performed - nothing happens without your understanding and consent.",
  expectAfter:
    "Mild swelling or sensitivity in the treated area may occur for one to three days - this is expected and resolves on its own. Activity and intimacy restrictions are brief and reviewed at your visit. Most patients return to normal daily activity without interruption.",
  atAGlance: [
    "Visit: ~45–60 min",
    "Downtime: minimal, brief activity note",
    "Best for: erectile function, sensitivity, Peyronie's support",
  ],
  goodFitIf: [
    "You've noticed changes in sensitivity, arousal quality, or performance that have started to affect your confidence",
    "You have mild to moderate erectile function concerns and want a non-pharmaceutical, regenerative option reviewed by a physician",
    "Peyronie's disease symptoms - curvature, plaque, or discomfort - are affecting your quality of life and you want a non-surgical approach evaluated",
    "You want a genuinely private, judgment-free conversation with a licensed clinician before deciding",
  ],
  visitAndResults:
    "Many men report improvement in sensitivity and function over four to twelve weeks as PRP supports tissue vascularization and regeneration. Response is individual; your provider outlines a realistic, honest timeline at consultation.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Private, professionally appointed consultation room - clean, neutral, and completely discreet. Warm lighting. Conveys confidentiality and clinical professionalism. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Clean clinical tray with discrete medical supplies arranged neatly - professional and dignified. No intimate body references or identifiable patient features.",
  },
  faq: [
    {
      q: "Is this completely confidential?",
      a: "Yes. The consultation and all treatment steps are conducted privately by a licensed provider. All clinical encounters are 100% confidential.",
    },
    {
      q: "Does it hurt?",
      a: "Thorough topical and local anesthetic is applied and given adequate time before any injection. Most men are genuinely surprised by how manageable the experience is.",
    },
    {
      q: "Can this help with erectile dysfunction?",
      a: "The P-Shot may support erectile function in men with mild to moderate concerns by improving vascularization and tissue quality. It is not a replacement for evaluation of underlying ED causes - that workup is part of the consultation process.",
    },
    {
      q: "Can it help with Peyronie's disease?",
      a: "The P-Shot is used in select Peyronie's cases to support tissue quality and reduce discomfort associated with fibrous plaque. Candidacy and realistic expectations are discussed at consultation - this is not a guaranteed cure.",
    },
    {
      q: "How many treatments are needed?",
      a: "Many men see meaningful improvement after one session. A second session three to six months later may enhance or sustain results. Your provider outlines a plan based on your specific situation.",
    },
    {
      q: "Is this a medication?",
      a: "No. PRP uses concentrated growth factors from your own blood. It has no systemic side effects and does not interact with other medications in the way pharmaceutical ED treatments can.",
    },
    {
      q: "What if I'm already on medication for ED?",
      a: "The P-Shot can be used alongside or independently of pharmaceutical treatments. Your provider reviews your full medication list to ensure the plan is safe and makes sense for your goals.",
    },
  ],
};

const ivTherapiesPeptides: ServiceDefinition = {
  category: "wellness",
  slug: "iv-therapies-peptides",
  name: "IV Therapies / Peptides",
  metaDescription:
    "IV therapy and peptide protocols in Elkhorn, WI at Elemental Skin & Body. Recovery, immunity, energy, and performance under medical oversight - Walworth County.",
  heroDescription:
    "When you want to feel better faster, or support your body with what it can't absorb fast enough orally-IV therapies and peptide protocols deliver what you need, under medical supervision.",
  whatIsIt: [
    "IV therapies deliver fluids, vitamins, minerals, amino acids, or other compounds directly into the bloodstream through an intravenous line, bypassing the gastrointestinal absorption process for immediate bioavailability. Common formulations address hydration, immune support, energy, athletic recovery, and anti-aging goals.",
    "Peptide protocols use short amino acid sequences-naturally occurring signaling molecules-that interact with specific receptors to support a range of functions including body composition, recovery, sleep quality, immune modulation, and cellular health. Peptides are administered by injection under physician supervision with a clear clinical rationale, and are never prescribed without a proper evaluation.",
  ],
  howItWorks: [
    "Consultation to review your goals, health history, current medications, and any lab work that informs protocol selection.",
    "For IV therapy: IV line placed; infusion runs over 30–60 minutes depending on volume and formula; you relax comfortably during the session.",
    "For peptides: physician evaluation, education on the mechanism and injection protocol, and a supervised start to ensure you're comfortable with self-administration if relevant.",
    "Follow-up to assess response and adjust the protocol-dosing, frequency, or formulation-based on how you're responding.",
  ],
  benefits: [
    "100% bioavailability for IV-delivered nutrients-not dependent on GI absorption",
    "Rapid improvement in hydration, energy, or recovery within hours of an infusion",
    "Customizable IV formulas matched to your specific goal",
    "Physician-supervised peptide protocols with clear clinical rationale",
    "Available as a standalone service or as a complement to weight loss, hormone, or aesthetic plans",
  ],
  candidate:
    "Adults seeking nutritional support, recovery enhancement, or performance-related benefits under medical oversight. Peptide candidacy requires a thorough evaluation; not all compounds or goals are appropriate for every patient. Contraindications include certain conditions and medications reviewed at consultation.",
  expectBefore:
    "Hydrate before an IV session. Eat a light meal beforehand. For peptide evaluation, come prepared with your goals, current supplement list, and any relevant labs.",
  expectDuring:
    "IV infusions take 30–60 minutes in a comfortable treatment chair; you can read, work, or relax during the session. Peptide consultation and education are performed in a private setting.",
  expectAfter:
    "Most patients notice the effects of IV therapy within hours. Peptide results build over weeks to months depending on the compound and goal. Your provider outlines the expected timeline for your specific protocol.",
  atAGlance: [
    "IV session: 30–60 min",
    "Peptide protocols: individualized",
    "Best for: recovery, energy, immunity, performance",
  ],
  goodFitIf: [
    "You're recovering from illness, intense travel, or an athletic event and want faster restoration",
    "Your energy, immunity, or recovery feels chronically depleted despite a healthy lifestyle",
    "You're interested in peptide protocols for anti-aging, body composition, or performance and want physician oversight",
    "You want IV nutrient delivery when oral supplementation isn't enough",
  ],
  visitAndResults:
    "IV infusion benefits are often felt within 24–48 hours. Peptide protocol results build over four to twelve weeks depending on the compound and goal selected; your provider outlines a realistic timeline at the evaluation.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Comfortable IV infusion suite with a modern lounge chair, warm ambient lighting - calming, restorative atmosphere. Clean and professional. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Clear IV bag on a stand with clean tubing in a professional clinical setting - clinical but calm. Warm, focused light on the bag.",
  },
  faq: [
    {
      q: "What IV formulas do you offer?",
      a: "Formulas are selected based on your goals-hydration, immune support, energy, athletic recovery, anti-aging, and others. Your provider recommends a formula at consultation.",
    },
    {
      q: "How long does an infusion take?",
      a: "Most infusions take 30–60 minutes depending on volume and formula. You're comfortable and free to relax, read, or work during the session.",
    },
    {
      q: "What peptides do you prescribe?",
      a: "Available peptides and their clinical rationale are discussed at the evaluation. Not all compounds are appropriate for every patient; a physician evaluation is required.",
    },
    {
      q: "Do I self-inject peptides?",
      a: "Some peptide protocols involve self-administered subcutaneous injections; others may be administered in office. Your provider trains and supports you on any self-injection protocol.",
    },
    {
      q: "Is IV therapy safe?",
      a: "When performed in a supervised medical setting with appropriate patient selection, IV therapy is well-tolerated. Rare risks exist with any IV procedure and are reviewed at consultation.",
    },
    {
      q: "Can IV therapy and peptides be combined with other services?",
      a: "Yes-these services complement weight loss, hormone, and aesthetic plans effectively. Your provider discusses sequencing and combinations based on your full plan.",
    },
  ],
};

const b12MicInjections: ServiceDefinition = {
  category: "wellness",
  slug: "b12-mic-injections",
  name: "B-12 / MIC Injections",
  metaDescription:
    "B-12 and MIC injections in Elkhorn, WI at Elemental Skin & Body. Quick intramuscular nutrient boosts for energy, metabolism, and mood - Walworth County.",
  heroDescription:
    "A quick intramuscular boost of B12 or MIC nutrients that support energy, metabolism, and mood-especially useful alongside a weight loss plan or when your diet simply isn't keeping up.",
  whatIsIt: [
    "B12 injections deliver methylcobalamin or cyanocobalamin directly into muscle tissue, bypassing the GI absorption step that limits effectiveness for many patients-particularly those with absorption issues, dietary restrictions, or elevated metabolic demand.",
    "MIC injections combine methionine, inositol, and choline-three compounds involved in fat metabolism, liver function, and cellular signaling. They are most commonly used as a complement to medical weight loss plans, where they support the metabolic environment alongside dietary and pharmacological interventions. Neither B12 nor MIC injections are standalone weight loss treatments-they are targeted nutritional support tools.",
  ],
  howItWorks: [
    "Brief provider review to confirm the appropriate formula and frequency for your goals and health profile.",
    "Intramuscular or subcutaneous injection-a quick procedure requiring no numbing and minimal preparation.",
    "Schedule established based on your goals and response-weekly to monthly intervals are common.",
    "Regular check-ins to assess whether continuing, adjusting, or discontinuing is appropriate as your plan evolves.",
  ],
  benefits: [
    "Direct intramuscular delivery for reliable absorption regardless of GI function",
    "Energy and mood support from B12, especially in those with dietary gaps or absorption issues",
    "Metabolic support from MIC when used as part of a broader weight loss or wellness plan",
    "Quick appointments-sessions typically take under 10 minutes",
    "Easy to integrate into a regular wellness or weight management visit schedule",
  ],
  candidate:
    "Adults with confirmed or suspected B12 deficiency, those on plant-based diets, patients engaged in a medical weight loss program, or individuals seeking targeted metabolic nutritional support. Lab evaluation is recommended to confirm B12 status before regular supplementation.",
  expectBefore:
    "No special preparation is needed. Mention current supplements and medications at consultation to avoid any interactions or redundant supplementation.",
  expectDuring:
    "The injection takes under 10 minutes. Most patients experience a brief sting at the injection site. No numbing is required.",
  expectAfter:
    "Mild soreness at the injection site is common for 24 hours. Many patients notice energy and mood improvement within 24–72 hours following B12 injection. MIC effects are more gradual when used as metabolic support.",
  atAGlance: [
    "Visit: ~5–10 min",
    "Frequency: individualized (often weekly to monthly)",
    "Best for: energy support, metabolic complement, B12 deficiency",
  ],
  goodFitIf: [
    "You're on a weight loss plan and want nutritional support to stay energized throughout the process",
    "You follow a plant-based diet and know B12 is a challenge to get from food alone",
    "Your energy and mood have a noticeable slump that could be nutritional in origin",
    "You want a quick, evidence-based add-on to your existing wellness visits",
  ],
  visitAndResults:
    "Many patients notice energy and mood improvement within 24–72 hours of a B12 injection. MIC support as a metabolic complement shows results over weeks when used consistently alongside a broader weight loss or wellness plan.",
  heroImage: {
    label: "HERO PHOTO",
    caption:
      "Provider preparing a B-12 injection in a clean clinical environment - organized, professional, welcoming. Quick and efficient atmosphere. No patient visible.",
  },
  bodyImage: {
    label: "TREATMENT PHOTO",
    caption:
      "Close-up of a small injection vial and syringe arranged neatly on a clean clinical tray - clinical precision, warm lighting, teal accent.",
  },
  faq: [
    {
      q: "Is a B12 injection different from taking a B12 supplement?",
      a: "Yes. Intramuscular injection bypasses GI absorption entirely, making it more reliable for patients with absorption issues, low stomach acid, or those who haven't responded adequately to oral supplementation.",
    },
    {
      q: "Do I need labs before starting?",
      a: "A baseline B12 level is recommended, especially for ongoing supplementation, to confirm deficiency or suboptimal levels before regular injection.",
    },
    {
      q: "How often can I receive injections?",
      a: "Frequency is individualized-weekly to monthly is the typical range depending on your deficiency level, goals, and whether you're in a loading or maintenance phase.",
    },
    {
      q: "Are MIC injections a weight loss treatment?",
      a: "No-they are a nutritional support tool used as a complement to a medical weight loss program. They should not be used as a substitute for a structured plan.",
    },
    {
      q: "Can I get B12 and MIC at the same appointment?",
      a: "Yes. A combined B12/MIC injection is available and commonly requested alongside weight loss visits.",
    },
    {
      q: "Are there any side effects?",
      a: "Side effects are uncommon. Mild injection site soreness is the most frequent. Rarely, B12 supplementation can affect certain lab values; your provider monitors as appropriate.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRY EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const services: ServiceDefinition[] = [
  // Injectables
  botoxJeuveau,
  dermalFillers,
  biofill,
  vampireFacial,
  vampireFacelift,
  // Skin & laser
  diamondGlow,
  elementalFacial,
  dermaplaning,
  chemicalPeels,
  hyfrecator,
  microneedling,
  morpheus8,
  iplPhotofacial,
  // Body & devices
  laserHairRemoval,
  faceTite,
  bodytite,
  quantum,
  emsculptNeo,
  emsella,
  shockwave,
  // Wellness
  medicalWeightLoss,
  bioHormoneReplacement,
  wellnessLabs,
  prpJointInjections,
  oShot,
  pShot,
  ivTherapiesPeptides,
  b12MicInjections,
];

export const allServices = services;

export function getHubCategories(): ServiceCategory[] {
  const seen = new Set<ServiceCategory>();
  const result: ServiceCategory[] = [];
  for (const s of services) {
    if (!seen.has(s.category)) {
      seen.add(s.category);
      result.push(s.category);
    }
  }
  return result;
}

export function getServicesByCategory(cat: ServiceCategory): ServiceDefinition[] {
  return services.filter((s) => s.category === cat);
}

export function getServiceBySlug(
  category: ServiceCategory,
  slug: string
): ServiceDefinition | undefined {
  return services.find((s) => s.category === category && s.slug === slug);
}

export function whereToStartAnchorForCategory(cat: ServiceCategory): string {
  return `menu-${cat}`;
}

export function getRelatedServices(
  category: ServiceCategory,
  currentSlug: string,
  limit = 3
): { label: string; href: string }[] {
  const same = services.filter((s) => s.category === category && s.slug !== currentSlug);
  const rest = services.filter((s) => s.slug !== currentSlug && s.category !== category);
  return [...same, ...rest]
    .slice(0, limit)
    .map((s) => ({ label: s.name, href: `/services/${s.category}/${s.slug}` }));
}
