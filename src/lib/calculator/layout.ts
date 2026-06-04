import type {
  PlannerInput,
  LayoutData,
  LayoutElement,
} from './types';
import { RACK_TYPES, CONSTRAINTS } from './config';

// ============================================================
// Layout Calculation Engine
// Pure functions — no side effects, no DOM dependency
// ============================================================

/**
 * Calculate the complete warehouse layout for the given input parameters.
 * Works for all three rack types: selective, drive-in, radio-shuttle.
 */
export function calculateLayout(input: PlannerInput): LayoutData {
  const { warehouse, rackType, rack, pallet } = input;
  const config = RACK_TYPES[rackType];

  // Effective racking area (subtract wall clearances)
  const effectiveWidth = warehouse.width - 2 * warehouse.wallClearance;
  const effectiveLength = warehouse.length - 2 * warehouse.wallClearance;

  // Frame depth = pallet depth + small clearance
  const frameDepth = pallet.depth + 100;

  // Bay width = pallet width * pallets per bay
  const bayWidth = pallet.width * rack.palletsPerBay;

  // Total rack height = pallet height * levels + beam thickness * (levels+1) + top clearance
  const beamThickness = 120;
  const topClearance = 200;
  const totalRackHeight =
    pallet.height * rack.levels +
    beamThickness * (rack.levels + 1) +
    topClearance;

  // Validate height
  const actualLevels = totalRackHeight > warehouse.height
    ? Math.max(
        1,
        Math.floor(
          (warehouse.height - topClearance - beamThickness) /
            (pallet.height + beamThickness)
        )
      )
    : rack.levels;

  const actualRackHeight =
    pallet.height * actualLevels +
    beamThickness * (actualLevels + 1) +
    topClearance;

  // Layout calculation varies by rack type
  let layoutResult: {
    rackRows: number;
    aisles: number;
    rackBlocks: number;
    baysPerRow: number;
  };

  if (rackType === 'selective') {
    layoutResult = calculateSelectiveLayout(
      effectiveLength,
      effectiveWidth,
      bayWidth,
      frameDepth,
      rack.aisleWidth,
      warehouse.columnSpacing
    );
  } else if (rackType === 'drive-in') {
    layoutResult = calculateDriveInLayout(
      effectiveLength,
      effectiveWidth,
      bayWidth,
      frameDepth,
      rack.aisleWidth
    );
  } else {
    layoutResult = calculateRadioShuttleLayout(
      effectiveLength,
      effectiveWidth,
      bayWidth,
      frameDepth,
      rack.aisleWidth
    );
  }

  // Generate 2D layout elements
  const elements = generateLayoutElements(
    effectiveLength,
    effectiveWidth,
    bayWidth,
    frameDepth,
    rack.aisleWidth,
    layoutResult,
    rackType
  );

  // Calculate areas
  const warehouseArea = (warehouse.length * warehouse.width) / 1e6; // m2
  const rackingArea =
    (layoutResult.baysPerRow * bayWidth * layoutResult.rackRows * frameDepth) /
    1e6; // m2
  const utilization = warehouseArea > 0 ? (rackingArea / warehouseArea) * 100 : 0;

  return {
    elements,
    warehouseLength: warehouse.length,
    warehouseWidth: warehouse.width,
    rackRows: layoutResult.rackRows,
    aisles: layoutResult.aisles,
    baysPerRow: layoutResult.baysPerRow,
    rackBlocks: layoutResult.rackBlocks,
    rackingArea: Math.round(rackingArea),
    warehouseArea: Math.round(warehouseArea),
    utilization: Math.round(utilization * 10) / 10,
  };
}

/**
 * Selective racking layout: double rack rows with aisles between blocks.
 * Pattern: [wall gap] [single row] [aisle] [block: row-aisle-row-aisle-...] [wall gap]
 */
function calculateSelectiveLayout(
  effectiveLength: number,
  effectiveWidth: number,
  bayWidth: number,
  frameDepth: number,
  aisleWidth: number,
  columnSpacing: number
) {
  // Width-wise: how many double rack rows + aisles fit
  // One double block = 2 * frameDepth + aisleWidth
  const doubleBlockWidth = 2 * frameDepth + aisleWidth;

  // Try to fit complete double blocks
  let rackBlocks = 0;
  let remainingWidth = effectiveWidth;

  // Start with a single row at the wall, then double blocks
  if (frameDepth < remainingWidth) {
    remainingWidth -= frameDepth;
  }

  while (remainingWidth >= doubleBlockWidth) {
    rackBlocks++;
    remainingWidth -= doubleBlockWidth;
  }

  // End with another single row if space allows
  const endRow = remainingWidth >= frameDepth ? 1 : 0;

  // Total rows = start row + 2 per block + end row
  const rackRows = 1 + 2 * rackBlocks + endRow;
  const aisles = rackBlocks + (endRow > 0 ? 1 : 0);

  // Length-wise: how many bays fit
  const baysPerRow = Math.max(
    1,
    Math.floor(effectiveLength / bayWidth)
  );

  return { rackRows, aisles, rackBlocks, baysPerRow };
}

/**
 * Drive-in racking layout: deep lanes grouped into blocks with service aisles.
 */
