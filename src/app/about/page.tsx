import type { Metadata } from 'next';
import { BookOpen, Users, Globe, Wrench, CheckCircle, TrendingUp, ArrowRight, Award, Shield, Truck, Clock, Search, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About RackingHub — Independent Warehouse Racking Expert',
  description:
    'RackingHub is an independent knowledge platform for warehouse racking professionals, founded by a racking specialist with 15+ years of hands-on experience in design, international trade, and supplier evaluation across 60+ countries.',
  alternates: {
    canonical: 'https://rackinghub.com/about/',
  },
};

const stats = [
  { value: '15+', label: 'Years of Industry Experience', icon: Clock },
  { value: '60+', label: 'Countries Served', icon: Globe },
  { value: '100+', label: 'Projects Delivered', icon: Truck },
  { value: '50+', label: 'Suppliers Evaluated', icon: Search },
];

const features = [
  {
    icon: BookOpen,
    title: 'Expert Knowledge Base',
    description: 'In-depth guides on selective racking, drive-in, VNA, cantilever, push-back systems written by professionals with hands-on experience in racking design and international trade.',
  },
  {
    icon: Wrench,
    title: 'Free Planning Tools',
    description: 'Configure warehouse dimensions, select racking types, and generate instant layout diagrams with cost estimates and complete bills of materials, entirely in your browser.',
  },
  {
    icon: Users,
    title: 'Supplier Network Access',
    description: 'Connect with vetted manufacturers — from global leaders like SSI Schaefer and Inform to flexible mid-size suppliers who accommodate custom and smaller orders.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We cover standards and practices from Europe (FEM, EN), North America (RMI, ANSI), Asia-Pacific (AS), and the Middle East, because warehouse logistics is a global business.',
  },
];

const certifications = [
  { name: 'FEM 10.2.02', description: 'Structural design compliance for steel pallet racking systems' },
  { name: 'CE Marking', description: 'European conformity for safety and performance requirements' },
  { name: 'ISO 9001:2015', description: 'Quality management system certification' },
];

const expertise = [
  'FEM 10.2.02 structural design and verification',
  'EN 15512 compliance and installation standards',
  'Selective, drive-in, VNA, cantilever, push-back racking systems',
  'Wire mesh deck and steel shelf panel engineering',
  'BOM calculation and cost estimation',
  'Multi-level mezzanine and steel platform design',
  'Cold storage and food-grade racking solutions',
  'E-commerce fulfillment center optimization',
  'Supplier evaluation and OEM/ODM project management',
];

const clientLogos = [
  'IKEA',
  'Qatar Airways',
  'Goodyear',
  'Cotton On',
  'WHO Lebanon',
  'Qatar World Cup 2022',
];

const partnerRegions = [
  { region: 'Middle East & Africa', examples: 'Qatar, Saudi Arabia, UAE, Lebanon' },
  { region: 'Southeast Asia', examples: 'Singapore, Indonesia, Philippines, Vietnam' },
  { region: 'Europe', examples: 'United Kingdom, Germany, France, Spain' },
  { region: 'Americas', examples: 'USA, Mexico, Brazil, Chile' },
  { region: 'Asia-Pacific', examples: 'Australia, New Zealand, Japan, South Korea' },
];

const trustedSuppliers = [
  { name: 'SSI Schaefer', country: 'Germany', desc: 'Global intralogistics leader with full-scale automation and racking systems', url: 'https://www.ssi-schaefer.com' },
  { name: 'Inform (\u97f3\u98de\u50a8\u5b58)', country: 'China', desc: 'A-share listed (603066), China\'s largest racking manufacturer, smart warehousing specialist', url: 'https://www.informrack.com' },
  { name: 'Jingxing (\u7cbe\u661f)', country: 'China', desc: 'National "\u4e13\u7cbe\u7279\u65b0" enterprise since 1989, 500+ employees, AS/RS and precision racking', url: 'https://www.jxlogistics.com' },
  { name: 'Jungheinrich', country: 'Germany', desc: '70-year history, integrated forklift and racking solutions, premium pricing', url: 'https://www.jungheinrich.com' },
  { name: 'Interlake Mecalux', country: 'Spain / USA', desc: 'Global leader in warehouse automation — racking, WMS software, and robotic systems', url: 'https://www.mecalux.com' },
  { name: 'Dexion', country: 'UK', desc: 'Iconic brand since the 1950s, SpeedLock system, global dealer network', url: 'https://www.dexion.com' },
  { name: 'Sunnyrack', country: 'China', desc: 'Est. 2002, Nanjing, 1000 tons/month capacity, Fortune 500 partnerships', url: 'https://www.sunnyracking.com' },
  { name: 'Boracs', country: 'China', desc: 'FEM/CE/ISO 9001 certified, est. 2004, exports to 60+ countries, flexible on custom and mixed orders', url: 'https://www.boracs.com' },
  { name: 'KAKU (\u51ef\u6a21)', country: 'China', desc: 'Nanjing-based, Diamond Supplier on Made-in-China, Fortune 500 cooperations', url: 'https://www.kakuequipment.com' },
  { name: 'AR Racking', country: 'Spain / China', desc: 'Arania Group subsidiary, full product range, FEM and ISO certified', url: 'https://www.ar-racking.com' },
  { name: 'Nedcon', country: 'Netherlands', desc: 'European mid-size manufacturer specializing in industrial storage systems', url: 'https://www.nedcon.com' },
  { name: 'Stow Group', country: 'Belgium', desc: 'European brand with global reach, strong on large distribution center projects', url: 'https://www.stowgroup.com' },
];

