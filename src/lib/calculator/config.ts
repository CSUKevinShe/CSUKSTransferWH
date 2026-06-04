import type {
  RackTypeConfig,
  CostReference,
  WarehouseParams,
  RackParams,
  PalletParams,
  PlannerInput,
} from './types';

// ============================================================
// Rack Type Configurations
// ============================================================

export const RACK_TYPES: Record<string, RackTypeConfig> = {
  selective: {
    id: 'selective',
    name: 'Heavy-Duty Selective Racking',
    description:
      'The most common pallet racking system. Every pallet is directly accessible, ideal for high-SKU warehouses with varied inventory.',
    icon: 'Grid3X3',
    defaultAisleWidth: 2500,
    depthMultiplier: 1,
    utilizationRange: [30, 45],
    pros: [
      '100% pallet accessibility',
      'Easy SKU management',
      'Compatible with all forklift types',
      'Flexible configuration',
    ],
    cons: [
      'Lower storage density',
      'Requires wider aisles',
      'More floor space per pallet',
    ],
    bestFor:
      'Warehouses with many SKUs, varied inventory, and frequent access to different pallets.',
  },
  'drive-in': {
    id: 'drive-in',
    name: 'Drive-In / Drive-Through Racking',
    description:
      'High-density storage where forklifts drive directly into rack lanes. Eliminates aisles for up to 80% space utilization.',
    icon: 'Warehouse',
    defaultAisleWidth: 2700,
    depthMultiplier: 1,
    utilizationRange: [65, 80],
    pros: [
      'Up to 80% space utilization',
      'Eliminates most aisles',
      'Lowest cost per pallet position',
      'Ideal for bulk storage',
    ],
    cons: [
      'LIFO or FIFO only (single direction)',
      'Limited pallet accessibility',
      'Slower operation',
      'Requires experienced forklift operators',
    ],
    bestFor:
      'Cold storage, bulk storage, seasonal goods, and operations with few SKUs and high volume per SKU.',
  },
  'radio-shuttle': {
    id: 'radio-shuttle',
    name: 'Radio Shuttle Racking',
    description:
      'Semi-automated high-density system using shuttle carts that run on rails inside rack lanes. Combines density with improved throughput.',
    icon: 'Zap',
    defaultAisleWidth: 2700,
    depthMultiplier: 1,
    utilizationRange: [60, 75],
    pros: [
      'High density (up to 75%)',
      'FIFO or LIFO capable',
      'Faster than drive-in',
      'Reduced forklift damage risk',
    ],
    cons: [
      'Higher initial investment',
      'Requires shuttle carts',
      'Electrical infrastructure needed',
      'Maintenance of shuttle carts',
    ],
    bestFor:
      'High-volume operations needing both density and throughput, such as FMCG distribution and automotive parts.',
  },
};

// ============================================================
// Cost Reference
// Base steel price (USD/kg) — the single source of truth for raw steel cost.
// Budget tier multiplier in BUDGET_TIERS adjusts this up for higher-quality specs.
// Updated quarterly to reflect market conditions.
// ============================================================

export const COST_REFERENCE: CostReference = {
  baseSteelPerKg: 2.0,    // Unified base steel cost (was economy/standard/premium — eliminated double pricing)
  deckingPerM2: 18,        // Wire mesh deck per square meter
  safetyPerPosition: 3.5,  // Safety accessories per pallet position
};

// ============================================================
// Default Parameters
// ============================================================

export const DEFAULT_WAREHOUSE: WarehouseParams = {
  length: 50000,
  width: 25000,
  height: 10000,
  wallClearance: 200,
  columnSpacing: 10000,
};

export const DEFAULT_RACK: RackParams = {
  levels: 4,
  palletsPerBay: 3,
  aisleWidth: 2500,
};

export const DEFAULT_PALLET: PalletParams = {
  width: 1000,
  depth: 1200,
  height: 1500,
  loadPerPallet: 1000,
};

export const DEFAULT_INPUT: PlannerInput = {
  warehouse: DEFAULT_WAREHOUSE,
  rackType: 'selective',
  rack: DEFAULT_RACK,
  pallet: DEFAULT_PALLET,
  budget: 'standard',
};

// ============================================================
// Physical Constraints
// ============================================================

export const CONSTRAINTS = {
  warehouse: {
    length: { min: 5000, max: 200000 },
    width: { min: 5000, max: 100000 },
    height: { min: 3000, max: 30000 },
    wallClearance: { min: 50, max: 1000 },
    columnSpacing: { min: 0, max: 15000 },
  },
  rack: {
    levels: { min: 1, max: 8 },
    palletsPerBay: { min: 1, max: 6 },
    aisleWidth: { min: 1500, max: 4000 },
  },
  pallet: {
    width: { min: 600, max: 1500 },
    depth: { min: 800, max: 1800 },
    height: { min: 800, max: 2500 },
    loadPerPallet: { min: 200, max: 3000 },
  },
};

// ============================================================
// Budget Tier Display Names & Multipliers
// multiplier adjusts the base steel price from COST_REFERENCE.
// Economy: basic steel, minimal accessories → 0.85x
// Standard: quality steel, full safety accessories → 1.10x
// Premium: high-grade steel, enhanced safety, branded → 1.40x
// ============================================================

export const BUDGET_TIERS = {
  economy: {
    label: 'Economy',
    description: 'Standard steel grade, basic accessories',
    multiplier: 0.85,
  },
  standard: {
    label: 'Standard',
    description: 'Quality steel, full safety accessories',
    multiplier: 1.10,
  },
  premium: {
    label: 'Premium',
    description: 'High-grade steel, enhanced safety, branded components',
    multiplier: 1.40,
  },
};
