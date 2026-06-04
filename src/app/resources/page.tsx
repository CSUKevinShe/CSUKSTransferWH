'use client';

import { useState, useMemo } from 'react';
import {
  Search, ExternalLink, Star, Globe, BookOpen, Wrench,
  Newspaper, Shield, Factory, Package, BarChart3,
  MapPin, Tag, SlidersHorizontal, X, ChevronDown,
} from 'lucide-react';
import {
  RESOURCES,
  RESOURCE_CATEGORIES,
  RESOURCE_CATEGORIES_WITH_COUNT,
  RESOURCE_REGIONS,
  RESOURCE_TAGS,
  QUICK_FILTERS,
} from '@/lib/data/resources';
import type {
  ResourceItem,
  ResourceCategory,
  ResourceRegion,
  ResourceTag,
  QuickFilter,
} from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { cn } from '@/lib/utils';

// ── Icons ────────────────────────────────────────────────
const CATEGORY_ICONS: Record<string, typeof Globe> = {
  standards: BookOpen,
  manufacturers: Globe,
  accessories: Wrench,
  media: Newspaper,
};
const CATEGORY_HERO_ICONS: Record<string, typeof Globe> = {
  standards: Shield,
  manufacturers: Factory,
  accessories: Package,
  media: BarChart3,
};
const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  standards: 'International design standards (FEM, EN, RMI, SEMA), certification bodies, and industry associations governing pallet racking.',
  manufacturers: 'Leading global manufacturers and suppliers of warehouse racking systems, structural steel, and logistics equipment.',
  accessories: 'Essential racking components including wire mesh decks, pallet supports, safety accessories, and column protectors.',
  media: 'Industry publications, planning tools, trade shows, and online platforms for warehouse logistics professionals.',
};

