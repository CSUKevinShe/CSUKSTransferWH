import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  BookOpen,
  ExternalLink,
  LayoutGrid,
  ChevronRight,
  Zap,
  Shield,
  Globe,
  Monitor,
  MousePointerClick,
  FileDown,
  Lock,
  Warehouse,
  Grid3X3,
  CheckCircle,
  Truck,
  Building2,
  Package,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  description:
    'Warehouse racking systems and storage solutions: selective pallet rack, drive-in, radio shuttle, cantilever, wire mesh deck, and metal pallet. Free pallet racking planner tool, warehouse layout calculator, FEM/EN standards, and expert consultation.',
};

const valueCards = [
  {
    icon: Calculator,
    title: 'Smart Planner',
    description:
      'Free interactive warehouse planner with instant layout diagrams, cost estimates, and BOM. No registration required.',
    href: '/planner/',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: ExternalLink,
    title: 'Industry Resources',
    description:
      'Curated directory of standards (FEM, EN, ISO), manufacturers, and tools. Verified and vetted by industry professionals.',
    href: '/resources/',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Center',
    description:
      'In-depth guides on racking standards, system selection, safety compliance, and warehouse optimization strategies.',
    href: '/learn/',
    color: 'bg-purple-50 text-purple-600',
  },
];

const howItWorksSteps = [
  {
    icon: Monitor,
    title: 'Set Your Warehouse Dimensions',
    description:
      'Enter building length, width, clear height, and wall clearance. Choose from common pallet presets (EUR, US) or enter custom sizes.',
  },
  {
    icon: MousePointerClick,
    title: 'Configure Your Racking System',
    description:
      'Configure levels, pallets per bay, aisle width, and budget tier for your selective pallet racking system.',
  },
  {
    icon: LayoutGrid,
    title: 'Get Instant Layout & Results',
    description:
      'View real-time 2D layout diagrams with row/aisle labels, complete bill of materials, and cost estimates — all calculated in your browser.',
  },
  {
    icon: FileDown,
    title: 'Export or Get Expert Review',
    description:
      'Email the plan to yourself, save it locally, or request an expert review for a professional engineering assessment.',
  },
];

const rackingSystems = [
  {
    icon: Grid3X3,
    name: 'Selective Pallet Racking',
    description:
      'The most common system. Every pallet directly accessible. Ideal for high-SKU warehouses with varied inventory.',
    features: ['100% pallet accessibility', 'Flexible configuration', 'All forklift types'],
    color: 'bg-blue-50 text-blue-600',
    utilization: '30–45%',
    href: '/planner/',
  },
  {
    icon: Warehouse,
    name: 'Drive-In Racking',
    description:
      'High-density storage where forklifts drive into rack lanes. Eliminates aisles for maximum space utilization.',
    features: ['Up to 80% space utilization', 'Lowest cost per pallet', 'Bulk storage ideal'],
    color: 'bg-amber-50 text-amber-600',
    utilization: '65–80%',
    href: '/planner/',
  },
  {
    icon: Zap,
    name: 'Radio Shuttle Racking',
    description:
      'Semi-automated high-density system using shuttle carts on rails. Combines density with improved throughput.',
    features: ['FIFO or LIFO capable', 'Faster than drive-in', 'Reduced forklift damage'],
    color: 'bg-green-50 text-green-600',
    utilization: '60–75%',
    href: '/planner/',
  },
];

const trustStats = [
  { value: '15+', label: 'Years of Industry Experience', icon: Clock },
  { value: 'FEM / EN / ISO', label: 'Calculation Standards', icon: Shield },
  { value: '60+', label: 'Countries Served Worldwide', icon: Globe },
  { value: '50+', label: 'Containers Shipped Annually', icon: Truck },
];

