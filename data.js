// ============================================================================
// AquaClear product & content data
// ----------------------------------------------------------------------------
// This file is the single source of truth for everything editable via
// admin.html: major parts (with options, sellers, specs, icons/images, info
// text), minor/supporting parts, ready-made models, servicing types and
// yearly servicing packages.
//
// HOW TO UPDATE THIS SITE'S CONTENT:
//   1. Open admin.html in a browser (password protected).
//   2. Make your edits -- add/edit/delete parts, models, packages, etc.
//   3. Click "Export data.js" to download the updated file.
//   4. Replace this file in your repo with the downloaded one and commit +
//      push to GitHub. Your live site (e.g. GitHub Pages) will update on
//      the next deploy.
//
// Both index.html (the storefront) and admin.html (the editor) load this
// same file, so admin.html always starts from the current live data.
// ============================================================================

const READY_MADE_MODELS = [
  {
    id: "rm-basic-7l",
    name: "AquaClear Basic 7L",
    tagline: "Simple RO purifier for everyday drinking water.",
    price: 8999,
    icon: "cabinet",
    specs: [
      "7-stage RO + UV purification",
      "7L storage tank",
      "75 GPD membrane",
      "Wall-mount ABS cabinet",
      "Best for: 1–4 people, municipal water",
    ],
  },
  {
    id: "rm-family-10l",
    name: "AquaClear Family 10L",
    tagline: "A balanced all-rounder for most Indian households.",
    price: 12999,
    icon: "tank",
    specs: [
      "8-stage RO + UV + UF purification",
      "10L storage tank",
      "100 GPD membrane with booster pump",
      "Smart controller with TDS display",
      "Best for: 4–6 people, borewell or municipal water",
    ],
  },
  {
    id: "rm-alkaline-12l",
    name: "AquaClear Alkaline Pro 12L",
    tagline: "Adds minerals and alkalinity for better taste.",
    price: 15999,
    icon: "membrane",
    specs: [
      "9-stage RO + UV + Mineral + Alkaline",
      "12L storage tank",
      "100 GPD membrane with booster pump",
      "Copper cartridge included",
      "Best for: households wanting mineral-enriched water",
    ],
  },
  {
    id: "rm-compact-5l",
    name: "AquaClear Compact 5L",
    tagline: "Space-saving purifier for small kitchens.",
    price: 7499,
    icon: "cabinet",
    specs: [
      "6-stage RO + UV purification",
      "5L compact under-sink tank",
      "75 GPD membrane",
      "Under-sink cabinet, minimal footprint",
      "Best for: 1–3 people, tight kitchen spaces",
    ],
  },
  {
    id: "rm-premium-15l",
    name: "AquaClear Premium 15L",
    tagline: "High-capacity purifier with every stage included.",
    price: 21999,
    icon: "electronics",
    specs: [
      "10-stage RO + UV + UF + Mineral + Alkaline + Copper",
      "15L high-capacity storage tank",
      "150 GPD membrane with high-pressure booster pump",
      "Smart display controller + TDS controller",
      "Best for: large families, offices, heavy daily use",
    ],
  },
];