// ── Page Component ────────────────────────────────────────
export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | null>(null);
  const [activeRegion, setActiveRegion] = useState<ResourceRegion | null>(null);
  const [activeTags, setActiveTags] = useState<ResourceTag[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [activeQuickFilter, setActiveQuickFilter] = useState<string | null>(null);

  const totalCount = RESOURCES.length;

  // ── Filtering ─────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = RESOURCES;
    if (activeCategory) result = result.filter((r) => r.category === activeCategory);
    if (activeRegion) result = result.filter((r) => r.region === activeRegion);
    if (activeTags.length > 0) {
      result = result.filter((r) => activeTags.some((t) => r.tags.includes(t)));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.region.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, activeCategory, activeRegion, activeTags]);

  // ── Quick filter ────────────────────────────────────
  const applyQuickFilter = (qf: QuickFilter) => {
    const key = qf.label;
    if (activeQuickFilter === key) {
      // Toggle off
      setActiveQuickFilter(null);
      setActiveCategory(null);
      setActiveRegion(null);
      setActiveTags([]);
      return;
    }
    setActiveQuickFilter(key);
    setActiveCategory(qf.category ?? null);
    setActiveRegion(qf.region ?? null);
    setActiveTags(qf.tags ?? []);
  };

  // ── Tag toggle ───────────────────────────────────────
  const toggleTag = (tag: ResourceTag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setActiveQuickFilter(null);
  };

  // ── Clear all ────────────────────────────────────────
  const clearAll = () => {
    setSearch('');
    setActiveCategory(null);
    setActiveRegion(null);
    setActiveTags([]);
    setActiveQuickFilter(null);
  };

  const hasActiveFilters = activeCategory || activeRegion || activeTags.length > 0;

  const activeCatConfig = RESOURCE_CATEGORIES_WITH_COUNT.find(
    (c) => c.id === activeCategory
  );

  return (
    <div className="container-main section-padding">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <Breadcrumbs items={[{ label: 'Resources' }]} />
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Warehouse Racking Resources
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          A curated directory of {totalCount} standards bodies, manufacturers,
          and industry resources for warehouse racking systems.
        </p>
      </div>

      {/* Quick Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-400 mr-1">Quick find:</span>
          {QUICK_FILTERS.map((qf) => (
            <button
              key={qf.label}
              type="button"
              onClick={() => applyQuickFilter(qf)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border',
                activeQuickFilter === qf.label
                  ? 'bg-accent-500 text-white border-accent-500 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-accent-300 hover:text-accent-700'
              )}
            >
              {qf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search + Category Tabs */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setActiveQuickFilter(null); }}
            className="w-full h-10 pl-10 pr-4 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => { setActiveCategory(null); setActiveQuickFilter(null); }}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
              activeCategory === null
                ? 'bg-primary-950 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            )}
          >
            All ({totalCount})
          </button>
          {RESOURCE_CATEGORIES_WITH_COUNT.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Globe;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => { setActiveCategory(cat.id); setActiveQuickFilter(null); }}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
                  activeCategory === cat.id
                    ? 'bg-primary-950 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                )}
              >
                <Icon className="w-3 h-3" />
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters Panel */}
      <div className="mb-6">
        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="lg:hidden flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 mb-3"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          {filtersOpen ? 'Hide' : 'Show'} Filters
          <ChevronDown className={cn('w-3 h-3 transition-transform', filtersOpen && 'rotate-180')} />
        </button>

        <div className={cn(
          'rounded-xl border border-slate-200 bg-slate-50 p-4',
          'lg:block', // always visible on desktop
          filtersOpen ? 'block' : 'hidden' // toggle on mobile
        )}>
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            {/* Region */}
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-semibold text-slate-700">Region</span>
                {activeRegion && (
                  <button
                    type="button"
                    onClick={() => setActiveRegion(null)}
                    className="ml-1 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {RESOURCE_REGIONS.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => { setActiveRegion(activeRegion === region ? null : region); setActiveQuickFilter(null); }}
                    className={cn(
                      'px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors',
                      activeRegion === region
                        ? 'bg-primary-950 text-white'
                        : 'bg-white text-slate-500 border border-slate-200 hover:border-primary-300 hover:text-primary-700'
                    )}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-2">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-semibold text-slate-700">Tags</span>
                {activeTags.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveTags([])}
                    className="ml-1 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {RESOURCE_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      'px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors',
                      activeTags.includes(tag)
                        ? 'bg-accent-500 text-white'
                        : 'bg-white text-slate-500 border border-slate-200 hover:border-accent-300 hover:text-accent-700'
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear All */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="shrink-0 self-start px-3 py-1.5 rounded-md text-[11px] font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Category Description */}
      {activeCatConfig && (
        <div className="mb-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {(() => {
                const HeroIcon = CATEGORY_HERO_ICONS[activeCatConfig.id] || Globe;
                return (
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                    <HeroIcon className="w-4 h-4 text-primary-600" />
                  </div>
                );
              })()}
              <div>
                <h3 className="text-sm font-semibold text-primary-900">{activeCatConfig.name}</h3>
                <p className="text-xs text-primary-600">{CATEGORY_DESCRIPTIONS[activeCatConfig.id]}</p>
              </div>
            </div>
            <span className="text-xs text-primary-500 font-medium">{activeCatConfig.count} resources</span>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-400">
          Showing {filtered.length} of {totalCount} resources
        </span>
      </div>

      {/* Resource Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <p className="text-sm text-slate-400">
            No resources found matching your criteria.
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="mt-3 text-xs text-accent-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((resource) => (
            <ResourceCard key={resource.name} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Resource Card ───────────────────────────────────────
function ResourceCard({ resource }: { resource: ResourceItem }) {
  const categoryConfig = RESOURCE_CATEGORIES_WITH_COUNT.find(
    (c) => c.id === resource.category
  );
  const Icon = CATEGORY_ICONS[resource.category] || Globe;

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4 text-slate-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
              {categoryConfig?.name || resource.category}
            </span>
            <span className="text-[10px] text-slate-300">
              {resource.region}
            </span>
          </div>
        </div>
        {resource.featured && (
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
        )}
      </div>
      <h3 className="mt-2 text-sm font-semibold text-slate-800 group-hover:text-primary-950 transition-colors line-clamp-2">
        {resource.name}
      </h3>
      <p className="mt-1.5 text-xs text-slate-500 line-clamp-3 flex-1">
        {resource.description}
      </p>
      {/* Tags */}
      {resource.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-slate-50 text-slate-400 border border-slate-100"
            >
              {tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="px-1.5 py-0.5 rounded text-[9px] font-medium text-slate-300">
              +{resource.tags.length - 3}
            </span>
          )}
        </div>
      )}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] text-slate-400">{resource.added}</span>
        <div className="flex items-center gap-1 text-xs text-accent-600 font-medium">
          Visit
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
}