export default function AboutPage() {
  return (
    <div className="container-main section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            About RackingHub
          </h1>
          <p className="mt-3 text-sm text-slate-500 max-w-2xl">
            An independent resource platform for warehouse racking professionals. Free tools, vetted supplier
            recommendations, and engineering-grade knowledge — built by someone who has spent 15+ years on both
            sides of the business: designing systems and evaluating manufacturers.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
              <stat.icon className="w-5 h-5 text-accent-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Founder Background */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">The Story Behind RackingHub</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              RackingHub was created by a warehouse racking specialist who has spent over 15 years working at the
              intersection of engineering design, international trade, and supplier evaluation. After managing racking
              projects for clients in 60+ countries — from Qatar Airways and IKEA fulfillment centers to cold
              storage facilities in Southeast Asia — it became clear that most online resources about warehouse
              racking are either thinly-veiled sales pages or too generic to be useful.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              RackingHub exists to fill that gap. Every guide, every tool, and every supplier recommendation is
              based on real project experience. We evaluate manufacturers from a buyer&apos;s perspective: design
              capability, production quality, MOQ flexibility, export experience, and responsiveness — not marketing claims.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you&apos;re sourcing racking for a 10,000-pallet distribution center or a 200-pallet startup
              warehouse, the goal is the same: give you the knowledge and connections to make informed decisions
              and get competitive pricing from the right supplier.
            </p>
          </div>
        </div>

        {/* Trusted Suppliers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Trusted Manufacturers We Work With</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
            <p className="text-sm text-slate-500 mb-6">
              Over the years, we&apos;ve evaluated and worked with dozens of racking manufacturers worldwide.
              Below is a selection of suppliers we can personally recommend based on project experience,
              quality audits, and client feedback.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustedSuppliers.map((supplier) => (
                <a
                  key={supplier.name}
                  href={supplier.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-primary-950 transition-colors">
                        {supplier.name}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                        {supplier.country}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-accent-500 shrink-0 mt-1 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {supplier.desc}
                  </p>
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-6">
              These recommendations are based on our independent evaluation. Listings are not paid placements.
            </p>
          </div>
        </div>

        {/* Trusted Clients */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Projects We&apos;ve Been Involved In</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
            <p className="text-sm text-slate-500 mb-6">
              Through supplier partnerships and direct project involvement, we&apos;ve contributed to racking
              installations for major international brands and organizations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {clientLogos.map((client) => (
                <div
                  key={client}
                  className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <span className="text-sm font-bold text-slate-700">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications We Reference */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Key Certifications We Reference</h2>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-sm text-slate-500 mb-4">
              When evaluating suppliers, we look for these certifications as baseline quality indicators:
            </p>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <Award className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="text-xs font-bold text-green-800">{cert.name}</div>
                    <div className="text-[10px] text-green-600">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertise.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Global Coverage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerRegions.map((region) => (
              <div key={region.region} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-sm font-bold text-slate-900">{region.region}</div>
                <div className="text-xs text-slate-500 mt-1">{region.examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-950 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Need Help Finding the Right Supplier?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">
            Tell us about your project — warehouse size, load requirements, location, and budget range.
            We&apos;ll recommend the most suitable suppliers from our vetted network.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Ask an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Browse Suppliers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
