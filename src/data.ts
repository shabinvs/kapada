import { Product, AyurvedaShade } from './types';

export const productsList: Product[] = [
  {
    id: 'kids-vest',
    name: "Kids Inner Vest",
    category: 'kids',
    image: '/kids vest.webp',
    description: "Soft against young skin. No elastic or synthetic components in the dye chain. Available in natural plant-dye shades.",
    specs: [
      "100% natural cotton",
      "Herbal dyed",
      "Sizes: 0–12 years",
      "MOQ: 1000 pcs/colour"
    ],
    moq: "1,000 pcs/colour"
  },
  {
    id: 'kids-shorts',
    name: "Kids Inner Shorts / Briefs",
    category: 'kids',
    image: '/kids briefs.webp',
    description: "Gentle on sensitive skin. No synthetic dye residue. Natural waistband elastic options available.",
    specs: [
      "100% natural cotton",
      "Herbal dyed",
      "Sizes: 2–12 years",
      "MOQ: 1000 pcs/colour"
    ],
    moq: "1,000 pcs/colour"
  },
  {
    id: 'womens-bra',
    name: "Women's Bra",
    category: 'womens',
    image: '/womens bra.webp',
    description: "Designed for daily wear with skin safety as the primary brief. Herbal dye process eliminates synthetic chemical contact with the most sensitive skin areas. No azo dyes. No synthetic fixatives.",
    specs: [
      "Natural cotton / cotton-blend",
      "Herbal dyed",
      "Sizes: 30B–40D",
      "MOQ: 1000 pcs/size run"
    ],
    moq: "1,000 pcs/size run"
  },
  {
    id: 'womens-panties',
    name: "Women's Panties / Briefs",
    category: 'womens',
    image: '/womens briefs.webp',
    description: "Crafted for sensitive skin zones. No synthetic mordants, no residual chemicals. Available in herbal shades and unbleached natural options.",
    specs: [
      "100% natural cotton",
      "Herbal dyed",
      "Sizes: S–XXL",
      "MOQ: 1000 pcs/colour"
    ],
    moq: "1,000 pcs/colour"
  }
];

export const ayurvedaShadesList: AyurvedaShade[] = [
  {
    name: "Yellow",
    herbSource: "Turmeric / Tacomo / Onion",
    benefits: "Turmeric is a natural wonder — beneficial in many health conditions including anti-inflammatory and antioxidant applications.",
    colorHex: "#ECC45E",
    textColorHex: "#222222"
  },
  {
    name: "Green",
    herbSource: "Tulasi / Onion / Karisalankanni",
    benefits: "Tulasi (Holy Basil) is sacred in Ayurveda — supports respiratory function, optimal health and longevity.",
    colorHex: "#778C73",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Red",
    herbSource: "Kumkum / Maddar",
    benefits: "Decoction of wood and bark used for skin infections, postpartum tonic and nervous disorder treatment.",
    colorHex: "#AA5446",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Brown",
    herbSource: "Vettiver / Velam",
    benefits: "Vetiver decoctions used for treatment of all kinds of poison in toxicology.",
    colorHex: "#8A6953",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Ivory",
    herbSource: "Neem",
    benefits: "Described in Charaka Samhita as Sarva Roga Nivarini — that which keeps all diseases at bay.",
    colorHex: "#EAE2CF",
    textColorHex: "#222222"
  },
  {
    name: "Blue",
    herbSource: "Indigo",
    benefits: "One of the oldest dye plants in history with documented skin health benefits.",
    colorHex: "#4C6B8B",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Pink",
    herbSource: "Sappan Tree / Maddar",
    benefits: "Decoction of wood and bark — postpartum tonic, skin infections and nervous disorder treatment.",
    colorHex: "#D59295",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Black",
    herbSource: "Karungali / Ironwater",
    benefits: "Used for hair colouring, wound healing and to stop bleeding from bruises.",
    colorHex: "#2F3130",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Orange",
    herbSource: "Annatto / Marigold",
    benefits: "Bixaceae / Calendula officinalis — natural pigment with skin-soothing properties.",
    colorHex: "#DC8151",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Natural White",
    herbSource: "Animal manures, Soapnut, Fullers earth, Sunlight, Grass",
    benefits: "Purely natural finishing process.",
    colorHex: "#FAF8F5",
    textColorHex: "#222222",
    borderHex: "#D6CFC4"
  },
  {
    name: "Kaki",
    herbSource: "Triphala",
    benefits: "Chebulic myroblan gives healing properties and medicinal benefits to the fabric.",
    colorHex: "#9C8F73",
    textColorHex: "#FFFFFF"
  },
  {
    name: "Grey",
    herbSource: "Vembadam",
    benefits: "Anti-inflammatory and anticancer compounds embedded in the dye.",
    colorHex: "#7E8588",
    textColorHex: "#FFFFFF"
  }
];

