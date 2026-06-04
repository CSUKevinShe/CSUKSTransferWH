'use client';

import { useState } from 'react';
import { ChevronDown, Download, Lock, Send, Check } from 'lucide-react';
import { usePlannerStore } from '@/lib/store/usePlannerStore';
import { formatNumber, formatCurrency, formatWeight, cn } from '@/lib/utils';

export function BOMTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { bom } = usePlannerStore();

  if (bom.length === 0) return null;

  const totalWeight = bom.reduce((sum, item) => sum + item.totalWeight, 0);
  const totalCost = bom.reduce((sum, item) => sum + item.totalCost, 0);

  // Group by category
  const categories = [...new Set(bom.map((item) => item.category))];

  const handleQuoteRequest = () => {
    if (!email.trim()) return;
    // In production: Formspree submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Toggle Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-slate-700">
            Bill of Materials (BOM)
          </h3>
          <span className="text-xs text-slate-400">
            {bom.length} items | {formatWeight(totalWeight)}
            {showPricing && ` | ${formatCurrency(totalCost)}`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isOpen && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                // Export CSV
                const csv = [
                  'Description,Unit,Qty,Unit Weight (kg),Total Weight (kg),Unit Cost (USD),Total Cost (USD),Category',
                  ...bom.map(
                    (item) =>
                      `"${item.description}",${item.unit},${item.quantity},${item.unitWeight},${item.totalWeight},${item.unitCost},${item.totalCost},${item.category}`
                  ),
                  `"TOTAL",,${bom.reduce((s, i) => s + i.quantity, 0)},,${totalWeight},,${totalCost},`,
                ].join('\n');
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'rackinghub-bom.csv';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            >
              <Download className="w-3 h-3" />
              CSV
            </button>
          )}
          <ChevronDown
            className={cn(
              'w-4 h-4 text-slate-400 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </div>
      </button>

      {/* Pricing Unlock Banner */}
      {isOpen && !showPricing && (
        <div className="border-t border-slate-100 p-4 bg-gradient-to-r from-accent-50 to-amber-50">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900">
                Unlock Factory-Direct Pricing
              </h4>
              <p className="text-xs text-slate-600 mt-1 mb-3">
                Get the complete material spec sheet with <strong>direct-from-factory EXW/FOB pricing</strong> from our certified manufacturing partner. Includes per-unit cost breakdown and total project estimate — delivered as an Excel quotation within 24 hours.
              </p>
              {submitted ? (
                <div className="flex items-center gap-2 p-2.5 bg-green-50 rounded-lg">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-700 font-medium">
                    Quote request sent! Check your email within 24 hours.
                  </span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleQuoteRequest()}
                    className="flex-1 h-9 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleQuoteRequest}
                    className="h-9 px-4 bg-accent-500 hover:bg-accent-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Send className="w-3 h-3" />
                    Get Quote
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={() => setShowPricing(true)}
                className="mt-2 text-[11px] text-slate-400 hover:text-slate-600 underline transition-colors"
              >
                Show estimated costs (for planning only)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOM Table (collapsible) */}
      {isOpen && (
        <div className="border-t border-slate-100 overflow-x-auto animate-fade-in">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                  Qty
                </th>
                <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                  Unit Wt.
                </th>
                <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                  Total Wt.
                </th>
                {showPricing && (
                  <>
                    <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                      Unit Cost
                    </th>
                    <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                      Total Cost
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bom.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-2.5">
                    <div className="font-medium text-slate-700 text-xs">
                      {item.description}
                    </div>
                    <div className="text-[10px] text-slate-400 capitalize">
                      {item.category}
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-xs text-slate-600">
                    {formatNumber(item.quantity)}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-xs text-slate-600">
                    {formatWeight(item.unitWeight)}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-xs font-semibold text-slate-700">
                    {formatWeight(item.totalWeight)}
                  </td>
                  {showPricing && (
                    <>
                      <td className="px-4 py-2.5 text-right font-mono text-xs text-slate-600">
                        {formatCurrency(item.unitCost)}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-xs font-semibold text-slate-700">
                        {formatCurrency(item.totalCost)}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50 border-t-2 border-slate-200">
                <td className="px-4 py-2.5 font-bold text-xs text-slate-700">
                  TOTAL
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-xs font-bold text-slate-700">
                  {formatNumber(bom.reduce((s, i) => s + i.quantity, 0))}
                </td>
                <td className="px-4 py-2.5"></td>
                <td className="px-4 py-2.5 text-right font-mono text-xs font-bold text-slate-700">
                  {formatWeight(totalWeight)}
                </td>
                {showPricing && (
                  <>
                    <td className="px-4 py-2.5"></td>
                    <td className="px-4 py-2.5 text-right font-mono text-xs font-bold text-green-700">
                      {formatCurrency(totalCost)}
                    </td>
                  </>
                )}
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
