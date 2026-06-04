import { create } from 'zustand';
import type {
  WarehouseParams,
  RackParams,
  PalletParams,
  RackType,
  BudgetTier,
  PlanSummary,
  BOMItem,
  LayoutData,
  PlannerInput,
} from '@/lib/calculator/types';
import {
  DEFAULT_WAREHOUSE,
  DEFAULT_RACK,
  DEFAULT_PALLET,
  RACK_TYPES,
} from '@/lib/calculator/config';
import { calculateLayout } from '@/lib/calculator/layout';
import { generateBOMFromLayout, calculateSummaryFromResults } from '@/lib/calculator/costing';

// Debounce utility
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
function debounce(fn: () => void, ms: number) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(fn, ms);
}

interface PlannerState {
  // Input
  warehouse: WarehouseParams;
  rackType: RackType;
  rack: RackParams;
  pallet: PalletParams;
  budget: BudgetTier;

  // Output
  summary: PlanSummary | null;
  bom: BOMItem[];
  layout: LayoutData | null;

  // Actions
  setWarehouse: (partial: Partial<WarehouseParams>) => void;
  setRackType: (type: RackType) => void;
  setRack: (partial: Partial<RackParams>) => void;
  setPallet: (partial: Partial<PalletParams>) => void;
  setBudget: (tier: BudgetTier) => void;
  calculate: () => void;
  error: string | null;
  reset: () => void;
}

export const usePlannerStore = create<PlannerState>((set, get) => ({
  // Initial state
  warehouse: { ...DEFAULT_WAREHOUSE },
  rackType: 'selective',
  rack: { ...DEFAULT_RACK },
  pallet: { ...DEFAULT_PALLET },
  budget: 'standard',

  // Output
  summary: null,
  bom: [],
  layout: null,
  error: null,

  // Actions — rackType change is instant (no debounce), other params debounced
  setWarehouse: (partial) => {
    set((state) => ({
      warehouse: { ...state.warehouse, ...partial },
      error: null,
    }));
    debounce(() => get().calculate(), 120);
  },

  setRackType: (type) => {
    const config = RACK_TYPES[type];
    set((state) => ({
      rackType: type,
      rack: { ...state.rack, aisleWidth: config.defaultAisleWidth },
      error: null,
    }));
    get().calculate(); // immediate — rack type switch is a deliberate action
  },

  setRack: (partial) => {
    set((state) => ({
      rack: { ...state.rack, ...partial },
      error: null,
    }));
    debounce(() => get().calculate(), 120);
  },

  setPallet: (partial) => {
    set((state) => ({
      pallet: { ...state.pallet, ...partial },
      error: null,
    }));
    debounce(() => get().calculate(), 120);
  },

  setBudget: (tier) => {
    set({ budget: tier, error: null });
    get().calculate(); // immediate
  },

  calculate: () => {
    const state = get();
    try {
      const input: PlannerInput = {
        warehouse: state.warehouse,
        rackType: state.rackType,
        rack: state.rack,
        pallet: state.pallet,
        budget: state.budget,
      };

      // Calculate layout ONCE
      const layout = calculateLayout(input);

      // Pass layout to costing (avoids duplicate calculation)
      const bom = generateBOMFromLayout(input, layout);

      // Calculate summary from existing results
      const summary = calculateSummaryFromResults(input, layout, bom);

      set({ layout, summary, bom, error: null });
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error('Calculation error:', error);
      set({ error: msg, summary: null, bom: [], layout: null });
    }
  },

  reset: () => {
    set({
      warehouse: { ...DEFAULT_WAREHOUSE },
      rackType: 'selective',
      rack: { ...DEFAULT_RACK },
      pallet: { ...DEFAULT_PALLET },
      budget: 'standard',
      summary: null,
      bom: [],
      layout: null,
      error: null,
    });
    // Recalculate with defaults immediately
    setTimeout(() => get().calculate(), 0);
  },
}));