export const founderTimeline = [
  {
    year: "2018",
    title: "Clinical Practice",
    description: "Dr. Ananya Dev, a pediatric dentist based in Mumbai & Edinburgh, repeatedly observed chronic oral and skin hypersensitivity in pediatric patients. Prescribing medication only offered temporary relief for systemic dermal flare-ups."
  },
  {
    year: "2020",
    title: "The Botanical Research",
    description: "Sabbatical studying Ayurvastra (the ancient Indian clinical science of medicinal dyeing). Dr. Ananya partnered with veteran organic chemists to analyze how natural textile fibers absorb herbal compounds and transfer them gently to the epidermis."
  },
  {
    year: "2022",
    title: "The Breakthrough Discovery",
    description: "Developed a proprietary, pesticide-free thermal infusion technique that locks herbal therapeutic agents (curcumin, azadirachtin) into raw cotton cellular walls, ensuring long-lasting therapeutic action even after 50+ machine washes."
  },
  {
    year: "2024",
    title: "Kapada B2B Launch",
    description: "Built the state-of-the-art export-oriented manufacturing facility in Gujarat. Today, we supply premium retailers in Dubai, Germany, and North America with medically conscious natural garments."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Natural Fibre Sourcing",
    icon: "Wheat",
    image: "/kids wear.jpg",
    description: "We begin with 100% natural fibre — cotton and cotton-blend base fabrics sourced from established textile mills in Dindigul. No synthetic base materials enter the Kapada supply chain."
  },
  {
    number: "02",
    title: "Herbal Dye Preparation",
    icon: "Sparkles",
    image: "/natural dyes.jpg",
    description: "Dye baths are prepared using plant-based and herbal sources — roots, bark, leaves, and natural minerals. No synthetic dye compounds. No azo dyes. No heavy metal mordants."
  },
  {
    number: "03",
    title: "Dyeing Process",
    icon: "Flower",
    image: "/kids wear.jpg",
    description: "Fabric is immersed in herbal dye baths using traditional low-impact processes. Colour is fixed using natural mordants only — alum, tannin, and plant-based fixatives."
  },
  {
    number: "04",
    title: "Finishing and Quality Check",
    icon: "Droplets",
    image: "/womens wear.jpg",
    description: "Each batch is checked for colour consistency, skin-safety markers, and fabric integrity before it is cut and stitched into final garments."
  },
  {
    number: "05",
    title: "Garment Production",
    icon: "Sun",
    image: "/kids wear.jpg",
    description: "Cutting, stitching, and finishing at our Dindigul manufacturing unit. Each piece labelled with fabric composition, dye batch reference, and care instructions."
  },
  {
    number: "06",
    title: "Dispatch and Documentation",
    icon: "ShieldCheck",
    image: "/womens wear.jpg",
    description: "Orders packed and dispatched with full batch documentation — fabric origin, dye batch reference, and quality check sign-off. Available on request for all B2B orders."
  }
];

export const b2bAudienceCards = [
  {
    title: "Sustainable Fashion Labels",
    description: "Elevate your eco-conscious collection with fullycertified Ayurvastra organic cotton apparel, customizable styling, and natural colors.",
    icon: "Apparel"
  },
  {
    title: "Wellness and Ayurvedic Centers",
    description: "Premium wellness boutiques and health spas offering skin-safe, toxic-free therapeutic clothing for healing therapies and relaxing lounges.",
    icon: "Spa"
  },
  {
    title: "Premium Kidswear Stores",
    description: "Attract conscious parents who select zero-chemical innerwear and baby essentials engineered specifically for eczema-prone skin.",
    icon: "Baby"
  },
  {
    title: "International Export Houses",
    description: "Fully compliant, GOTS tracking certified garments curated carefully for strict luxury European and North American customs clearance standards.",
    icon: "Globe"
  },
  {
    title: "Private Label Brands",
    description: "End-to-end B2B corporate support covering customized tags, luxury packaging, and custom printing, built under strict confidentiality.",
    icon: "Award"
  },
  {
    title: "Hospitality and Luxury Eco-Resorts",
    description: "Equip your guest rooms and high-end wellness boutiques with organic inner robes and sensory comfort inner sets.",
    icon: "Bed"
  }
];

export const certifications = [
  { name: "ZED MSME Bronze", body: "Zero Defect Zero Effect Govt. of India", desc: "Zero Defect Zero Effect Govt. of India", image: "/msme zed.jpg" },
  { name: "ZED Certification", body: "Zero Defect Zero Effect", desc: "Zero Defect Zero Effect", image: "/zed bronze.jpg" },
  { name: "Bioagricert Vegan Certified", body: "International Vegan Standard", desc: "International Vegan Standard", image: "/vegan .jpg" },
  { name: "Sustainable Natural Dyes Std", body: "Natural Dye Process Verified", desc: "Natural Dye Process Verified", image: "/natural dyes.jpg" }
];

export const moqTableList = [
  { category: "Kids Innerwear / Vests", moq: "1000 pieces per colour" },
  { category: "Kids Inner Shorts", moq: "1000 pieces per colour" },
  { category: "Women's Bras", moq: "1000 pieces per size run" },
  { category: "Women's Panties", moq: "1000 pieces per colour" }
];