const MAJOR_PARTS = [
  { id: "cabinet", seq: 1, name: "RO Cabinet / Body", group: "Structure", icon: "cabinet",
    desc: "Houses all internal components.",
    info: "The cabinet is the outer shell that holds every filter, membrane, pump and wire together in one enclosed unit. It protects internal parts from dust, moisture and accidental knocks, and gives the purifier a mountable, presentable form — whether wall-hung above a counter or tucked below a sink.",
    specs: [
      "Material: ABS plastic or powder-coated mild steel",
      "Mounting: wall-mount or under-sink",
      "Should have ventilation gaps to prevent internal heat build-up",
      "Look for a lockable or screw-fixed front panel for filter access",
    ],
    options: [
      { id: "cab-abs", label: "ABS Wall-Mount Cabinet", sellers: [{ name: "Company A", price: 1200 }, { name: "Company B", price: 1330 }], note: "Lightweight plastic body, mounted on the wall. Most common and budget-friendly choice; resists rust completely since it's non-metallic." },
      { id: "cab-mtl", label: "Powder-Coated Metal Cabinet", sellers: [{ name: "Company A", price: 2100 }, { name: "Company B", price: 2270 }], note: "Sturdier and more premium-looking, with a scratch-resistant coated finish. Heavier and pricier, but feels more durable long-term." },
      { id: "cab-cmp", label: "Compact Under-Sink Cabinet", sellers: [{ name: "Company A", price: 950 }, { name: "Company B", price: 1075 }], note: "Smallest footprint, designed to hide inside a cabinet below the sink. Best if you don't want the unit visible on the wall." },
    ] },
  { id: "tank", seq: 2, name: "RO Storage Tank", group: "Structure", icon: "tank",
    desc: "Stores purified water under pressure for on-demand use.",
    info: "This tank holds a reserve of finished RO water so it's ready the instant the tap is opened, instead of waiting for the slow membrane process each time. Inside, a rubber bladder separates water from a compressed-air cushion, which is what pushes water out through the faucet without needing power.",
    specs: [
      "Common sizes: 5L, 8L, 12L, 15L",
      "Pre-charged with air pressure (typically 5–7 psi empty)",
      "Should be checked/re-pressurised once a year",
      "Bigger tanks suit larger families or low-pressure input water",
    ],
    options: [
      { id: "tank-5", label: "5L Pressure Tank", sellers: [{ name: "Company A", price: 900 }, { name: "Company B", price: 1010 }], note: "Suits 1–3 people. Compact size, but you'll refill/wait more often during heavy use." },
      { id: "tank-8", label: "8L Pressure Tank", sellers: [{ name: "Company A", price: 1250 }, { name: "Company B", price: 1400 }], note: "A good middle-ground for most families of 3–5 — enough reserve without taking too much space." },
      { id: "tank-12", label: "12L Pressure Tank", sellers: [{ name: "Company A", price: 1650 }, { name: "Company B", price: 1865 }], note: "Best for larger households or offices with frequent draw. Needs more under-counter or wall space." },
    ] },
  { id: "sediment", seq: 3, name: "Sediment Filter", group: "Pre-Filtration", icon: "cartridge",
    desc: "Removes sand, silt and rust particles from raw water.",
    info: "This is the very first filter water passes through. It physically strains out visible and semi-visible particles — sand, rust flakes, silt — before they can reach and damage the finer, more expensive filters and membrane downstream. Think of it as a doormat that catches the coarse dirt before it gets further inside.",
    specs: [
      "Micron rating: 1–10 micron (lower number = finer filtration)",
      "Usually a spun polypropylene cartridge",
      "Replace every 3–4 months depending on water quality",
      "Protects the RO membrane from premature clogging",
    ],
    options: [
      { id: "sed-5m", label: "5 Micron Spun Filter", sellers: [{ name: "Company A", price: 150 }, { name: "Company B", price: 165 }], note: "Standard coarse filtration — catches visible sand/silt. Good default choice for most municipal or borewell water." },
      { id: "sed-1m", label: "1 Micron Spun Filter", sellers: [{ name: "Company A", price: 220 }, { name: "Company B", price: 245 }], note: "Finer filtration for water with heavier sediment load. Traps smaller particles but may need more frequent replacement." },
    ] },
  { id: "precarbon", seq: 4, name: "Pre-Carbon Filter", group: "Pre-Filtration", icon: "cartridge",
    desc: "Absorbs chlorine and odour before the membrane stage.",
    info: "After sediment is removed, water passes through activated carbon granules that adsorb chlorine, bad smells and some organic chemicals. This step matters because chlorine can chemically degrade a thin-film RO membrane over time — removing it here protects the membrane's lifespan.",
    specs: [
      "Media: Granular Activated Carbon (GAC)",
      "Removes chlorine taste/odour and some VOCs",
      "Typical replacement: every 4–6 months",
      "Positioned before the RO membrane to protect it",
    ],
    options: [
      { id: "pc-gac", label: "Granular Activated Carbon (GAC)", sellers: [{ name: "Company A", price: 180 }, { name: "Company B", price: 205 }], note: "Standard choice for this stage — loose carbon granules that adsorb chlorine and odour efficiently at low cost." },
    ] },
  { id: "carbonblock", seq: 5, name: "Carbon Block Filter", group: "Pre-Filtration", icon: "cartridge",
    desc: "Fine carbon block for pesticide and VOC reduction.",
    info: "A denser, more tightly compressed carbon stage compared to the pre-carbon filter. Because the carbon is compacted into a solid block rather than loose granules, water is forced through more contact area, giving better reduction of pesticides, herbicides and volatile organic compounds before the final polish stage.",
    specs: [
      "Media: Compressed Carbon Block (CTO)",
      "Finer filtration than granular carbon (typically 0.5–5 micron)",
      "Reduces pesticides, VOCs and residual taste/odour",
      "Replace every 6 months on average",
    ],
    options: [
      { id: "cb-std", label: "Standard Carbon Block", sellers: [{ name: "Company A", price: 250 }, { name: "Company B", price: 280 }], note: "Reliable everyday choice, handles typical chlorine/VOC levels well at a moderate price." },
      { id: "cb-cto", label: "CTO High-Density Block", sellers: [{ name: "Company A", price: 340 }, { name: "Company B", price: 380 }], note: "Denser carbon packing for better contact time — worth it if your source water has stronger odour or chemical taste." },
    ] },
  { id: "membrane", seq: 6, name: "RO Membrane", group: "RO Stage", icon: "membrane",
    desc: "Core membrane that rejects dissolved solids.",
    info: "This is the heart of any RO purifier. Water is forced under pressure through an extremely fine, semi-permeable membrane with pores small enough to block dissolved salts, heavy metals, bacteria and most dissolved solids — while letting clean water molecules pass through. Roughly 90–98% of TDS is rejected at this stage.",
    specs: [
      "Rated by daily output: 75, 100 or 150 GPD (gallons per day)",
      "Needs adequate inlet pressure to function well — often needs a booster pump",
      "Typical lifespan: 2–3 years depending on input water quality",
      "Higher GPD = faster output, suited to larger households",
    ],
    options: [
      { id: "mem-75", label: "75 GPD Membrane", sellers: [{ name: "Company A", price: 1100 }, { name: "Company B", price: 1200 }], note: "Slower output, suited to 1–3 people with lighter daily usage. Most affordable membrane option." },
      { id: "mem-100", label: "100 GPD Membrane", sellers: [{ name: "Company A", price: 1450 }, { name: "Company B", price: 1580 }], note: "Balanced choice for most households — noticeably faster refill than 75 GPD without a big price jump." },
      { id: "mem-150", label: "150 GPD Membrane", sellers: [{ name: "Company A", price: 1900 }, { name: "Company B", price: 2110 }], note: "Fastest output, best for larger families or heavy daily use. Needs good inlet pressure to perform well." },
    ], requiresSuggested: ["boosterpump", "smps", "membranehousing"] },
  { id: "membranehousing", seq: 7, name: "RO Membrane Housing", group: "RO Stage", icon: "housing",
    desc: "Pressure housing that holds the RO membrane.",
    info: "A sealed plastic cylinder that the RO membrane sits inside. It's built to withstand the water pressure needed for reverse osmosis to happen, and has fittings on either end for inlet water, purified output, and reject/drain water. Without this housing the membrane can't be pressurised or connected into the water line.",
    specs: [
      "Pressure-rated plastic housing (typically food-grade)",
      "Sized to match standard membrane dimensions",
      "Has 3 port connections: inlet, permeate (clean) out, reject/drain out",
      "Rarely needs replacement — mainly a one-time structural part",
    ],
    options: [
      { id: "mh-std", label: "Standard Housing", sellers: [{ name: "Company A", price: 300 }, { name: "Company B", price: 340 }], note: "Fits all standard-size RO membranes listed above — a simple structural fit, no major variants needed here." },
    ] },
  { id: "boosterpump", seq: 8, name: "Booster Pump", group: "RO Stage", icon: "pump",
    desc: "Increases inlet pressure for consistent RO output.",
    info: "RO membranes need a minimum water pressure to push water through their fine pores efficiently. In areas with low municipal water pressure, a small electric booster pump raises pressure ahead of the membrane, ensuring consistent output and reducing wastage of reject water.",
    specs: [
      "Runs on low-voltage DC (usually 24V, powered via the SMPS)",
      "Boosts pressure typically to 60–100 psi at the membrane inlet",
      "Improves RO recovery ratio (less water wasted to drain)",
      "Should be paired with a low-pressure switch for protection",
    ],
    options: [
      { id: "bp-24v", label: "24V DC Booster Pump", sellers: [{ name: "Company A", price: 950 }, { name: "Company B", price: 1075 }], note: "Standard pump suitable for most homes with mild to moderate low-pressure issues." },
      { id: "bp-hp", label: "High-Pressure Booster Pump", sellers: [{ name: "Company A", price: 1350 }, { name: "Company B", price: 1540 }], note: "Stronger boost for very low input pressure areas or higher-GPD membranes that need more push." },
    ] },
  { id: "uvchamber", seq: 9, name: "UV Chamber", group: "UV / UF Stage", icon: "housing",
    desc: "Housing for the UV lamp disinfection stage.",
    info: "A stainless-steel or plastic chamber that water flows through while being exposed to UV light. It's designed to hold the UV lamp centrally so water passes close to the light source long enough for effective disinfection, while keeping the lamp itself dry and electrically isolated from the water.",
    specs: [
      "Usually stainless steel for UV reflectivity and durability",
      "Sized to match the UV lamp's length and wattage",
      "Needs the UV lamp and SMPS/ballast to function",
      "Should be shielded from ambient light for safety",
    ],
    options: [
      { id: "uvc-std", label: "Standard UV Chamber", sellers: [{ name: "Company A", price: 400 }, { name: "Company B", price: 435 }], note: "Fits standard UV lamp sizes listed below — a straightforward housing choice, no major variants." },
    ], requiresSuggested: ["uvlamp", "smps"] },
  { id: "uvlamp", seq: 10, name: "UV Lamp", group: "UV / UF Stage", icon: "lamp",
    desc: "Neutralises bacteria and viruses.",
    info: "This lamp emits ultraviolet-C light, a wavelength that damages the DNA of bacteria, viruses and other microorganisms so they can no longer reproduce or cause illness — all without adding any chemicals or changing the water's taste. It works as a disinfection step, not a filtration one, so it doesn't remove dissolved solids.",
    specs: [
      "Common wattages: 8W, 11W, 15W depending on flow rate",
      "Needs clear (low-turbidity) water to work effectively",
      "Typical lamp life: 8,000–10,000 hours (~1 year of use)",
      "Should be used alongside filtration, not as a standalone step",
    ],
    options: [
      { id: "uvl-8w", label: "8W UV Lamp", sellers: [{ name: "Company A", price: 500 }, { name: "Company B", price: 555 }], note: "Suits lower flow rates and smaller households. Slightly lower power draw." },
      { id: "uvl-11w", label: "11W UV Lamp", sellers: [{ name: "Company A", price: 650 }, { name: "Company B", price: 740 }], note: "Stronger dose for higher flow rates — better choice if the system delivers water quickly to multiple points." },
    ] },
  { id: "ufmembrane", seq: 11, name: "UF Membrane", group: "UV / UF Stage", icon: "membrane",
    desc: "Ultrafiltration stage for water with low TDS.",
    info: "A hollow-fibre membrane with pores larger than an RO membrane's but still fine enough to block bacteria, cysts and suspended particles. It doesn't remove dissolved salts like RO does, which makes it ideal for water that's already low in TDS — it purifies without stripping out beneficial minerals, and works without electricity.",
    specs: [
      "Pore size: typically 0.01–0.1 micron",
      "Does not require electricity or pressure pumps to operate",
      "Best suited for municipal/low-TDS water sources",
      "Often used as an alternative to RO, or alongside it",
    ],
    options: [
      { id: "uf-hollow", label: "Hollow Fibre UF Membrane", sellers: [{ name: "Company A", price: 700 }, { name: "Company B", price: 755 }], note: "Standard UF option — good alternative to RO when your source water already has low TDS." },
    ] },
  { id: "postcarbon", seq: 12, name: "Post-Carbon Filter", group: "Taste & Finishing", icon: "cartridge",
    desc: "Final polish stage for taste and odour.",
    info: "The last carbon stage before water reaches the faucet. Since RO/UV-treated water can sometimes pick up a slightly flat or plastic taste from tubing and storage in the tank, this filter gives it a final taste-and-odour polish, resulting in noticeably fresher-tasting water at the tap.",
    specs: [
      "Media: Activated carbon (often coconut-shell based)",
      "Positioned after the storage tank, just before the faucet",
      "Improves final taste rather than removing contaminants",
      "Replace every 6–8 months",
    ],
    options: [
      { id: "poc-std", label: "Standard Post-Carbon", sellers: [{ name: "Company A", price: 200 }, { name: "Company B", price: 225 }], note: "Standard final-taste polish stage — works well for most setups with no special requirements." },
    ] },
  { id: "mineral", seq: 13, name: "Mineral Cartridge", group: "Taste & Finishing", icon: "cartridge",
    desc: "Adds back essential minerals for taste and health.",
    info: "Because RO filtration removes essentially all dissolved solids — including beneficial minerals like calcium and magnesium — this cartridge reintroduces a controlled amount of minerals back into the water. This improves taste and adds back some of the natural mineral content lost during the RO process.",
    specs: [
      "Adds calcium, magnesium and other trace minerals",
      "Improves flat 'RO taste' often reported by users",
      "Positioned after the RO membrane / before the faucet",
      "Replace roughly every 6–12 months",
    ],
    options: [
      { id: "min-std", label: "Standard Mineral Cartridge", sellers: [{ name: "Company A", price: 350 }, { name: "Company B", price: 380 }], note: "Adds back a balanced mix of calcium and magnesium — good default for improving RO water's taste." },
    ] },
  { id: "alkaline", seq: 14, name: "Alkaline Cartridge", group: "Taste & Finishing", icon: "cartridge",
    desc: "Raises pH of purified water.",
    info: "RO water tends to be slightly acidic (low pH) since minerals that buffer pH are removed. This cartridge uses alkaline minerals to raise the water's pH into a mildly alkaline range, which some users prefer for taste and general wellness reasons.",
    specs: [
      "Raises pH typically from ~6.5–7 up to ~8–9.5",
      "Uses calcium/magnesium-based alkaline media",
      "Purely a taste/pH-preference addition, not a safety filter",
      "Often paired with the mineral cartridge",
    ],
    options: [
      { id: "alk-std", label: "Alkaline Cartridge", sellers: [{ name: "Company A", price: 400 }, { name: "Company B", price: 435 }], note: "Raises pH into a mildly alkaline range — pick this if you prefer alkaline drinking water." },
    ] },
  { id: "copper", seq: 15, name: "Copper Cartridge", group: "Taste & Finishing", optional: true, icon: "cartridge",
    desc: "Infuses trace copper — optional wellness stage.",
    info: "An optional final-stage cartridge that infuses a small, safe amount of copper ions into the water — mimicking the traditional practice of storing water in copper vessels. Some users choose this for its associated wellness benefits, though it's entirely optional and not required for safe drinking water.",
    specs: [
      "Adds trace amounts of copper ions to the water",
      "Purely optional — has no filtration/safety function",
      "Should comply with safe drinking-water copper limits",
      "Positioned as the very last stage before the faucet",
    ],
    options: [
      { id: "cu-std", label: "Copper Infusion Cartridge", sellers: [{ name: "Company A", price: 450 }, { name: "Company B", price: 495 }], note: "Entirely optional wellness add-on — skip it if you don't have a specific preference for copper-infused water." },
    ] },
  { id: "faucet", seq: 16, name: "RO Faucet / Tap", group: "Delivery", icon: "faucet",
    desc: "Dispensing point for purified water.",
    info: "The dedicated tap, usually mounted separately from your regular kitchen tap, through which purified water is dispensed. It connects directly to the storage tank via the post-filtration line, giving instant access to treated water without mixing with untreated tap water.",
    specs: [
      "Mounted separately from the main kitchen tap",
      "Connects via ¼-inch tubing to the tank/post-carbon line",
      "Available in standard chrome or designer finishes",
      "Look for a food-grade, lead-free internal valve",
    ],
    options: [
      { id: "fct-std", label: "Standard Chrome Faucet", sellers: [{ name: "Company A", price: 250 }, { name: "Company B", price: 280 }], note: "Simple, functional chrome tap — the most economical and common choice." },
      { id: "fct-dsg", label: "Designer Faucet", sellers: [{ name: "Company A", price: 550 }, { name: "Company B", price: 615 }], note: "Sleeker finish and shape for a more premium kitchen look. Same function, higher price for aesthetics." },
    ] },
  { id: "smps", seq: 17, name: "SMPS / Power Supply", group: "Electronics", icon: "electronics",
    desc: "Converts mains AC to low-voltage DC for the system.",
    info: "Short for Switch Mode Power Supply — this adapter converts standard 220–240V household AC current into the safe, stable low-voltage DC (usually 24V) that the booster pump, solenoid valve, UV lamp and controller PCB all run on. It's the electrical heart that powers every powered component in the system.",
    specs: [
      "Input: 220–240V AC mains",
      "Output: typically 24V DC",
      "Powers the pump, solenoid valve, PCB and UV lamp",
      "Should have basic surge/overload protection",
    ],
    options: [
      { id: "smps-24v", label: "24V SMPS Adapter", sellers: [{ name: "Company A", price: 400 }, { name: "Company B", price: 435 }], note: "Standard power adapter that matches the voltage needed by the pump, valve, PCB and UV lamp." },
    ] },
  { id: "pcb", seq: 18, name: "RO Controller PCB", group: "Electronics", icon: "electronics",
    desc: "Controls pump, valves and system logic.",
    info: "The control board acts as the 'brain' of the purifier. It reads signals from sensors (float switch, pressure switch) and decides when to turn the booster pump on/off, when to open or close the solenoid valve, and when the tank is full — automating the entire purification cycle without manual intervention.",
    specs: [
      "Controls pump start/stop and solenoid valve timing",
      "Reads inputs from float switch and pressure switch",
      "Smart versions add a display showing TDS/status",
      "Central hub connecting all electronic components",
    ],
    options: [
      { id: "pcb-std", label: "Standard Controller PCB", sellers: [{ name: "Company A", price: 600 }, { name: "Company B", price: 680 }], note: "Handles core automation (pump, valve, tank-full detection) reliably without a display." },
      { id: "pcb-sm", label: "Smart Controller PCB (display)", sellers: [{ name: "Company A", price: 950 }, { name: "Company B", price: 1075 }], note: "Adds an on-unit display showing status/TDS readings — nicer for monitoring but not essential." },
    ] },
  { id: "solenoid", seq: 19, name: "Solenoid Valve", group: "Electronics", icon: "valve",
    desc: "Controls water flow and shut-off electronically.",
    info: "An electrically operated valve that opens or closes the water inlet line based on signals from the controller PCB. It's what allows the system to automatically stop drawing in water once the storage tank is full, and resume when water is used — enabling fully automatic operation.",
    specs: [
      "Electrically actuated (opens/closes via PCB signal)",
      "Usually normally-closed (fails safe, shuts off by default)",
      "Positioned on the raw water inlet line",
      "Works together with the float switch and PCB",
    ],
    options: [
      { id: "sol-std", label: "Standard Solenoid Valve", sellers: [{ name: "Company A", price: 280 }, { name: "Company B", price: 300 }], note: "Standard automatic shut-off valve — works with any of the PCB options above." },
    ] },
  { id: "tdscontroller", seq: 20, name: "TDS Controller", group: "Electronics", optional: true, icon: "electronics",
    desc: "Blends RO and raw water to a target TDS level.",
    info: "An optional module that blends a small, controlled amount of raw (unfiltered) water back into the RO output to reach a target TDS level — useful when the source water's TDS is already very low and full RO filtration would strip out too many minerals, leaving water tasting flat.",
    specs: [
      "Blends raw water back into RO output at a set ratio",
      "Useful mainly when input TDS is already below ~200 ppm",
      "Optional — most standard setups don't need this",
      "Should never be used to blend water from unsafe sources",
    ],
    options: [
      { id: "tds-std", label: "TDS Controller Module", sellers: [{ name: "Company A", price: 300 }, { name: "Company B", price: 340 }], note: "Optional add-on — only useful if your source water's TDS is already low; otherwise skip it." },
    ] },
];

