'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Phone, ShieldCheck } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Planner', href: '/planner/' },
  { name: 'Verified Suppliers', href: '/resources/', highlight: true },
  { name: 'Resources', href: '/resources/' },
  { name: 'Learn', href: '/learn/' },
  { name: 'FAQ', href: '/faq/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary-950 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RH</span>
            </div>
            <span className="text-lg font-bold text-primary-950">
              Racking<span className="text-accent-500">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-950 bg-primary-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.name === 'Verified Suppliers' && (
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent-500" />
                    Verified Suppliers
                  </span>
                )}
                {item.name !== 'Verified Suppliers' && item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:info@rackinghub.com"
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">info@rackinghub.com</span>
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Ask an Expert
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-primary-200 hover:border-primary-300 text-primary-950 text-sm font-semibold rounded-lg transition-colors"
            >
              Custom Solution
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-100 mt-2 pt-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-950 bg-primary-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name === 'Verified Suppliers' && (
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-500" />
                      Verified Suppliers
                    </span>
                  )}
                  {item.name !== 'Verified Suppliers' && item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 px-3">
              <a
                href="mailto:info@rackinghub.com"
                className="flex items-center gap-1.5 text-sm text-slate-500 mb-3"
              >
                <Phone className="w-3.5 h-3.5" />
                info@rackinghub.com
              </a>
              <div className="flex gap-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-1.5 flex-1 px-4 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ask an Expert
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-1.5 flex-1 px-4 py-2.5 border border-primary-200 hover:border-primary-300 text-primary-950 text-sm font-semibold rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Custom Solution
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
