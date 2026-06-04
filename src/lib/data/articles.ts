export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: number;
  featured: boolean;
}

export const ARTICLES: Article[] = [
  {
    slug: 'overview-warehouse-racking-standards',
    title: 'Racking Industry Standards: FEM, EN, ISO & SEMA Complete Guide',
    description:
      'A comprehensive guide to racking industry standards governing warehouse racking design, installation, and inspection — including FEM 10.2.02, EN 15512, ANSI/RMI MH16.1, and SEMA.',
    date: '2025-06-17',
    category: 'Standards',
    readTime: 12,
    featured: true,
  },
  {
    slug: 'selective-racking-complete-guide',
    title: 'Selective Pallet Racking: Complete Guide to Types, Dimensions & Warehouse Layout Planning',
    description:
      'Comprehensive guide to selective pallet racking — types, load capacity, standard dimensions, layout planning, and how to configure selective racking for your warehouse.',
    date: '2025-06-17',
    category: 'Planning',
    readTime: 15,
    featured: true,
  },
  {
    slug: 'drive-in-vs-shuttle-comparison',
    title: 'Drive-In Racking vs Radio Shuttle: Density, Cost & Throughput Compared',
    description:
      'Detailed comparison of drive-in racking and radio shuttle systems — storage density, throughput speed, cost per pallet position, and which high-density solution fits your warehouse.',
    date: '2025-06-17',
    category: 'Comparison',
    readTime: 10,
    featured: false,
  },
  {
    slug: 'pallet-racking-safety-guide',
    title: 'Pallet Racking Safety: Inspection, Maintenance, and Compliance',
    description:
      'Essential safety practices for warehouse racking including regular inspection schedules, damage assessment, and regulatory compliance requirements.',
    date: '2025-07-02',
    category: 'Safety',
    readTime: 14,
    featured: false,
  },
  {
    slug: 'warehouse-aisle-width-guide',
    title: 'Warehouse Aisle Width Guide: Forklift Types and Racking Layout',
    description:
      'How to determine the right aisle width for your racking system based on forklift type, pallet dimensions, and storage density goals.',
    date: '2025-07-15',
    category: 'Planning',
    readTime: 11,
    featured: false,
  },
  {
    slug: 'racking-system-selection-checklist',
    title: 'Racking System Selection Checklist: 12 Factors to Consider',
    description:
      'A structured decision framework covering inventory profile, throughput requirements, building constraints, and budget considerations.',
    date: '2025-08-01',
    category: 'Planning',
    readTime: 9,
    featured: false,
  },
  {
    slug: 'wire-mesh-deck-guide',
    title: 'Wire Mesh Decking Panels: Selection Guide and Load Capacity Chart',
    description:
      'Complete guide to wire mesh decking panels including reinforcement types, load ratings, sizing guidelines, and when to use steel panels instead.',
    date: '2025-08-20',
    category: 'Standards',
    readTime: 14,
    featured: true,
  },
  {
    slug: 'understanding-racking-bom',
    title: 'Understanding Your Racking Bill of Materials (BOM)',
    description:
      'Breakdown of every component in a pallet racking system: uprights, beams, braces, decks, safety accessories, and installation hardware.',
    date: '2025-09-10',
    category: 'Planning',
    readTime: 12,
    featured: false,
  },
  {
    slug: 'cold-storage-racking-design',
    title: 'Racking Design for Cold Storage: Challenges and Best Practices',
    description:
      'Special considerations for cold room and freezer warehouse racking including steel grade selection, ice buildup, and insulation compatibility.',
    date: '2025-10-05',
    category: 'Case Studies',
    readTime: 10,
    featured: false,
  },
  {
    slug: 'racking-solutions-ecommerce-fulfillment',
    title: 'Racking Solutions for E-Commerce Fulfillment Centers',
    description:
      'How to design racking systems optimized for e-commerce operations: high SKU variety, fast pick rates, and scalable storage that adapts to seasonal demand.',
    date: '2025-11-01',
    category: 'Case Studies',
    readTime: 11,
    featured: true,
  },
  {
    slug: 'mezzanine-racking-cost-benefit-analysis',
    title: 'Mezzanine Racking: Cost-Benefit Analysis and Design Guide',
    description:
      'When to add a mezzanine level vs. expanding your building footprint. Covers structural requirements, ROI calculations, building code compliance, and integration with existing racking.',
    date: '2025-11-15',
    category: 'Planning',
    readTime: 13,
    featured: false,
  },
  {
    slug: 'warehouse-racking-for-food-beverage',
    title: 'Food Industry Racking Systems: Complete Guide to Food Production & Beverage Warehouse Storage',
    description:
      'Expert guide to food industry racking systems — HACCP compliance, FIFO storage, hygiene-rated coatings, cold zone racking, and allergen-safe warehouse layouts for food production facilities.',
    date: '2025-12-01',
    category: 'Case Studies',
    readTime: 12,
    featured: true,
  },
  {
    slug: 'cantilever-racking-guide',
    title: 'Cantilever Racking: The Complete Guide to Long Goods Storage',
    description:
      'How cantilever racking works for lumber, pipes, sheets, and other long or awkward items. Covers arm design, load capacity, and layout considerations.',
    date: '2025-09-10',
    category: 'Planning',
    readTime: 13,
    featured: false,
  },
  {
    slug: 'push-back-racking-explained',
    title: 'Push-Back Racking Explained: How It Works and When to Use It',
    description:
      'A practical guide to push-back racking systems — operating principles, lane depth options, forklift requirements, and comparison with drive-in and selective racking.',
    date: '2025-09-20',
    category: 'Planning',
    readTime: 11,
    featured: false,
  },
  {
    slug: 'vna-very-narrow-aisle-racking',
    title: 'Very Narrow Aisle (VNA) Racking: Maximizing Warehouse Storage Density',
    description:
      'How VNA racking uses turret trucks to reduce aisle widths to 1.6m, increasing storage capacity by 40-50% compared to conventional selective racking.',
    date: '2025-10-05',
    category: 'Planning',
    readTime: 12,
    featured: false,
  },
  {
    slug: 'pallet-rack-installation-guide',
    title: 'Pallet Racking Installation: A Step-by-Step Guide',
    description:
      'What to expect during racking installation — site preparation, anchoring, upright erection, beam installation, safety inspection, and common mistakes to avoid.',
    date: '2025-10-15',
    category: 'Planning',
    readTime: 14,
    featured: false,
  },
  {
    slug: 'metal-pallet-selection-guide',
    title: 'Metal Pallets vs. Plastic vs. Wood: A Procurement Guide',
    description:
      'Comprehensive comparison of metal pallets with plastic and wooden alternatives. Covers load capacity, durability, hygiene, cost, and application-specific recommendations.',
    date: '2025-11-01',
    category: 'Comparison',
    readTime: 10,
    featured: true,
  },
  {
    slug: 'warehouse-racking-maintenance-checklist',
    title: 'Warehouse Racking Maintenance: Annual Inspection Checklist',
    description:
      'A practical inspection checklist for warehouse managers covering upright damage, beam deflection, safety accessories, anchoring, and documentation requirements per EN 15635.',
    date: '2025-11-15',
    category: 'Safety',
    readTime: 9,
    featured: false,
  },
  {
    slug: 'smart-warehousing-digital-data-physical-racking',
    title: 'The Convergence of Bytes and Steel: How Digital Storage and Physical Racking Drive Modern Smart Warehousing',
    description:
      'Explore how warehouse management software, ASRS, and high-density pallet racking converge to create smart warehousing systems — from digital data insights to physical space optimization.',
    date: '2026-05-31',
    category: 'Planning',
    readTime: 10,
    featured: true,
  },
  {
    slug: 'radio-shuttle-racking-cost-roi-calculator',
    title: 'Radio Shuttle Racking System Cost: The Ultimate ROI Calculator for Modern Warehouses',
    description:
      'A detailed breakdown of radio shuttle racking system costs including shuttle cart, rail, rack structure, and installation. Includes ROI calculator, throughput analysis, and cost-per-pallet-position comparison vs. drive-in and selective racking.',
    date: '2026-06-01',
    category: 'Planning',
    readTime: 16,
    featured: true,
  },
  {
    slug: 'fem-vs-rmi-pallet-racking-standard-guide',
    title: 'FEM 10.2.02 vs RMI: Which Pallet Racking Standard Do You Need for Your Next Project?',
    description:
      'A comprehensive comparison of European FEM 10.2.02 and American ANSI/RMI MH16.1 pallet racking design standards. Covers load calculations, seismic requirements, testing methods, and how to ensure compliance for international projects.',
    date: '2026-06-01',
    category: 'Standards',
    readTime: 14,
    featured: true,
  },
  {
    slug: 'warehouse-mezzanine-floor-design-mistakes',
    title: 'Top 5 Structural Mistakes in Warehouse Mezzanine Floor Design',
    description:
      'Critical design errors that compromise mezzanine safety and cost-effectiveness: underestimating point loads, ignoring column spacing, inadequate bracing, wrong decking selection, and neglecting building code requirements.',
    date: '2026-06-01',
    category: 'Safety',
    readTime: 12,
    featured: false,
  },
  {
    slug: 'drive-in-vs-selective-price-per-pallet-position',
    title: 'Drive-In Racking vs Selective Pallet Racking: Price per Pallet Position Comparison',
    description:
      'Side-by-side cost analysis of drive-in and selective pallet racking. Calculate the true price per pallet position including steel, installation, forklift requirements, and operational costs.',
    date: '2026-06-01',
    category: 'Comparison',
    readTime: 11,
    featured: false,
  },
];

export const ARTICLE_CATEGORIES = [
  'Standards',
  'Planning',
  'Comparison',
  'Safety',
  'Case Studies',
];