const MINOR_GROUPS = [
  { group: "Water-line Parts", items: [
    { name: "¼-inch RO Pipe", note: "The standard plastic tubing that carries water between all the parts of your purifier — from the inlet, through each filter, into the tank, and out to the faucet. Almost every connection in the system uses this size of pipe." },
    { name: "Straight Connector", note: "A small joiner that connects two pieces of pipe end-to-end in a straight line, so you can extend tubing or join it to a filter without any bend." },
    { name: "Elbow Connector", note: "A joint bent at 90°, used when the pipe needs to turn a corner — for example, to route tubing around the inside of the cabinet neatly." },
    { name: "Tee Connector", note: "Shaped like the letter T, this lets one pipe split into two directions — useful when water needs to flow to two different parts from a single line." },
    { name: "Y Connector", note: "Similar to a Tee connector but shaped like a Y, splitting one line into two at an angle rather than straight out to the side." },
    { name: "Flow Restrictor", note: "A small fitting that deliberately slows down the reject (waste) water leaving the RO membrane, so the membrane stays under enough pressure to filter properly." },
    { name: "Non-Return Valve (NRV)", note: "Also called a check valve — it lets water flow in only one direction and stops it from flowing backward, protecting the membrane from pressure damage when the system is off." },
    { name: "Auto Shut-Off Valve (ASO)", note: "Automatically stops the inflow of raw water once the storage tank is full, so water isn't wasted continuously once the tank has no more room." },
    { name: "Drain Saddle", note: "A clamp-on fitting that attaches to your kitchen sink's drain pipe, giving the RO system's waste (reject) water a place to safely flow out." },
    { name: "Tank Connector", note: "The fitting that joins the storage tank to the rest of the water line, allowing purified water to flow in and out of the tank." },
    { name: "Inlet Water Valve", note: "A shut-off valve fitted at the very start of the system, on the raw water supply line — lets you manually stop water going into the purifier, e.g. for maintenance." },
    { name: "Filter Housing Connector", note: "The small fitting that links a filter's housing to the water-line tubing, making sure water flows into and out of that filter stage correctly." },
    { name: "Membrane Housing Connector", note: "Same idea as a filter housing connector, but specifically for linking tubing to the RO membrane housing's three ports (inlet, clean-water outlet, and reject outlet)." },
  ]},
  { group: "Electrical Parts", items: [
    { name: "Low Pressure Switch (LPS)", note: "A safety sensor that detects if incoming water pressure is too low, and switches off the booster pump automatically so it doesn't run dry and burn out." },
    { name: "Float Switch/Sensor", note: "Sits inside or near the storage tank and detects when the tank is full or empty, signalling the controller PCB to stop or start the water flow." },
    { name: "Flow Sensor", note: "Measures how much water is actually flowing through the system in real time — used by smarter controllers to track usage or detect blockages." },
    { name: "TDS Sensor", note: "Measures the Total Dissolved Solids (TDS) level in the water, letting a smart controller display or monitor how pure the output water is." },
    { name: "UV Ballast/Choke", note: "An electrical component that regulates and supplies the correct power to the UV lamp so it lights up safely and consistently." },
    { name: "Wires", note: "The electrical cabling that connects the SMPS, PCB, pump, valve, sensors and UV lamp together so power and signals can travel between them." },
    { name: "Wire Connectors", note: "Small clips or terminals used to join wires together securely, without needing to twist or solder them directly." },
    { name: "Power Switch", note: "The on/off switch for the whole unit's electrical power — usually mounted on the cabinet or built into the plug cord." },
    { name: "LED Indicators", note: "Small lights on the cabinet or controller that show the system's status at a glance — for example, power on, tank full, or a filter change reminder." },
  ]},
  { group: "Mechanical Parts", items: [
    { name: "Filter Brackets", note: "Metal or plastic mounts that hold each filter housing firmly in place inside the cabinet, so filters don't shift or fall during use." },
    { name: "Pump Bracket", note: "A mounting bracket specifically for securing the booster pump in place, reducing vibration and noise while it runs." },
    { name: "UV Bracket", note: "Holds the UV chamber steady inside the cabinet, keeping it properly aligned and supported." },
    { name: "Tank Stand", note: "A base or stand that supports the storage tank, especially useful if the tank sits on the floor or under a cabinet rather than being wall-mounted." },
    { name: "Screws", note: "Basic fasteners used throughout assembly to attach brackets, panels and the cabinet together securely." },
    { name: "Nuts", note: "Paired with bolts to fasten heavier components firmly, such as brackets or the cabinet frame." },
    { name: "Clamps", note: "Used to grip and secure tubing or hoses tightly onto connectors, preventing leaks at the joints." },
    { name: "O-Rings", note: "Small rubber rings that sit inside fittings and housings to create a watertight seal, stopping tiny leaks at joints and filter caps." },
    { name: "Rubber Washers", note: "Flat rubber discs that sit under nuts, bolts or fittings to cushion the joint and help prevent water seepage." },
    { name: "Teflon Tape", note: "A thin white tape wrapped around threaded pipe joints before screwing them together — it fills tiny gaps in the threads to stop leaks." },
  ]},
];
const MINOR_PRICE = 40;
const REQUIRED_CORE = ["cabinet", "tank", "sediment", "membrane", "faucet", "smps", "pcb"];
const ICONS = {
  cabinet: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="6" width="36" height="52" rx="3" stroke="#1D7A6E" stroke-width="2.5"/><line x1="14" y1="18" x2="50" y2="18" stroke="#1D7A6E" stroke-width="2"/><circle cx="42" cy="12" r="1.8" fill="#1D7A6E"/><rect x="20" y="26" width="8" height="20" rx="1.5" stroke="#3B5169" stroke-width="2"/><rect x="32" y="26" width="8" height="20" rx="1.5" stroke="#3B5169" stroke-width="2"/></svg>`,
  tank: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="10" width="28" height="44" rx="14" stroke="#1D7A6E" stroke-width="2.5"/><line x1="18" y1="34" x2="46" y2="34" stroke="#1D7A6E" stroke-width="2" stroke-dasharray="3 3"/><rect x="28" y="4" width="8" height="8" rx="1.5" stroke="#3B5169" stroke-width="2"/></svg>`,
  cartridge: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="6" width="20" height="52" rx="8" stroke="#1D7A6E" stroke-width="2.5"/><line x1="22" y1="18" x2="42" y2="18" stroke="#1D7A6E" stroke-width="2"/><line x1="22" y1="46" x2="42" y2="46" stroke="#1D7A6E" stroke-width="2"/><line x1="27" y1="24" x2="27" y2="40" stroke="#3B5169" stroke-width="1.5"/><line x1="32" y1="24" x2="32" y2="40" stroke="#3B5169" stroke-width="1.5"/><line x1="37" y1="24" x2="37" y2="40" stroke="#3B5169" stroke-width="1.5"/></svg>`,
  membrane: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="20" width="48" height="24" rx="12" stroke="#1D7A6E" stroke-width="2.5"/><path d="M18 26 q6 6 0 12" stroke="#3B5169" stroke-width="1.6"/><path d="M28 26 q6 6 0 12" stroke="#3B5169" stroke-width="1.6"/><path d="M38 26 q6 6 0 12" stroke="#3B5169" stroke-width="1.6"/><path d="M48 26 q4 6 0 12" stroke="#3B5169" stroke-width="1.6"/></svg>`,
  housing: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="22" width="44" height="20" rx="10" stroke="#1D7A6E" stroke-width="2.5"/><line x1="2" y1="32" x2="10" y2="32" stroke="#3B5169" stroke-width="2.5"/><line x1="54" y1="32" x2="62" y2="32" stroke="#3B5169" stroke-width="2.5"/><line x1="20" y1="42" x2="20" y2="50" stroke="#3B5169" stroke-width="2"/></svg>`,
  pump: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="32" r="18" stroke="#1D7A6E" stroke-width="2.5"/><path d="M30 22v10l8 5" stroke="#3B5169" stroke-width="2.3" stroke-linecap="round"/><line x1="48" y1="32" x2="58" y2="32" stroke="#3B5169" stroke-width="2.5"/></svg>`,
  lamp: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="27" y="6" width="10" height="44" rx="5" stroke="#1D7A6E" stroke-width="2.5"/><line x1="16" y1="14" x2="21" y2="14" stroke="#3B5169" stroke-width="2"/><line x1="16" y1="24" x2="21" y2="24" stroke="#3B5169" stroke-width="2"/><line x1="16" y1="34" x2="21" y2="34" stroke="#3B5169" stroke-width="2"/><line x1="43" y1="14" x2="48" y2="14" stroke="#3B5169" stroke-width="2"/><line x1="43" y1="24" x2="48" y2="24" stroke="#3B5169" stroke-width="2"/><line x1="43" y1="34" x2="48" y2="34" stroke="#3B5169" stroke-width="2"/><rect x="24" y="50" width="16" height="8" rx="2" stroke="#1D7A6E" stroke-width="2"/></svg>`,
  faucet: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 20h16v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H30v14" stroke="#1D7A6E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="30" y1="36" x2="30" y2="44" stroke="#3B5169" stroke-width="2.5" stroke-linecap="round"/><path d="M25 44h10l-2 8h-6z" fill="#EAF4F2" stroke="#1D7A6E" stroke-width="2"/></svg>`,
  electronics: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="44" height="44" rx="4" stroke="#1D7A6E" stroke-width="2.5"/><circle cx="22" cy="22" r="3" stroke="#3B5169" stroke-width="2"/><circle cx="42" cy="22" r="3" stroke="#3B5169" stroke-width="2"/><path d="M22 25v8h20v-8" stroke="#3B5169" stroke-width="1.8"/><line x1="16" y1="44" x2="48" y2="44" stroke="#3B5169" stroke-width="1.8"/><line x1="16" y1="48" x2="40" y2="48" stroke="#3B5169" stroke-width="1.8"/></svg>`,
  valve: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="32" x2="22" y2="32" stroke="#3B5169" stroke-width="2.5"/><line x1="42" y1="32" x2="60" y2="32" stroke="#3B5169" stroke-width="2.5"/><rect x="22" y="20" width="20" height="24" rx="4" stroke="#1D7A6E" stroke-width="2.5"/><line x1="32" y1="10" x2="32" y2="20" stroke="#3B5169" stroke-width="2.5"/><rect x="24" y="4" width="16" height="7" rx="2" stroke="#1D7A6E" stroke-width="2"/></svg>`,
};

