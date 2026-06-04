import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-xs text-slate-500">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary-950 transition-colors"
          >
            <Home className="w-3 h-3" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 text-slate-300" />
              {isLast || !item.href ? (
                <span className="text-slate-800 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary-950 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
