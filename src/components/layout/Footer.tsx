import Link from 'next/link';
import { LayoutGrid, BookOpen, ExternalLink, Mail, HelpCircle, Shield, Phone } from 'lucide-react';

const footerLinks = {
  platform: [
    { name: 'Planner', href: '/planner/' },
    { name: 'Resources', href: '/resources/' },
    { name: 'Knowledge Center', href: '/learn/' },
    { name: 'FAQ', href: '/faq/' },
  ],
  about: [
    { name: 'About RackingHub', href: '/about/' },
    { name: 'Contact Us', href: '/contact/' },
  ],
  popular: [
    { name: 'Selective Racking Guide', href: '/learn/selective-racking-complete-guide/' },
    { name: 'Drive-In vs Shuttle', href: '/learn/drive-in-vs-shuttle-comparison/' },
    { name: 'Wire Mesh Deck Guide', href: '/learn/wire-mesh-deck-guide/' },
    { name: 'Metal Pallet Selection', href: '/learn/metal-pallet-selection-guide/' },
  ],
};

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/8615348317266',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-950 text-slate-300">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RH</span>
              </div>
              <span className="text-lg font-bold text-white">
                Racking<span className="text-accent-400">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your professional resource platform for warehouse racking systems.
              Free planning tools, industry guides, and expert knowledge to help
              you make informed decisions.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
              <a
                href="mailto:info@rackinghub.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@rackinghub.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-slate-400">
              <a
                href="https://wa.me/8615348317266"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            {/* Social links */}
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label={`Follow RackingHub on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {/* Certifications trust row */}
            <div className="mt-4 flex flex-wrap gap-2">
              {['FEM 10.2.02', 'EN 15512', 'ISO 9001', 'CE'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 font-medium"
                >
                  <Shield className="w-3 h-3 text-accent-400/60" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LayoutGrid className="w-4 h-4 text-accent-400" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Platform
              </h3>
            </div>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-accent-400" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Popular Guides
              </h3>
            </div>
            <ul className="space-y-2.5">
              {footerLinks.popular.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-accent-400" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Company
              </h3>
            </div>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} RackingHub. Warehouse racking
            systems, expert resources, and free planning tools.
          </p>
          <p className="text-xs text-slate-500">
            Calculations reference FEM 10.2.02 guidelines. Not a substitute
            for professional engineering assessment.
          </p>
        </div>
      </div>
    </footer>
  );
}