const SERVICE_TYPES = [
  { id: "general", label: "General Service", note: "Routine check-up, cleaning and filter inspection." },
  { id: "filter-change", label: "Filter / Membrane Replacement", note: "Replace sediment, carbon, or RO membrane cartridges." },
  { id: "repair", label: "Repair / Not Working", note: "Purifier has a fault — leaking, no power, low output, etc." },
  { id: "installation", label: "New Installation", note: "Get a new or purchased purifier installed at home." },
];

const SERVICE_PACKAGES = [
  {
    id: "pkg-basic",
    name: "Basic Care",
    price: 999,
    period: "per year",
    tagline: "Essential upkeep for light household use.",
    services: [
      "2 general service visits per year",
      "Sediment & pre-carbon filter check",
      "Basic leak and pressure inspection",
      "Phone support during business hours",
    ],
  },
  {
    id: "pkg-standard",
    name: "Standard Care",
    price: 1799,
    period: "per year",
    tagline: "Our most popular plan for regular households.",
    highlight: true,
    services: [
      "4 service visits per year (once every 3 months)",
      "Sediment, carbon & RO membrane inspection",
      "1 free filter replacement included",
      "Priority phone & chat support",
      "10% discount on any extra repairs",
    ],
  },
  {
    id: "pkg-premium",
    name: "Premium Care",
    price: 2999,
    period: "per year",
    tagline: "Complete peace of mind, all parts covered.",
    services: [
      "6 service visits per year (bi-monthly)",
      "Full filter & membrane inspection every visit",
      "2 free filter replacements + 1 free membrane change",
      "UV lamp check and replacement if needed",
      "24/7 priority support with same-day visit option",
      "20% discount on any extra repairs or parts",
    ],
  },
];
