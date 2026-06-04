import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/lib/data/articles';
import { Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://rackinghub.com/learn/',
  },
  title: 'Knowledge Center',
  description:
    'Expert guides on warehouse racking standards, system selection, safety compliance, and warehouse optimization strategies.',
};

export default function LearnPage() {
  const featured = ARTICLES.filter((a) => a.featured);
  const regular = ARTICLES.filter((a) => !a.featured);

  return (
    <div className="container-main section-padding">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <Breadcrumbs items={[{ label: 'Knowledge Center' }]} />
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Knowledge Center
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          In-depth guides, standards references, and expert insights for
          warehouse racking professionals. Updated monthly.
        </p>
      </div>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/learn/${article.slug}/`}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-primary text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3" />
                    {article.readTime} min read
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-800 group-hover:text-primary-950 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                  {article.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-500">
                  Read Guide
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Articles */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          All Articles
        </h2>
        <div className="space-y-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/learn/${article.slug}/`}
              className="group flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge-primary text-[10px]">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-primary-950 transition-colors truncate">
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 ml-4 shrink-0">
                <span className="text-xs text-slate-400">
                  {article.readTime} min
                </span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent-500 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
