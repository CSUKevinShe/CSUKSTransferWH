'use client';

import { useEffect } from 'react';
import { ParamPanel } from './ParamPanel';
import { LayoutCanvas } from './LayoutCanvas';
import { ResultSummary } from './ResultSummary';
import { BOMTable } from './BOMTable';
import { CTASection } from './CTASection';
import { usePlannerStore } from '@/lib/store/usePlannerStore';
import { AlertTriangle } from 'lucide-react';

export function PlannerShell() {
  const calculate = usePlannerStore((s) => s.calculate);
  const layout = usePlannerStore((s) => s.layout);
  const error = usePlannerStore((s) => s.error);

  // Initial calculation on mount
  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Panel: Parameters */}
      <ParamPanel />

      {/* Right Panel: Results */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Error display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-700">Calculation Error</p>
              <p className="text-sm text-red-600 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Loading state */}
        {!layout && !error && (
          <div className="flex items-center justify-center h-64 bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-accent-600 border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="text-sm text-slate-500">Calculating layout...</p>
            </div>
          </div>
        )}

        {/* Results */}
        {layout && (
          <>
            <LayoutCanvas />
            <ResultSummary />
            <BOMTable />
            <CTASection />
          </>
        )}
      </div>
    </div>
  );
}
