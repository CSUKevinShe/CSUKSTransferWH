'use client';

import { useState } from 'react';
import { ChevronDown, RotateCcw, SlidersHorizontal, X, Lock, MessageSquare } from 'lucide-react';
import { usePlannerStore } from '@/lib/store/usePlannerStore';
import { WarehouseSettings } from './WarehouseSettings';
import { RackSettings } from './RackSettings';
import { PalletSettings } from './PalletSettings';
import { RACK_TYPES } from '@/lib/calculator/config';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Section({ title, children, defaultOpen = true }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-slate-400 transition-transform',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && <div className="p-4 space-y-4">{children}</div>}
    </div>
  );
}

export function ParamPanel() {
  const { rackType, reset } = usePlannerStore();
  const config = RACK_TYPES[rackType];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const panelContent = (
    <div className="space-y-3">
      {/* Rack Type Selector */}
      <div className="bg-primary-950 rounded-lg p-4 text-white">
        <p className="text-xs font-medium text-slate-300 uppercase tracking-wider mb-3">
          Racking System
        </p>
        <RackTypeSelector />
      </div>

      {/* Collapsible Sections */}
      <Section title="Warehouse Dimensions">
        <WarehouseSettings />
      </Section>

      <Section title="Rack Configuration">
        <RackSettings />
      </Section>

      <Section title="Pallet Specifications">
        <PalletSettings />
      </Section>

      {/* Reset Button */}
      <button
        type="button"
        onClick={reset}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Reset to Defaults
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop: always-visible sidebar */}
      <div className="hidden lg:block w-full lg:w-[380px] shrink-0">
        {panelContent}
      </div>

      {/* Mobile: floating trigger button */}
      <button
        type="button"
        onClick={() => setDrawerOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-3 bg-primary-950 text-white rounded-full shadow-xl shadow-primary-950/30 hover:bg-primary-900 transition-colors text-sm font-semibold"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Configure
      </button>

      {/* Mobile: slide-in drawer overlay */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 animate-fade-in"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer panel */}
          <div className="relative ml-auto w-[90vw] max-w-[400px] h-full bg-white shadow-2xl overflow-y-auto animate-slide-in-right">
            {/* Drawer header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
              <span className="text-sm font-bold text-slate-900">Planner Settings</span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close settings"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer content */}
            <div className="p-4">
              {panelContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function RackTypeSelector() {
  const { rackType, setRackType } = usePlannerStore();
  const [showPopup, setShowPopup] = useState<string | null>(null);

  const comingSoonTypes = [
    {
      id: 'radio-shuttle',
      name: 'Radio Shuttle Racking',
      status: 'Beta Testing',
      hook: 'Our automated planner for high-density shuttle storage is currently in beta. Our engineering team can manually design your 3D Radio Shuttle layout for FREE within 24 hours.',
    },
    {
      id: 'drive-in',
      name: 'Drive-In Racking',
      status: 'Coming Soon',
      hook: 'Our automated Drive-In/Drive-Through planner is under development. Need a layout now? Our engineers will design your high-density drive-in system for FREE within 24 hours.',
    },
    {
      id: 'mezzanine',
      name: 'Mezzanine Floors',
      status: 'Coming Soon',
      hook: 'Our automated mezzanine planning tool is coming soon. Need a structural layout now? Get a FREE engineering assessment and 3D design within 48 hours.',
    },
  ];

  return (
    <div className="space-y-2">
      {Object.values(RACK_TYPES).filter(rt => rt.id === 'selective').map((rt) => (
        <button
          key={rt.id}
          type="button"
          onClick={() => setRackType(rt.id)}
          className={cn(
            'w-full text-left p-3 rounded-lg transition-all',
            rackType === rt.id
              ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/20'
              : 'bg-white/10 text-slate-300 hover:bg-white/15'
          )}
        >
          <div className="text-sm font-semibold">{rt.name}</div>
          <div
            className={cn(
              'text-xs mt-1',
              rackType === rt.id ? 'text-white/80' : 'text-slate-400'
            )}
          >
            {rt.bestFor}
          </div>
        </button>
      ))}

      {/* Divider */}
      <div className="border-t border-white/10 my-2" />

      {/* Coming Soon Types */}
      {comingSoonTypes.map((ct) => (
        <button
          key={ct.id}
          type="button"
          onClick={() => setShowPopup(ct.id)}
          className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/10 opacity-60 hover:opacity-90 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-400">{ct.name}</div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-medium bg-amber-500/20 text-amber-300">
              <Lock className="w-2.5 h-2.5" />
              {ct.status}
            </div>
          </div>
        </button>
      ))}

      {/* Popup Modal for Coming Soon Types */}
      {showPopup && (() => {
        const ct = comingSoonTypes.find(c => c.id === showPopup);
        if (!ct) return null;
        return (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowPopup(null)} />
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-[90vw] p-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{ct.name} — Manual Design</h3>
                  <p className="text-xs text-slate-500">Free engineering service</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">{ct.hook}</p>
              <div className="flex gap-2">
                <a
                  href="/contact/"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Upload CAD / Request Design
                </a>
                <button
                  type="button"
                  onClick={() => setShowPopup(null)}
                  className="px-4 py-2.5 text-sm text-slate-500 hover:text-slate-700 border border-slate-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
