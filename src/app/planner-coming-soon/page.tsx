import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, ArrowRight, Clock, Shield, Lock, Wrench } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Warehouse Planner — Coming Soon',
  description:
    'A free, browser-based warehouse racking planner with instant 2D layout diagrams, cost estimates, and bill of materials. Currently in development.',
  alternates: {
    canonical: 'https://rackinghub.com/planner-coming-soon/',
  },
};

export default function PlannerComingSoonPage() {
  return (
    <div className="container-main section-padding">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Breadcrumbs items={[{ label: 'Planner' }]} />
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Warehouse Planner
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Free layout planner, cost estimator, and BOM generator.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="relative overflow-hidden bg-primary-950 rounded-2xl p-8 sm:p-12 text-center mb-10">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-accent-500/20 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-8 h-8 text-accent-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Coming Soon
            </h2>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-8">
              We are building a free, browser-based warehouse racking planner
              with instant 2D layout diagrams, cost estimates, and a complete
              bill of materials. No registration required.
            </p>

            {/* Features preview */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
              {[
                { icon: Clock, label: 'Instant Results' },
                { icon: Shield, label: 'FEM 10.2.02 Compliant' },
                { icon: Lock, label: '100% Private' },
                { icon: Mail, label: 'Email Export' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 text-xs text-slate-400"
                >
                  <feature.icon className="w-4 h-4 text-accent-400 shrink-0" />
                  {feature.label}
                </div>
              ))}
            </div>

            {/* Notify form */}
            <form
              action="https://formspree.io/f/xeerarqy"
              method="POST"
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="hidden"
                name="_subject"
                value="[RackingHub] Planner Launch Notification Request"
              />
              <input
                type="hidden"
                name="_gotcha"
                defaultValue=""
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Notify Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[11px] text-slate-500 mt-3">
              We will send one email when the planner is ready. No spam.
            </p>
          </div>
        </div>

        {/* Supported systems preview */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-10">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Planned Racking Types
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: 'Selective Racking',
                desc: '100% pallet access, high SKU flexibility',
              },
              {
                name: 'Drive-In Racking',
                desc: 'High-density, up to 80% space utilization',
              },
              {
                name: 'Radio Shuttle',
                desc: 'Semi-automated, FIFO/LIFO capable',
              },
            ].map((system) => (
              <div
                key={system.name}
                className="p-3 bg-white rounded-lg border border-slate-200"
              >
                <div className="text-xs font-semibold text-slate-800 mb-1">
                  {system.name}
                </div>
                <div className="text-[11px] text-slate-500">{system.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Meanwhile links */}
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-4">
            In the meantime, explore our resources and expert guides.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/resources/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-950 hover:bg-primary-900 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Browse Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/learn/"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 text-sm font-semibold rounded-lg transition-colors"
            >
              Knowledge Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