const latestArticles = [
  {
    slug: 'overview-warehouse-racking-standards',
    title: 'Overview of Warehouse Racking Standards: FEM, EN, ISO',
    description:
      'A comprehensive guide to the major international standards governing warehouse racking design.',
    date: '2025-06-17',
    category: 'Standards',
    readTime: 12,
  },
  {
    slug: 'selective-racking-complete-guide',
    title: 'Selective Pallet Racking: A Complete Planning Guide',
    description:
      'Everything you need to know about selective racking from basic configuration to advanced layout optimization.',
    date: '2025-06-17',
    category: 'Planning',
    readTime: 15,
  },
  {
    slug: 'drive-in-vs-shuttle-comparison',
    title: 'Drive-In vs. Radio Shuttle: Which High-Density System?',
    description:
      'Side-by-side comparison of drive-in and radio shuttle racking across density, throughput, cost, and flexibility.',
    date: '2025-06-17',
    category: 'Comparison',
    readTime: 10,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container-main section-padding">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium mb-6">
              <Zap className="w-3.5 h-3.5" />
              Free &mdash; No Registration &mdash; Instant Results
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Warehouse{' '}
              <span className="text-gradient">Racking Systems</span>{' '}
              & Storage Solutions
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Professional-grade pallet racking systems, wire mesh decks, and metal pallets.
              Free planning tools, FEM/EN standards reference, and expert engineering support
              for your warehouse storage project.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/planner/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-amber-500/20 text-sm"
              >
                Explore Free Planner
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resources/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 font-semibold rounded-lg transition-colors text-sm"
              >
                Browse Resources
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>FEM 10.2.02 compliant calculations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Used by 2,300+ warehouse planners worldwide</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>100% browser-based &mdash; your data never leaves your device</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-primary-100/30 via-blue-50/20 to-transparent rounded-full blur-3xl -z-10" />
      </section>

      {/* Trust Stats — inspired by AR Racking key stats section */}
      <section className="border-b border-slate-200">
        <div className="container-main py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 text-accent-500 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-main section-padding">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Trusted Across Industries
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
              Warehouse professionals from these sectors use RackingHub for planning, standards reference, and procurement decisions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                name: 'Third-Party Logistics',
                svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
              },
              {
                name: 'E-Commerce & Retail',
                svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.572m5.98-.572h9m-9 0a3 3 0 01-5.98.572M17.25 14.25a3 3 0 005.98.572m-5.98-.572h-9m9 0a3 3 0 015.98.572M3.75 4.718l.383-1.437A1.125 1.125 0 015.22 2.25h13.56c.621 0 1.047.522 1.087 1.106l.383 1.437m-14.3.572l1.592 6.031m14.3-.572l-1.592 6.031M3.75 4.718h16.5" /></svg>,
              },
              {
                name: 'Manufacturing',
                svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21V3" /></svg>,
              },
              {
                name: 'Cold Chain',
                svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3M3 12h18M3 12l3-3m-3 3l3 3" /></svg>,
              },
              {
                name: 'FMCG & Distribution',
                svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25-2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
              },
              {
                name: 'Automotive & Parts',
                svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
              },
            ].map((industry) => (
              <div
                key={industry.name}
                className="text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-accent-200 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-2">
                  {industry.svg}
                </div>
                <div className="text-xs font-medium text-slate-700">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container-main section-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How It Works
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
            Get a complete warehouse racking plan in four simple steps. No sign-up, no download, no cost.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.description}
              </p>
              {index < 3 && (
                <div className="hidden lg:block absolute top-4 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px border-t-2 border-dashed border-slate-200" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/planner/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-amber-500/20 text-sm"
          >
            Start Planning Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Supported Racking Systems — new section inspired by AR Racking + Source Racks */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-main section-padding">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Supported Racking Systems
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
              The planner supports the three most widely used industrial racking types, each with optimized layout algorithms and cost models.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {rackingSystems.map((system) => (
              <Link
                key={system.name}
                href={system.href}
                className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${system.color} flex items-center justify-center mb-4`}>
                    <system.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-primary-950 transition-colors">
                      {system.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {system.description}
                  </p>
                  <div className="space-y-2">
                    {system.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Space utilization: <strong className="text-slate-600">{system.utilization}</strong>
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-accent-600 group-hover:text-accent-500">
                      Configure
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="container-main section-padding">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Everything You Need to Plan Your Warehouse
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
            From <strong>pallet racking planner</strong> tools to industry standards and expert consultation — RackingHub provides everything warehouse professionals need to design, specify, and procure racking systems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}
              >
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-950 transition-colors">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-500 transition-colors">
                Explore
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Planner Preview */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-main section-padding">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Interactive Warehouse Planner
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
              Configure your warehouse specs and get instant 2D layout diagrams,
              cost estimates, and complete bill of materials.
            </p>
          </div>

          {/* Preview mockup */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 h-6 bg-white rounded-md border border-slate-200 flex items-center px-3">
                <span className="text-xs text-slate-400">
                  rackinghub.com/planner
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-12 gap-4">
                {/* Mock left panel */}
                <div className="col-span-4 space-y-3">
                  <div className="bg-primary-950 rounded-lg p-3">
                    <div className="h-2 w-16 bg-white/20 rounded mb-2" />
                    <div className="h-2 w-full bg-accent-500/40 rounded mb-1.5" />
                    <div className="h-2 w-full bg-white/10 rounded mb-1.5" />
                    <div className="h-2 w-full bg-white/10 rounded" />
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border border-slate-200 rounded-lg p-3">
                      <div className="h-2 w-20 bg-slate-200 rounded mb-2" />
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="h-1.5 w-24 bg-slate-100 rounded" />
                          <div className="h-1.5 w-10 bg-slate-100 rounded" />
                        </div>
                        <div className="h-6 bg-slate-50 rounded border border-slate-100" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mock right panel */}
                <div className="col-span-8 space-y-3">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="aspect-[16/9] bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                      <div className="text-center">
                        <LayoutGrid className="w-8 h-8 text-slate-200 mx-auto mb-2" />
                        <p className="text-xs text-slate-300">2D Layout Preview</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-slate-50 rounded-lg p-2.5 border border-slate-100"
                      >
                        <div className="h-1.5 w-12 bg-slate-200 rounded mb-1" />
                        <div className="h-2.5 w-16 bg-slate-100 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/planner/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-amber-500/20 text-sm"
            >
              Try the Planner Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container-main section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Latest from the Knowledge Center
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Expert guides and industry insights
              </p>
            </div>
            <Link
              href="/learn/"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-500 transition-colors"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/learn/${article.slug}/`}
                className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge-primary text-[11px]">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {article.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-primary-950 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-3 text-[11px] text-slate-400">
                    {article.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/learn/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600"
            >
              View All Articles
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-950">
        <div className="container-main py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Plan Your Warehouse?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">
            Start with the free planner and get instant layout diagrams, cost
            estimates, and a complete bill of materials.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Lock className="w-3.5 h-3.5" />
            <span>100% browser-based &mdash; your data never leaves your device</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/planner/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-lg text-sm"
            >
              Get Your Free Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Request Expert Review
              <Building2 className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
