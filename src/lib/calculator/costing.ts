import type {
  PlannerInput,
  PlanSummary,
  BOMItem,
  RackType,
  LayoutData,
} from './types';
import { COST_REFERENCE, RACK_TYPES, BUDGET_TIERS } from './config';
import { calculateLayout } from './layout';

// ============================================================
// Costing Engine
// Estimates steel weight and cost based on rack type and budget tier
// ============================================================

/** Frame weight formula: upright height * linear density */
function estimateFrameWeight(
  rackHeightMm: number,
  _depthMm: number
): number {
  const heightM = rackHeightMm / 1000;
  const linearDensity = heightM > 10 ? 6.0 : heightM > 7 ? 5.2 : 4.5;
  return Math.round(linearDensity * heightM * 2); // kg per frame (2 uprights)
}

/** Beam weight formula: beam length * weight per meter */
function estimateBeamWeight(
  beamLengthMm: number,
  loadPerPallet: number
): number {
  const lengthM = beamLengthMm / 1000;
  const weightPerMeter =
    loadPerPallet > 1500 ? 6.0 : loadPerPallet > 1000 ? 5.0 : 4.2;
  return Math.round(weightPerMeter * lengthM); // kg per beam (one side)
}

/** Wire mesh deck weight per panel */
function estimateDeckWeight(
  panelWidthMm: number,
  panelDepthMm: number
): number {
  const areaM2 = (panelWidthMm * panelDepthMm) / 1e6;
  return Math.round(areaM2 * 15);
}

/**
 * Generate complete Bill of Materials with weights and costs.
 * Accepts pre-calculated LayoutData to avoid duplicate computation.
 */
export function generateBOMFromLayout(
  input: PlannerInput,
  layout: LayoutData
): BOMItem[] {
  const { warehouse, rackType, rack, pallet, budget } = input;
  const budgetConfig = BUDGET_TIERS[budget];
  const costRef = COST_REFERENCE;

  // Calculate rack height
  const beamThickness = 120;
  const topClearance = 200;
  const rackHeight =
    pallet.height * rack.levels +
    beamThickness * (rack.levels + 1) +
    topClearance;

  // Beam length = pallet width * pallets per bay
  const beamLength = pallet.width * rack.palletsPerBay;

  const totalBays = layout.baysPerRow * layout.rackRows;
  const framePositions = totalBays + 1;

  // Beams per bay = levels * palletsPerBay
  const beamsPerBay = rack.levels * rack.palletsPerBay;
  const totalBeams = beamsPerBay * totalBays;

  // Deck panels per level per bay
  const deckPanelsPerBay = rack.palletsPerBay;
  const totalDecks = deckPanelsPerBay * totalBays * rack.levels;

  const deckWidth = pallet.width;
  const deckDepth = pallet.depth;

  const frameWeight = estimateFrameWeight(rackHeight, pallet.depth);
  const beamWeight = estimateBeamWeight(beamLength, pallet.loadPerPallet);
  const deckWeight = estimateDeckWeight(deckWidth, deckDepth);

  const steelCostPerKg = costRef.baseSteelPerKg * budgetConfig.multiplier;

  const frameCost = Math.round(frameWeight * steelCostPerKg * 100) / 100;
  const beamCost = Math.round(beamWeight * steelCostPerKg * 100) / 100;
  const deckAreaM2 = (deckWidth * deckDepth) / 1e6;
  const deckCost = Math.round(costRef.deckingPerM2 * deckAreaM2 * budgetConfig.multiplier * 100) / 100;

  const bom: BOMItem[] = [];

  // Upright Frames
  bom.push({
    description: `Upright Frame (H=${rackHeight}mm, D=${pallet.depth + 100}mm)`,
    unit: 'pcs',
    quantity: framePositions,
    unitWeight: frameWeight,
    totalWeight: frameWeight * framePositions,
    unitCost: frameCost,
    totalCost: Math.round(frameCost * framePositions * 100) / 100,
    category: 'frame',
  });

  // Beams
  bom.push({
    description: `Box Beam (L=${beamLength}mm)`,
    unit: 'pcs',
    quantity: totalBeams,
    unitWeight: beamWeight,
    totalWeight: beamWeight * totalBeams,
    unitCost: beamCost,
    totalCost: Math.round(beamCost * totalBeams * 100) / 100,
    category: 'beam',
  });

  // Wire Mesh Decks
  bom.push({
    description: `Wire Mesh Deck (${deckWidth}x${deckDepth}mm)`,
    unit: 'pcs',
    quantity: totalDecks,
    unitWeight: deckWeight,
    totalWeight: deckWeight * totalDecks,
    unitCost: deckCost,
    totalCost: Math.round(deckCost * totalDecks * 100) / 100,
    category: 'decking',
  });

  // Safety Accessories
  const safetyCostPerPos = costRef.safetyPerPosition * budgetConfig.multiplier;

  bom.push({
    description: 'Column Protectors & Frame Protectors',
    unit: 'set',
    quantity: framePositions,
    unitWeight: 8,
    totalWeight: 8 * framePositions,
    unitCost: Math.round(safetyCostPerPos * 5 * 100) / 100,
    totalCost: Math.round(safetyCostPerPos * 5 * framePositions * 100) / 100,
    category: 'safety',
  });

  bom.push({
    description: 'Row Spacers & Rack Clamps',
    unit: 'set',
    quantity: layout.rackRows * layout.baysPerRow,
    unitWeight: 2,
    totalWeight: 2 * layout.rackRows * layout.baysPerRow,
    unitCost: Math.round(safetyCostPerPos * 2 * 100) / 100,
    totalCost: Math.round(safetyCostPerPos * 2 * layout.rackRows * layout.baysPerRow * 100) / 100,
    category: 'safety',
  });

  // Drive-in specific items
  if (rackType === 'drive-in') {
    const palletsDeep = 6;
    const driveInRails = layout.rackRows * layout.baysPerRow * palletsDeep;
    bom.push({
      description: 'Drive-In Rail Profile (per meter)',
      unit: 'm',
      quantity: driveInRails,
      unitWeight: 12,
      totalWeight: 12 * driveInRails,
      unitCost: Math.round(12 * steelCostPerKg * 100) / 100,
      totalCost: Math.round(12 * steelCostPerKg * driveInRails * 100) / 100,
      category: 'accessory',
    });
    bom.push({
      description: 'Drive-In Rail Supports',
      unit: 'pcs',
      quantity: driveInRails * 2,
      unitWeight: 3,
      totalWeight: 3 * driveInRails * 2,
      unitCost: Math.round(3 * steelCostPerKg * 100) / 100,
      totalCost: Math.round(3 * steelCostPerKg * driveInRails * 2 * 100) / 100,
      category: 'accessory',
    });
  }

  // Radio shuttle specific items
  if (rackType === 'radio-shuttle') {
    const shuttleLanes = layout.rackRows;
    const laneLengthM = beamLength / 1000;
    bom.push({
      description: 'Radio Shuttle Rail (per meter)',
      unit: 'm',
      quantity: Math.round(shuttleLanes * layout.baysPerRow * laneLengthM),
      unitWeight: 15,
      totalWeight: Math.round(15 * shuttleLanes * layout.baysPerRow * laneLengthM),
      unitCost: Math.round(15 * steelCostPerKg * 100) / 100,
      totalCost: Math.round(15 * steelCostPerKg * shuttleLanes * layout.baysPerRow * laneLengthM * 100) / 100,
      category: 'accessory',
    });
    bom.push({
      description: 'Radio Shuttle Cart',
      unit: 'pcs',
      quantity: shuttleLanes,
      unitWeight: 350,
      totalWeight: 350 * shuttleLanes,
      unitCost: Math.round(3500 * budgetConfig.multiplier),
      totalCost: Math.round(3500 * budgetConfig.multiplier * shuttleLanes * 100) / 100,
      category: 'accessory',
    });
    bom.push({
      description: 'Shuttle Battery & Charger',
      unit: 'set',
      quantity: Math.ceil(shuttleLanes / 3),
      unitWeight: 25,
      totalWeight: 25 * Math.ceil(shuttleLanes / 3),
      unitCost: Math.round(450 * budgetConfig.multiplier),
      totalCost: Math.round(450 * budgetConfig.multiplier * Math.ceil(shuttleLanes / 3) * 100) / 100,
      category: 'accessory',
    });
  }

  return bom;
}