function calculateDriveInLayout(
  effectiveLength: number,
  effectiveWidth: number,
  bayWidth: number,
  frameDepth: number,
  serviceAisleWidth: number
) {
  // Drive-in lanes run along the width
  // Each lane depth = pallet depth (typically 4-12 pallets deep)
  // Use a default 6 pallets deep for drive-in
  const laneDepth = 1200 * 6; // 6 pallets deep ≈ 7200mm

  // How many lanes can fit length-wise
  const laneWidth = bayWidth; // each lane width = bay width
  const lanesPerBlock = Math.max(1, Math.floor(laneDepth / laneWidth));

  // Width-wise: blocks of double-entry lanes separated by service aisles
  const entryAisleWidth = 2700; // wider forklift turning
  const frameSetWidth = frameDepth * 2 + entryAisleWidth;

  let rackBlocks = 0;
  let remainingWidth = effectiveWidth;
  if (frameSetWidth < remainingWidth) {
    remainingWidth -= frameDepth;
  }
  while (remainingWidth >= frameSetWidth) {
    rackBlocks++;
    remainingWidth -= frameSetWidth;
  }

  const rackRows = rackBlocks * 2 + (remainingWidth >= frameDepth ? 1 : 0);
  const aisles = rackBlocks;

  // Bays per row (along length)
  const baysPerRow = Math.max(1, Math.floor(effectiveLength / bayWidth));

  return { rackRows, aisles, rackBlocks, baysPerRow };
}

/**
 * Radio shuttle racking layout: similar to drive-in but with shuttle lanes.
 */
function calculateRadioShuttleLayout(
  effectiveLength: number,
  effectiveWidth: number,
  bayWidth: number,
  frameDepth: number,
  serviceAisleWidth: number
) {
  // Radio shuttle lanes are typically 10-40 pallets deep
  const laneDepth = 1200 * 8; // 8 pallets deep ≈ 9600mm
  const laneWidth = bayWidth;

  // Width-wise: shuttle blocks with service aisles
  const blockWidth = frameDepth * 2 + serviceAisleWidth;

  let rackBlocks = 0;
  let remainingWidth = effectiveWidth;
  if (frameDepth < remainingWidth) {
    remainingWidth -= frameDepth;
  }
  while (remainingWidth >= blockWidth) {
    rackBlocks++;
    remainingWidth -= blockWidth;
  }

  const rackRows = rackBlocks * 2 + (remainingWidth >= frameDepth ? 1 : 0);
  const aisles = rackBlocks;

  // Bays per row
  const baysPerRow = Math.max(1, Math.floor(effectiveLength / bayWidth));

  return { rackRows, aisles, rackBlocks, baysPerRow };
}

/**
 * Generate 2D SVG layout elements (top-down view).
 */
function generateLayoutElements(
  effectiveLength: number,
  effectiveWidth: number,
  bayWidth: number,
  frameDepth: number,
  aisleWidth: number,
  layout: { rackRows: number; aisles: number; rackBlocks: number; baysPerRow: number },
  rackType: string
): LayoutElement[] {
  const elements: LayoutElement[] = [];
  const startX = 0;
  const startY = 0;

  // Warehouse outline
  elements.push({
    type: 'wall',
    x: startX,
    y: startY,
    width: effectiveLength,
    height: effectiveWidth,
    label: 'Warehouse',
    color: '#e2e8f0',
  });

  let currentY = startY;

  // Layout rows along the Y-axis (width direction)
  // Pattern for selective: row | aisle | row-aisle-row-aisle... | row

  let rowIndex = 0;
  const doubleBlockWidth = 2 * frameDepth + aisleWidth;

  // First single row
  elements.push({
    type: 'rack-row',
    x: startX + bayWidth * 0.5,
    y: currentY,
    width: layout.baysPerRow * bayWidth,
    height: frameDepth,
    label: `Row ${rowIndex + 1}`,
    color: rackType === 'drive-in' ? '#fbbf24' : rackType === 'radio-shuttle' ? '#a78bfa' : '#3b82f6',
  });
  currentY += frameDepth;
  rowIndex++;

  // Double blocks
  for (let block = 0; block < layout.rackBlocks; block++) {
    // First row of double block
    elements.push({
      type: 'rack-row',
      x: startX + bayWidth * 0.5,
      y: currentY,
      width: layout.baysPerRow * bayWidth,
      height: frameDepth,
      label: `Row ${rowIndex + 1}`,
      color: rackType === 'drive-in' ? '#fbbf24' : rackType === 'radio-shuttle' ? '#a78bfa' : '#3b82f6',
    });
    currentY += frameDepth;
    rowIndex++;

    // Aisle
    elements.push({
      type: 'aisle',
      x: startX,
      y: currentY,
      width: effectiveLength,
      height: aisleWidth,
      label: `${(aisleWidth / 1000).toFixed(1)}m aisle`,
      color: '#f1f5f9',
    });
    currentY += aisleWidth;

    // Second row of double block
    elements.push({
      type: 'rack-row',
      x: startX + bayWidth * 0.5,
      y: currentY,
      width: layout.baysPerRow * bayWidth,
      height: frameDepth,
      label: `Row ${rowIndex + 1}`,
      color: rackType === 'drive-in' ? '#fbbf24' : rackType === 'radio-shuttle' ? '#a78bfa' : '#3b82f6',
    });
    currentY += frameDepth;
    rowIndex++;
  }

  // End aisle (if there's a last row)
  if (rackType === 'selective' && effectiveWidth - currentY >= frameDepth) {
    elements.push({
      type: 'aisle',
      x: startX,
      y: currentY,
      width: effectiveLength,
      height: Math.min(aisleWidth, effectiveWidth - currentY - frameDepth),
      label: `${(aisleWidth / 1000).toFixed(1)}m aisle`,
      color: '#f1f5f9',
    });
    currentY += aisleWidth;

    elements.push({
      type: 'rack-row',
      x: startX + bayWidth * 0.5,
      y: currentY,
      width: layout.baysPerRow * bayWidth,
      height: frameDepth,
      label: `Row ${rowIndex + 1}`,
      color: '#3b82f6',
    });
  }

  return elements;
}
