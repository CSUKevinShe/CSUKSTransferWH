// ============================================================
// ResourceItem — enhanced with region and tags for structured filtering
// ============================================================

export type ResourceCategory = 'standards' | 'manufacturers' | 'accessories' | 'media';

export type ResourceRegion = 'China' | 'Europe' | 'Americas' | 'Asia-Pacific' | 'Global';

export type ResourceTag =
  | 'Design Standard'
  | 'Safety & Compliance'
  | 'Automation & AS/RS'
  | 'Wire Mesh Deck'
  | 'Pallet & Container'
  | 'Safety Accessories'
  | 'Full-Range'
  | 'Drive-In / Dense'
  | 'Mezzanine & Platform'
  | 'Trade Show'
  | 'Calculator / Tool'
  | 'Cold Storage';

export interface ResourceItem {
  name: string;
  url: string;
  category: ResourceCategory;
  region: ResourceRegion;
  tags: ResourceTag[];
  description: string;
  featured: boolean;
  added: string;
}

export const RESOURCE_CATEGORIES = [
  { id: 'standards' as const, name: 'Standards & Associations' },
  { id: 'manufacturers' as const, name: 'Global Manufacturers' },
  { id: 'accessories' as const, name: 'Accessories & Equipment' },
  { id: 'media' as const, name: 'Industry Media & Tools' },
];

export const RESOURCE_REGIONS: ResourceRegion[] = [
  'China', 'Europe', 'Americas', 'Asia-Pacific', 'Global',
];

export const RESOURCE_TAGS: ResourceTag[] = [
  'Design Standard',
  'Safety & Compliance',
  'Automation & AS/RS',
  'Wire Mesh Deck',
  'Pallet & Container',
  'Safety Accessories',
  'Full-Range',
  'Drive-In / Dense',
  'Mezzanine & Platform',
  'Trade Show',
  'Calculator / Tool',
  'Cold Storage',
];

/** Quick-filter presets */
export interface QuickFilter {
  label: string;
  region?: ResourceRegion;
  tags?: ResourceTag[];
  category?: ResourceCategory;
}

export const QUICK_FILTERS: QuickFilter[] = [
  { label: 'Chinese Manufacturers', region: 'China', category: 'manufacturers' },
  { label: 'Wire Mesh Deck', tags: ['Wire Mesh Deck'] },
  { label: 'Design Standards', tags: ['Design Standard'] },
  { label: 'Free Tools', tags: ['Calculator / Tool'] },
  { label: 'Warehouse Safety', tags: ['Safety & Compliance'] },
];

