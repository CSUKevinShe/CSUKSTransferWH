'use client';

import { useState } from 'react';
import { usePlannerStore } from '@/lib/store/usePlannerStore';
import { formatNumber, formatCurrency, formatArea, formatWeight } from '@/lib/utils';
import { Package, DollarSign, LayoutGrid, TrendingUp, Layers, Percent, ShieldAlert, ChevronDown } from 'lucide-react';

export function ResultSummary() {
  const { summary } = usePlannerStore();
  const [showSafetyNote, setShowSafetyNote] = useState(false);

  if (!summary) {
    return null;
  }

  const metrics = [
    {
      icon: Package,
      label: 'Pallet Positions',
      value: formatNumber(summary.totalPalletPositions),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: DollarSign,
      label: 'Est. Total Cost',
      value: formatCurrency(summary.estimatedTotalCost),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: DollarSign,
      label: 'Cost per Position',
      value: formatCurrency(summary.costPerPalletPosition),
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: LayoutGrid,
      label: 'Warehouse Area',
      value: formatArea(summary.warehouseArea),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Layers,
      label: 'Racking Area',
      value: formatArea(summary.rackingArea),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: TrendingUp,
      label: 'Space Utilization',
      value: `${summary.spaceUtilization}%`,
      color: summary.spaceUtilization > 50 ? 'text-green-600' : 'text-amber-600',
      bgColor: summary.spaceUtilization > 50 ? 'bg-green-50' : 'bg-amber-50',
    },
    {
      icon: Package,
      label: 'Total Capacity',
      value: formatWeight(summary.totalStorageCapacity),
      color: 'text-slate-600',
      bgColor: 'bg-slate-50',
    },
    {
      icon: Percent,
      label: 'Rack System',
      value: summary.rackSystem.replace(/^(Heavy-Duty |Drive-In\/Drive-Through |Radio Shuttle )/, ''),
      color: 'text-slate-600',
      bgColor: 'bg-slate-50',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <h3 className="text-sm font-semibold text-slate-700">
          Plan Summary
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          {summary.rackSystem}
        </p>
      </div>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/50"
          >
            <div className={`w-8 h-8 rounded-lg ${m.bgColor} flex items-center justify-center shrink-0`}>
              <m.icon className={`w-4 h-4 ${m.color}`} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-400 font-medium">{m.label}</p>
              <p className="text-sm font-bold text-slate-800 truncate">{m.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Compliance Hook */}
      <div className="border-t border-slate-100">
        <button
          type="button"
          onClick={() => setShowSafetyNote(!showSafetyNote)}
          className="w-full px-4 py-3 flex items-center gap-2 hover:bg-amber-50/50 transition-colors"
        >
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="text-xs font-semibold text-amber-700 flex-1 text-left">
            Structural Safety Compliance Notice
          </span>
          <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform ${showSafetyNote ? 'rotate-180' : ''}`} />
        </button>
        {showSafetyNote && (
          <div className="px-4 pb-4 animate-fade-in">
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-xs text-amber-800 leading-relaxed mb-3">
                <strong>Important:</strong> Upright frame thickness, beam loading capacity, and connection details must strictly comply with{' '}
                <strong>FEM 10.2.02</strong> (Europe) or <strong>ANSI/RMI MH16.1</strong> (North America) based on your actual total load conditions. Incorrect specification may lead to structural failure.
              </p>
              <p className="text-xs text-amber-700 mb-3">
                This planner provides estimates for planning purposes only. A certified structural engineer must verify all load-bearing calculations before procurement and installation.
              </p>
              <a
                href="/contact/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Get a Certified Engineer Review — Free
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
