// ============================================================
// RackingHub Planner — Type Definitions
// ============================================================

/** Supported racking system types */
export type RackType = 'selective' | 'drive-in' | 'radio-shuttle';

/** Budget tier for cost estimation */
export type BudgetTier = 'economy' | 'standard' | 'premium';

/** Warehouse building dimensions */
export interface WarehouseParams {
  /** Building interior length in mm */
  length: number;
  /** Building interior width in mm */
  width: number;
  /** Clear height from floor to lowest obstruction in mm */
  height: number;
  /** Minimum clearance from wall to nearest rack face in mm */
  wallClearance: number;
  /** Column spacing (grid) in mm — 0 = ignore */
  columnSpacing: number;
}

/** Rack system configuration */
export interface RackParams {
  /** Number of storage levels (excluding ground) */
  levels: number;
  /** Number of pallets per bay (along the beam) */
  palletsPerBay: number;
  /** Aisle width between opposing rack faces in mm */
  aisleWidth: number;
}

/** Pallet / load specifications */
export interface PalletParams {
  /** Pallet width (shorter side, along beam) in mm */
  width: number;
  /** Pallet depth (longer side, along frame) in mm */
  depth: number;
  /** Pallet height including load in mm */
  height: number;
  /** Uniform load per pallet in kg */
  loadPerPallet: number;
}

/** Complete input parameter set */
export interface PlannerInput {
  warehouse: WarehouseParams;
  rackType: RackType;
  rack: RackParams;
  pallet: PalletParams;
  budget: BudgetTier;
}

/** Dimensions of a single rack frame (upright) */
export interface FrameSpec {
  height: number;
  depth: number;
  sectionWeight: number; // kg per upright
}

/** Dimensions of a single rack beam */
export interface BeamSpec {
  length: number;
  loadCapacity: number; // kg per pair
  weightPerPair: number; // kg
}

/** Bill of Materials line item */
export interface BOMItem {
  description: string;
  unit: string;
  quantity: number;
  unitWeight: number; // kg
  totalWeight: number; // kg
  unitCost: number; // USD
  totalCost: number; // USD
  category: 'frame' | 'beam' | 'decking' | 'accessory' | 'safety';
}

/** 2D layout element */
export interface LayoutElement {
  type: 'rack-row' | 'aisle' | 'wall' | 'clearance' | 'column';
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  color?: string;
}

/** Computed layout data */
export interface LayoutData {
  elements: LayoutElement[];
  warehouseLength: number;
  warehouseWidth: number;
  /** Number of rack rows (single-deep rows) */
  rackRows: number;
  /** Number of aisles */
  aisles: number;
  /** Number of bays per row */
  baysPerRow: number;
  /** Number of double rack blocks */
  rackBlocks: number;
  /** Total racking area in m2 */
  rackingArea: number;
  /** Warehouse area in m2 */
  warehouseArea: number;
  /** Space utilization percentage */
  utilization: number;
}

/** Plan summary (for display) */
export interface PlanSummary {
  totalPalletPositions: number;
  totalStorageCapacity: number; // kg
  warehouseArea: number; // m2
  rackingArea: number; // m2
  spaceUtilization: number; // %
  estimatedTotalCost: number; // USD
  costPerPalletPosition: number; // USD
  rackSystem: string;
  rackType: RackType;
}

/** Complete planner output */
export interface PlannerResult {
  layout: LayoutData;
  summary: PlanSummary;
  bom: BOMItem[];
}

/** Rack type display configuration */
export interface RackTypeConfig {
  id: RackType;
  name: string;
  description: string;
  icon: string;
  /** Recommended aisle width in mm */
  defaultAisleWidth: number;
  /** Depth multiplier for frame (1 = single-deep, 2+ = multi-deep) */
  depthMultiplier: number;
  /** Typical space utilization range */
  utilizationRange: [number, number];
  /** Pros (for display) */
  pros: string[];
  /** Cons (for display) */
  cons: string[];
  /** Best use case description */
  bestFor: string;
}

/**
 * Cost reference — single source of truth for material costs.
 * Base steel price is adjusted by BUDGET_TIERS[budget].multiplier.
 */
export interface CostReference {
  /** Base structural steel price in USD/kg (before budget multiplier) */
  baseSteelPerKg: number;
  /** Wire mesh deck per m2 */
  deckingPerM2: number;
  /** Safety accessories per pallet position */
  safetyPerPosition: number;
}