export const RESOURCES: ResourceItem[] = [
  { name: 'FEM - European Materials Handling Federation', url: 'https://www.fem-eur.com', category: 'standards', region: 'Europe', tags: ['Design Standard', 'Safety & Compliance'], description: 'The European federation of materials handling, storage, and logistics equipment manufacturers. Publishes FEM 10.2.02 racking design guidelines.', featured: true, added: '2025-06-17' },
  { name: 'MHI - Material Handling Industry', url: 'https://www.mhi.org', category: 'standards', region: 'Americas', tags: ['Trade Show', 'Safety & Compliance'], description: 'US-based trade association for the material handling, logistics, and supply chain industry. Organizes ProMat and MODEX trade shows.', featured: true, added: '2025-06-17' },
  { name: 'RMI - Rack Manufacturers Institute', url: 'https://www.mhi.org/rmi', category: 'standards', region: 'Americas', tags: ['Design Standard', 'Safety & Compliance'], description: 'US rack manufacturing standards body. Publishes ANSI/RMI MH16.1 specification for the design, testing, and utilization of industrial steel storage racks.', featured: true, added: '2025-06-17' },
  { name: 'SEMA - Storage Equipment Manufacturers Association', url: 'https://www.sema.org.uk', category: 'standards', region: 'Europe', tags: ['Design Standard', 'Safety & Compliance'], description: 'UK trade association for storage equipment. Provides SEMA design code and user guidance for pallet racking installations.', featured: true, added: '2025-06-17' },
  { name: 'EN 15512 - Steel Static Storage Systems', url: 'https://standards.iteh.ai/catalog/standards/cen/b67a1bd7-bfa7-477a-9e58-8a2c60ee0e2d/en-15512-2009', category: 'standards', region: 'Europe', tags: ['Design Standard'], description: 'European standard for the design of steel static pallet racking systems. Supersedes earlier FEM 10.2.02 calculations.', featured: true, added: '2025-06-17' },
  { name: 'EN 15635 - Use and Maintenance of Storage Equipment', url: 'https://standards.iteh.ai/catalog/standards/cen/b5ff32a0-ff34-4883-a062-c4ce94d7b4f1/en-15635-2009', category: 'standards', region: 'Europe', tags: ['Safety & Compliance'], description: 'European standard covering the safe use, inspection, and maintenance of steel pallet racking systems. Includes damage assessment and inspection frequency requirements.', featured: true, added: '2025-07-20' },
  { name: 'NFPA 13 - Sprinkler Systems for Racked Storage', url: 'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=13', category: 'standards', region: 'Americas', tags: ['Safety & Compliance'], description: 'US fire protection standard covering sprinkler design requirements for storage including palletized, solid-pile, and rack storage.', featured: false, added: '2025-06-17' },
  { name: 'VDI - Association for Mechanical and Plant Engineering', url: 'https://www.vdi.de', category: 'standards', region: 'Europe', tags: ['Design Standard'], description: 'German engineering association. VDI guidelines cover warehouse planning and racking systems design.', featured: false, added: '2025-06-17' },
  { name: 'ISO Technical Committee 110 (Industrial Trucks)', url: 'https://www.iso.org/committee/54058.html', category: 'standards', region: 'Global', tags: ['Safety & Compliance'], description: 'International Organization for Standardization committee covering industrial truck safety standards relevant to racking operations.', featured: false, added: '2025-06-17' },
  { name: 'AS 4084 - Steel Storage Racking (Australia)', url: 'https://www.standards.org.au/standards-catalogue/sa-snz/building/me-013/as-4084-2024', category: 'standards', region: 'Asia-Pacific', tags: ['Design Standard'], description: 'Australian standard for the design, fabrication, erection, and use of steel storage racking. Essential reference for Australia-Pacific projects.', featured: false, added: '2025-07-02' },
  { name: 'FEM 10.2.04 - Seismic Design of Pallet Racking', url: 'https://www.fem-eur.com/publications', category: 'standards', region: 'Europe', tags: ['Design Standard'], description: 'Supplementary guideline for the design of adjustable pallet racking subject to seismic actions. Essential for projects in earthquake-prone regions.', featured: true, added: '2025-07-20' },
  { name: 'OSHA - Warehouse Safety Standards', url: 'https://www.osha.gov/etools/warehousing', category: 'standards', region: 'Americas', tags: ['Safety & Compliance'], description: 'US Occupational Safety and Health Administration guidelines for warehouse operations including racking safety, forklift operations, and ergonomic requirements.', featured: false, added: '2025-06-17' },
  { name: 'Boracs Logistics Equipment (Verified Partner)', url: 'https://www.boracs.com', category: 'manufacturers', region: 'China', tags: ['Full-Range', 'Drive-In / Dense', 'Mezzanine & Platform', 'Automation & AS/RS'], description: 'RackingHub Verified Manufacturing Partner. FEM, CE, RMI, and ISO 9001 certified. Established 2004 in Shanghai, relocated to Nanjing in 2024. Exports to 60+ countries, 50+ containers/year. Trusted by IKEA, Qatar Airways, Goodyear, WHO Lebanon, Qatar World Cup 2022. Full range: selective, drive-in, radio shuttle, mezzanine, cantilever, wire mesh deck, metal pallet. Direct-from-factory EXW/FOB pricing.', featured: true, added: '2025-07-20' },
  { name: 'Dematic', url: 'https://www.dematic.com', category: 'manufacturers', region: 'Global', tags: ['Full-Range', 'Automation & AS/RS'], description: 'Global supplier of automated logistics solutions, conveyors, and racking systems. Part of KION Group.', featured: false, added: '2025-06-17' },
  { name: 'Jungheinrich', url: 'https://www.jungheinrich.com', category: 'manufacturers', region: 'Europe', tags: ['Full-Range', 'Automation & AS/RS'], description: 'German manufacturer of industrial trucks, racking systems, and warehouse technology. Integrated solutions provider.', featured: false, added: '2025-06-17' },
  { name: 'AR Racking', url: 'https://www.ar-racking.com', category: 'manufacturers', region: 'Europe', tags: ['Full-Range', 'Drive-In / Dense', 'Automation & AS/RS'], description: 'Spanish manufacturer with full racking range including automated warehouses. Part of Grupo Arania. ISO 9001/14001/45001 certified.', featured: false, added: '2025-07-15' },
  { name: 'Interroll', url: 'https://www.interroll.com', category: 'manufacturers', region: 'Europe', tags: ['Pallet & Container', 'Automation & AS/RS'], description: 'Swiss provider of products for unit load handling, including pallet flow storage systems and roller conveyors.', featured: false, added: '2025-06-17' },
  { name: 'Constructor Group', url: 'https://www.constructor-asia.com', category: 'manufacturers', region: 'Asia-Pacific', tags: ['Full-Range'], description: 'Scandinavian-origin racking manufacturer with strong presence in Asia. Wide range of pallet racking and shelving solutions.', featured: false, added: '2025-07-15' },
  { name: 'Mecalux', url: 'https://www.mecalux.com', category: 'manufacturers', region: 'Europe', tags: ['Full-Range', 'Drive-In / Dense', 'Automation & AS/RS'], description: 'Spanish multinational manufacturer of storage systems. Offers pallet racking, drive-in, push-back, and automated solutions.', featured: false, added: '2025-07-15' },
  { name: 'Stow Group', url: 'https://www.stowgroup.com', category: 'manufacturers', region: 'Europe', tags: ['Full-Range', 'Drive-In / Dense'], description: 'Belgian racking manufacturer with global reach. Offers selective, drive-in, push-back, and mobile racking systems.', featured: false, added: '2025-07-15' },
  { name: 'Dexion (Gonvarri Steel Services)', url: 'https://www.dexion.com', category: 'manufacturers', region: 'Europe', tags: ['Full-Range'], description: 'Historic UK racking brand now part of Gonvarri. Known for the iconic Dexion Speedlock slotted angle system. Full range of pallet racking.', featured: false, added: '2025-07-20' },
  { name: 'Jingxing (JX Logistics)', url: 'https://www.jxlogistics.com', category: 'manufacturers', region: 'China', tags: ['Full-Range', 'Automation & AS/RS'], description: 'Founded 1989 in Shanghai. National high-tech enterprise with 500+ employees. Full range from precision shelving to automated warehouses and AS/RS systems.', featured: false, added: '2026-06-01' },
  { name: 'Sunnyrack', url: 'https://www.sunnyracking.com', category: 'manufacturers', region: 'China', tags: ['Full-Range', 'Drive-In / Dense', 'Mezzanine & Platform'], description: 'Nanjing-based manufacturer est. 2002. Monthly capacity of 1,000 tons. Focuses on large-volume export orders with Fortune 500 partnerships.', featured: false, added: '2026-06-01' },
  { name: 'KAKU Equipment', url: 'https://www.kakuequipment.com', category: 'manufacturers', region: 'China', tags: ['Full-Range', 'Mezzanine & Platform', 'Cold Storage'], description: 'Nanjing warehouse equipment manufacturer with verified Fortune 500 project partnerships. Product range covers heavy-duty pallet racks, mezzanine systems, and cold room racking.', featured: false, added: '2026-06-01' },
  { name: 'Topsun Racking', url: 'http://topsunrack.en.china.cn/', category: 'manufacturers', region: 'China', tags: ['Full-Range', 'Drive-In / Dense'], description: 'Nanjing-based manufacturer founded in 1993, one of the earliest professional racking manufacturers in China. Strong export experience across the Middle East, Southeast Asia, and Europe.', featured: false, added: '2026-06-01' },
  { name: 'Dongsheng Racking', url: 'http://www.dsracking.com', category: 'manufacturers', region: 'China', tags: ['Full-Range', 'Drive-In / Dense', 'Mezzanine & Platform', 'Automation & AS/RS'], description: 'Nanjing-based manufacturer est. 2005 with a 40,000 m2 factory and 280+ employees. ISO, CWB, RMI, and SMI certified.', featured: false, added: '2026-06-01' },
  { name: 'Uline - Pallets & Warehouse Supplies', url: 'https://www.uline.com', category: 'accessories', region: 'Americas', tags: ['Safety Accessories', 'Pallet & Container'], description: 'Leading distributor of shipping, packaging, and warehouse supplies including pallets, rack guards, and safety equipment.', featured: false, added: '2025-06-17' },
  { name: 'Steel King Industries', url: 'https://www.steelking.com', category: 'accessories', region: 'Americas', tags: ['Wire Mesh Deck'], description: 'US manufacturer of industrial storage products including pallet racks, drive-in racks, and wire mesh decks.', featured: false, added: '2025-06-17' },
  { name: 'SteelPro Industries', url: 'https://www.steelpro.co', category: 'accessories', region: 'Global', tags: ['Wire Mesh Deck'], description: 'Wire mesh deck manufacturer. Provides standard and custom wire decking solutions for pallet racking systems.', featured: false, added: '2025-07-02' },
  { name: 'Rack Components Ltd', url: 'https://www.rackcomponents.co.uk', category: 'accessories', region: 'Europe', tags: ['Safety Accessories'], description: 'UK-based supplier of racking safety products including column guards, pallet stops, and rack end barriers.', featured: false, added: '2025-07-02' },
  { name: 'GMP Welding - Wire Mesh Decks', url: 'https://www.gmpwelding.com', category: 'accessories', region: 'Americas', tags: ['Wire Mesh Deck'], description: 'US manufacturer of industrial wire mesh decks for pallet racking. Custom sizes and load ratings available.', featured: false, added: '2025-07-20' },
  { name: 'Crocus Pallets', url: 'https://www.crocuspallets.com', category: 'accessories', region: 'Europe', tags: ['Pallet & Container'], description: 'UK-based supplier of new and reconditioned pallets, wooden and plastic. Useful reference for pallet specifications and pricing.', featured: false, added: '2025-07-20' },
  { name: 'Brambles / CHEP', url: 'https://www.chep.com', category: 'accessories', region: 'Global', tags: ['Pallet & Container'], description: 'Global leader in pooled pallet and container solutions. Operates in 60+ countries with standardized plastic and wooden pallets.', featured: false, added: '2026-06-01' },
  { name: 'Blue Giant Logistics', url: 'https://www.ljrjsplastic.com', category: 'accessories', region: 'China', tags: ['Pallet & Container'], description: 'China-based manufacturer of plastic storage bins, parts boxes, ESD containers, and logistics boxes. 500+ specifications. ISO 9001 certified.', featured: false, added: '2026-06-01' },
  { name: 'Unifcon', url: 'https://www.unifcon.com', category: 'accessories', region: 'China', tags: ['Pallet & Container'], description: 'Specialized manufacturer of foldable wire mesh containers (stillages) and storage cages. Custom sizes and load ratings available.', featured: false, added: '2026-06-01' },
  { name: 'Modern Materials Handling', url: 'https://www.mmh.com', category: 'media', region: 'Americas', tags: ['Trade Show'], description: 'Leading publication covering material handling, logistics, and supply chain operations. News, analysis, and product reviews.', featured: false, added: '2025-06-17' },
  { name: 'Supply Chain Dive', url: 'https://www.supplychaindive.com', category: 'media', region: 'Americas', tags: ['Automation & AS/RS'], description: 'News and analysis for supply chain and logistics professionals. Covers warehouse automation, technology, and industry trends.', featured: false, added: '2025-06-17' },
  { name: 'Warehouse & Logistics News', url: 'https://www.warehousenews.co.uk', category: 'media', region: 'Europe', tags: ['Automation & AS/RS'], description: 'UK-focused publication covering warehouse operations, racking systems, and logistics technology.', featured: false, added: '2025-07-15' },
  { name: 'Warehouse Science', url: 'https://warehouse-science.com', category: 'media', region: 'Global', tags: ['Calculator / Tool'], description: 'Free online textbook by Prof. John J. Bartholdi III (Georgia Tech). Comprehensive coverage of warehouse design principles, order picking, and material flow.', featured: true, added: '2025-07-20' },
  { name: 'PalletIQ - Pallet Loading Calculator', url: 'https://palletiq.in', category: 'media', region: 'Global', tags: ['Calculator / Tool', 'Pallet & Container'], description: 'Free online tool for calculating optimal pallet loading patterns. Includes TI-HI calculator, efficiency analyzer, and container loading optimization.', featured: true, added: '2025-07-20' },
  { name: 'Geek+ Free Tools & Calculators', url: 'https://geekplus.com/resources/free-tools-calculators', category: 'media', region: 'China', tags: ['Calculator / Tool', 'Automation & AS/RS'], description: 'Collection of 50+ free warehouse tools including ROI calculators, warehouse design planners, inventory analyzers, and automation readiness assessments.', featured: true, added: '2025-07-20' },
  { name: 'Mecalux Easy WMS', url: 'https://www.mecalux.com/warehousing-solutions/software/easy-wms', category: 'media', region: 'Europe', tags: ['Automation & AS/RS'], description: 'Cloud-based warehouse management system by Mecalux. Free demo available. Integrates with racking systems for real-time inventory management.', featured: false, added: '2025-07-20' },
  { name: 'OSHA Warehouse Safety eTool', url: 'https://www.osha.gov/etools/warehousing', category: 'media', region: 'Americas', tags: ['Safety & Compliance', 'Calculator / Tool'], description: 'Free US government resource covering warehouse safety hazards, racking requirements, forklift safety, and ergonomic guidelines.', featured: true, added: '2025-07-20' },
  { name: 'Steel Weight Calculator', url: 'https://www.steelforge.com/weight-calculator', category: 'media', region: 'Global', tags: ['Calculator / Tool'], description: 'Calculate the weight of steel beams, plates, and tubes. Useful for estimating racking system weight for freight and installation planning.', featured: false, added: '2025-07-20' },
  { name: 'Ridg-U-Rak Virtual Showroom', url: 'https://ridgurak.com/virtual-showroom/', category: 'media', region: 'Americas', tags: ['Full-Range', 'Drive-In / Dense'], description: 'Interactive 3D animations showing how different racking systems function — selective, drive-in, push-back, VNA, shuttle, cantilever, and pick modules.', featured: true, added: '2025-07-20' },
  { name: 'Freightos - International Freight Calculator', url: 'https://www.freightos.com/freight-calculator', category: 'media', region: 'Global', tags: ['Calculator / Tool'], description: 'Instant freight rate calculator for container shipping (FCL and LCL). Useful for estimating international shipping costs of racking systems.', featured: false, added: '2025-07-20' },
  { name: 'World Freight Rates', url: 'https://www.worldfreightrates.com', category: 'media', region: 'Global', tags: ['Calculator / Tool'], description: 'Global freight rate reference for ocean, air, and road transport. Helps estimate shipping costs from manufacturing facilities worldwide.', featured: false, added: '2025-07-20' }
];

export const RESOURCE_CATEGORIES_WITH_COUNT = RESOURCE_CATEGORIES.map((cat) => ({
  ...cat,
  count: RESOURCES.filter((r) => r.category === cat.id).length,
}));