/**
 * Legacy API — calculates layout internally. Use generateBOMFromLayout when layout is available.
 */
export function generateBOM(input: PlannerInput): BOMItem[] {
  const layout = calculateLayout(input);
  return generateBOMFromLayout(input, layout);
}

/**
 * Calculate plan summary from pre-computed results. Avoids duplicate layout/BOM calculation.
 */
export function calculateSummaryFromResults(
  input: PlannerInput,
  layout: LayoutData,
  bom: BOMItem[]
): PlanSummary {
  const config = RACK_TYPES[input.rackType];

  const totalPalletPositions =
    layout.baysPerRow *
    input.rack.palletsPerBay *
    input.rack.levels *
    layout.rackRows;

  const totalCapacity = totalPalletPositions * input.pallet.loadPerPallet;

  const totalCost = bom.reduce((sum, item) => sum + item.totalCost, 0);
  const costPerPosition =
    totalPalletPositions > 0 ? totalCost / totalPalletPositions : 0;

  return {
    totalPalletPositions,
    totalStorageCapacity: totalCapacity,
    warehouseArea: layout.warehouseArea,
    rackingArea: layout.rackingArea,
    spaceUtilization: layout.utilization,
    estimatedTotalCost: Math.round(totalCost * 100) / 100,
    costPerPalletPosition: Math.round(costPerPosition * 100) / 100,
    rackSystem: config.name,
    rackType: input.rackType,
  };
}

/**
 * Legacy API — for backward compatibility.
 */
export function calculateSummary(input: PlannerInput): PlanSummary {
  const layout = calculateLayout(input);
  const bom = generateBOMFromLayout(input, layout);
  return calculateSummaryFromResults(input, layout, bom);
}
