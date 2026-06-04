import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronDown,
  Calculator,
  Shield,
  Globe,
  HelpCircle,
  Truck,
  Clock,
  Factory,
  ClipboardCheck,
  Layers,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'FAQ \u2014 Warehouse Racking Questions Answered',
  description:
    'Frequently asked questions about warehouse racking systems, the RackingHub planner, supplier selection, cost estimates, standards, and project workflows.',
  alternates: {
    canonical: 'https://rackinghub.com/faq/',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the warehouse racking planner really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the planner is 100% free with no registration required. You can configure warehouse dimensions, choose racking types, and get instant layout diagrams, cost estimates, and a complete bill of materials — all without creating an account or entering payment details."
      }
    },
    {
      "@type": "Question",
      "name": "What racking systems does the planner support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The planner currently supports three racking types: Heavy-Duty Selective Racking (direct pallet access), Drive-In/Drive-Through Racking (high-density bulk storage), and Radio Shuttle Racking (semi-automated high-density). Each type has its own optimized layout algorithm and cost model."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are the cost estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cost estimates are indicative budgets based on current raw steel prices (USD/kg), adjusted by a budget tier multiplier (Economy, Standard, Premium). They cover structural steel framing, wire mesh decking, and safety accessories. Actual project costs vary based on location, accessories, installation, surface treatment, and quantity. We recommend requesting a professional quote for detailed project pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the planner for different pallet sizes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The planner supports standard pallet presets (EUR 1200×800mm, US 1200×1000mm, and Custom) and allows you to enter any custom pallet dimensions within the supported range (width 600–1500mm, depth 800–1800mm, height 800–2500mm)."
      }
    },
    {
      "@type": "Question",
      "name": "Does the planner collect or store my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All calculations are performed entirely in your browser. No data is sent to any server. Your warehouse configurations, cost estimates, and layout data never leave your device."
      }
    },
    {
      "@type": "Question",
      "name": "How does the email export work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you click \"Email Plan,\" the planner generates a summary of your configuration and opens your default email client with the details pre-filled. You choose the recipient. We never receive or store that email."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between selective, drive-in, and shuttle racking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selective racking gives direct access to every pallet (100% selectivity) but uses more space. Drive-in racking eliminates aisles by allowing forklifts to drive into the rack structure, achieving 70–80% space utilization — but operates on a LIFO (last-in, first-out) basis. Shuttle racking uses a motorized cart that runs on rails inside the rack structure, offering high density (80–90%) with better throughput than drive-in, as the shuttle operates independently of forklifts."
      }
    },
    {
      "@type": "Question",
      "name": "When should I choose cantilever racking instead of pallet racking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cantilever racking is designed for long, bulky, or irregularly shaped items that cannot fit on standard pallets — such as timber, steel pipes, aluminum extrusions, carpet rolls, and sheet materials. If your primary cargo is standard palletized goods, selective or drive-in racking is more appropriate and cost-effective."
      }
    },
    {
      "@type": "Question",
      "name": "What is VNA (Very Narrow Aisle) racking and when is it worth the investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VNA racking reduces aisle widths from the standard 3.0–3.5m down to 1.6–1.8m using specialized turret trucks or guided very narrow aisle trucks. This can increase storage capacity by 30–40% compared to conventional selective racking. VNA is worth the investment when floor space is expensive or limited (e.g., cold storage, urban distribution centers), storage volumes exceed 5,000 pallet positions, and throughput requirements justify the specialized equipment."
      }
    },
    {
      "@type": "Question",
      "name": "What is push-back racking and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Push-back racking stores pallets on nested carts that roll on inclined rails. When a new pallet is loaded, it pushes the existing pallets deeper into the lane. Pallets are retrieved on a LIFO basis by gravity. It offers 2–5 pallet depths per lane, providing 2–3 times more storage density than selective racking while maintaining faster access than drive-in."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose between wire mesh decks and steel shelf panels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wire mesh decks are the standard choice for pallet racking. They provide excellent load distribution, fire sprinkler penetration (critical for NFPA 13 compliance), and visibility for inventory checks. Use wire mesh decks for loads from 500kg to 4,000kg per level. Steel shelf panels (perforated steel) are better suited for hand-stacked loads, small parts storage, and shelving applications with lighter loads (100–600kg per level)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find a reliable racking manufacturer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for manufacturers with recognized certifications (FEM, CE, ISO 9001), verifiable project references, and transparent engineering capabilities. Key indicators of a reliable supplier include: willingness to provide detailed structural calculations, clear load capacity tables for every configuration, their own manufacturing facility (not just trading), and experience with projects in your region. RackingHub&#x27;s curated resource directory lists vetted manufacturers meeting these criteria."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications should a racking supplier have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most important certifications are: FEM 10.2.02 compliance (design standard), CE marking (European safety conformity), ISO 9001 (quality management system), and ISO 14001 (environmental management). For seismic zones, ask about FEM 10.2.04 compliance. Additionally, check if the supplier is a member of recognized industry associations such as SEMA (UK), RMI/MHI (US), or their national equivalents."
      }
    },
    {
      "@type": "Question",
      "name": "Should I buy directly from manufacturers or through traders/distributors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For standard selective racking in large quantities, buying directly from a manufacturer typically offers the best pricing. For specialized systems (VNA, shuttle, automated), manufacturers provide essential engineering support that traders may lack. However, local distributors can offer advantages for smaller projects: faster delivery, local installation teams, and after-sales support. The best approach depends on your project size, complexity, and location."
      }
    },
    {
      "@type": "Question",
      "name": "What information do I need to request a quotation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A good quotation request should include: warehouse floor plan (dimensions, column positions, door locations), pallet dimensions and maximum weight per pallet, required number of pallet positions, number of storage levels, clear height available, floor slab capacity (if known), forklift type and aisle requirements, any special requirements (seismic zone, cold storage, food-grade, fire suppression), and your target delivery location (for freight calculation). The RackingHub planner can help you generate most of this information automatically."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take from order to delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For standard selective racking from a manufacturer, typical lead times are 4–6 weeks for production plus 3–5 weeks for sea freight (depending on destination). Total: 7–11 weeks. Air freight can reduce shipping to 1–2 weeks but significantly increases cost. Complex projects (shuttle systems, mezzanine platforms, automated solutions) may require 8–12 weeks for production. Local distributors with stock may offer 2–4 week delivery for standard configurations."
      }
    },
    {
      "@type": "Question",
      "name": "What standards do the calculations follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Layout algorithms and structural parameters follow FEM 10.2.02 guidelines (European Materials Handling Federation) and reference EN 15512 for steel static storage systems. These are the most widely recognized international standards for pallet racking design."
      }
    },
    {
      "@type": "Question",
      "name": "Is the planner a substitute for professional engineering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The planner provides indicative layouts and cost estimates for planning and budgeting purposes. For actual construction and installation, a professional engineering assessment is required to account for local seismic conditions, building codes, floor slab capacity, and specific load requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What are the budget tiers (Economy, Standard, Premium)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The three tiers represent different quality and specification levels for racking components. Economy uses basic steel grade with minimal accessories. Standard uses quality steel with full safety accessories. Premium uses high-grade steel with enhanced safety features and branded components. The multipliers are 0.85×, 1.10×, and 1.40× respectively on the base steel price."
      }
    },
    {
      "@type": "Question",
      "name": "What is the FEM 10.2.02 standard and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FEM 10.2.02 (\"The Design of Static Steel Pallet Racking Systems\") is the European benchmark for racking structural design, published by the European Materials Handling Federation. It defines safety factors, load combinations, beam deflection limits (typically L/200), upright buckling analysis methods, connector design, and base plate requirements. Compliance with FEM 10.2.02 ensures the racking system is structurally safe under expected loading conditions. It is referenced worldwide, not just in Europe."
      }
    }
  ]
};

const faqs = [
    {
      category: 'About the Planner',
      icon: Calculator,
      items: [
          {
            q: 'Is the warehouse racking planner really free?',
            a: 'Yes, the planner is 100% free with no registration required. You can configure warehouse dimensions, choose racking types, and get instant layout diagrams, cost estimates, and a complete bill of materials — all without creating an account or entering payment details.',
          },
          {
            q: 'What racking systems does the planner support?',
            a: 'The planner currently supports three racking types: Heavy-Duty Selective Racking (direct pallet access), Drive-In/Drive-Through Racking (high-density bulk storage), and Radio Shuttle Racking (semi-automated high-density). Each type has its own optimized layout algorithm and cost model.',
          },
          {
            q: 'How accurate are the cost estimates?',
            a: 'Cost estimates are indicative budgets based on current raw steel prices (USD/kg), adjusted by a budget tier multiplier (Economy, Standard, Premium). They cover structural steel framing, wire mesh decking, and safety accessories. Actual project costs vary based on location, accessories, installation, surface treatment, and quantity. We recommend requesting a professional quote for detailed project pricing.',
          },
          {
            q: 'Can I use the planner for different pallet sizes?',
            a: 'Yes. The planner supports standard pallet presets (EUR 1200×800mm, US 1200×1000mm, and Custom) and allows you to enter any custom pallet dimensions within the supported range (width 600–1500mm, depth 800–1800mm, height 800–2500mm).',
          },
          {
            q: 'Does the planner collect or store my data?',
            a: 'No. All calculations are performed entirely in your browser. No data is sent to any server. Your warehouse configurations, cost estimates, and layout data never leave your device.',
          },
      ],
    },
    {
      category: 'Choosing a Racking System',
      icon: Layers,
      items: [
          {
            q: 'How does the email export work?',
            a: 'When you click "Email Plan," the planner generates a summary of your configuration and opens your default email client with the details pre-filled. You choose the recipient. We never receive or store that email.',
          },
          {
            q: 'What is the difference between selective, drive-in, and shuttle racking?',
            a: 'Selective racking gives direct access to every pallet (100% selectivity) but uses more space. Drive-in racking eliminates aisles by allowing forklifts to drive into the rack structure, achieving 70–80% space utilization — but operates on a LIFO (last-in, first-out) basis. Shuttle racking uses a motorized cart that runs on rails inside the rack structure, offering high density (80–90%) with better throughput than drive-in, as the shuttle operates independently of forklifts.',
          },
          {
            q: 'When should I choose cantilever racking instead of pallet racking?',
            a: 'Cantilever racking is designed for long, bulky, or irregularly shaped items that cannot fit on standard pallets — such as timber, steel pipes, aluminum extrusions, carpet rolls, and sheet materials. If your primary cargo is standard palletized goods, selective or drive-in racking is more appropriate and cost-effective.',
          },
          {
            q: 'What is VNA (Very Narrow Aisle) racking and when is it worth the investment?',
            a: 'VNA racking reduces aisle widths from the standard 3.0–3.5m down to 1.6–1.8m using specialized turret trucks or guided very narrow aisle trucks. This can increase storage capacity by 30–40% compared to conventional selective racking. VNA is worth the investment when floor space is expensive or limited (e.g., cold storage, urban distribution centers), storage volumes exceed 5,000 pallet positions, and throughput requirements justify the specialized equipment.',
          },
          {
            q: 'What is push-back racking and how does it work?',
            a: 'Push-back racking stores pallets on nested carts that roll on inclined rails. When a new pallet is loaded, it pushes the existing pallets deeper into the lane. Pallets are retrieved on a LIFO basis by gravity. It offers 2–5 pallet depths per lane, providing 2–3 times more storage density than selective racking while maintaining faster access than drive-in.',
          },
      ],
    },
    {
      category: 'Technical & Standards',
      icon: Shield,
      items: [
          {
            q: 'How do I choose between wire mesh decks and steel shelf panels?',
            a: 'Wire mesh decks are the standard choice for pallet racking. They provide excellent load distribution, fire sprinkler penetration (critical for NFPA 13 compliance), and visibility for inventory checks. Use wire mesh decks for loads from 500kg to 4,000kg per level. Steel shelf panels (perforated steel) are better suited for hand-stacked loads, small parts storage, and shelving applications with lighter loads (100–600kg per level).',
          },
          {
            q: 'How do I find a reliable racking manufacturer?',
            a: 'Look for manufacturers with recognized certifications (FEM, CE, ISO 9001), verifiable project references, and transparent engineering capabilities. Key indicators of a reliable supplier include: willingness to provide detailed structural calculations, clear load capacity tables for every configuration, their own manufacturing facility (not just trading), and experience with projects in your region. RackingHub&#x27;s curated resource directory lists vetted manufacturers meeting these criteria.',
          },
          {
            q: 'What certifications should a racking supplier have?',
            a: 'The most important certifications are: FEM 10.2.02 compliance (design standard), CE marking (European safety conformity), ISO 9001 (quality management system), and ISO 14001 (environmental management). For seismic zones, ask about FEM 10.2.04 compliance. Additionally, check if the supplier is a member of recognized industry associations such as SEMA (UK), RMI/MHI (US), or their national equivalents.',
          },
          {
            q: 'Should I buy directly from manufacturers or through traders/distributors?',
            a: 'For standard selective racking in large quantities, buying directly from a manufacturer typically offers the best pricing. For specialized systems (VNA, shuttle, automated), manufacturers provide essential engineering support that traders may lack. However, local distributors can offer advantages for smaller projects: faster delivery, local installation teams, and after-sales support. The best approach depends on your project size, complexity, and location.',
          },
          {
            q: 'What information do I need to request a quotation?',
            a: 'A good quotation request should include: warehouse floor plan (dimensions, column positions, door locations), pallet dimensions and maximum weight per pallet, required number of pallet positions, number of storage levels, clear height available, floor slab capacity (if known), forklift type and aisle requirements, any special requirements (seismic zone, cold storage, food-grade, fire suppression), and your target delivery location (for freight calculation). The RackingHub planner can help you generate most of this information automatically.',
          },
      ],
    },
    {
      category: 'Supplier Selection & Procurement',
      icon: Globe,
      items: [
          {
            q: 'How long does it take from order to delivery?',
            a: 'For standard selective racking from a manufacturer, typical lead times are 4–6 weeks for production plus 3–5 weeks for sea freight (depending on destination). Total: 7–11 weeks. Air freight can reduce shipping to 1–2 weeks but significantly increases cost. Complex projects (shuttle systems, mezzanine platforms, automated solutions) may require 8–12 weeks for production. Local distributors with stock may offer 2–4 week delivery for standard configurations.',
          },
          {
            q: 'What standards do the calculations follow?',
            a: 'Layout algorithms and structural parameters follow FEM 10.2.02 guidelines (European Materials Handling Federation) and reference EN 15512 for steel static storage systems. These are the most widely recognized international standards for pallet racking design.',
          },
          {
            q: 'Is the planner a substitute for professional engineering?',
            a: 'No. The planner provides indicative layouts and cost estimates for planning and budgeting purposes. For actual construction and installation, a professional engineering assessment is required to account for local seismic conditions, building codes, floor slab capacity, and specific load requirements.',
          },
          {
            q: 'What are the budget tiers (Economy, Standard, Premium)?',
            a: 'The three tiers represent different quality and specification levels for racking components. Economy uses basic steel grade with minimal accessories. Standard uses quality steel with full safety accessories. Premium uses high-grade steel with enhanced safety features and branded components. The multipliers are 0.85×, 1.10×, and 1.40× respectively on the base steel price.',
          },
          {
            q: 'What is the FEM 10.2.02 standard and why does it matter?',
            a: 'FEM 10.2.02 ("The Design of Static Steel Pallet Racking Systems") is the European benchmark for racking structural design, published by the European Materials Handling Federation. It defines safety factors, load combinations, beam deflection limits (typically L/200), upright buckling analysis methods, connector design, and base plate requirements. Compliance with FEM 10.2.02 ensures the racking system is structurally safe under expected loading conditions. It is referenced worldwide, not just in Europe.',
          },
      ],
    },
    {
      category: 'Safety & Compliance',
      icon: ClipboardCheck,
      items: [
          {
            q: 'What is the difference between FEM, EN 15512, and AS 4084?',
            a: 'FEM 10.2.02 is the industry design guideline published by a federation of manufacturers. EN 15512 is the formal European standard (CEN) that codifies similar design requirements into a legally adoptable standard. AS 4084 is the Australian standard with its own specific design rules for local conditions. All three cover similar topics (upright design, beam design, connections, tolerances) but with regional variations in safety factors, seismic provisions, and testing methods. For international projects, FEM 10.2.02 is the most widely accepted reference.',
          },
          {
            q: 'What safety accessories should I include in my racking system?',
            a: 'Essential safety accessories include column protectors (at aisle-facing uprights), row spacers (between back-to-back frames), pallet support bars or wire mesh decks, load stops (beam-end restraints), and floor guides for forklift alignment. Safety inspections should be conducted annually or after any impact event.',
          },
          {
            q: 'How do I determine the correct load capacity for my racking?',
            a: 'The planner calculates indicative loads based on standard beam capacities and upright profiles. However, actual capacity depends on beam span, upright height, bracing pattern, and local seismic zone. Always consult the manufacturer&#x27;s load capacity tables and have a structural engineer verify the design before installation.',
          },
          {
            q: 'What is the recommended aisle width for different forklift types?',
            a: 'Standard counterbalance forklifts typically need 3.0–3.5m aisles. Reach trucks can operate in 2.5–2.8m aisles. Very Narrow Aisle (VNA) trucks with wire guidance require only 1.6–1.8m. The planner includes an aisle width guide with recommendations for common forklift types.',
          },
          {
            q: 'What standards govern racking safety inspections?',
            a: 'Key standards include EN 15635 (European — covers use and maintenance of storage equipment), SEMA guidelines (UK), AS 4084 (Australia), and ANSI/RMI MH16.1 (North America). Most standards recommend annual inspections by a competent person, with immediate inspections after any damage from forklift impact.',
          },
      ],
    },
    {
      category: 'Using the Results',
      icon: Factory,
      items: [
          {
            q: 'How do I know if my racking has been damaged and needs repair?',
            a: 'Common signs of racking damage include: uprights that are bent, twisted, or have footplate damage; beams that are deflected beyond normal span/200 or have damaged connectors; missing or dislodged safety clips; and damage to bracing members. Any visible deformation exceeding the manufacturer&#x27;s allowable limits requires immediate offloading of the affected bay and professional assessment. Post-impact inspections should be mandatory after any forklift collision.',
          },
          {
            q: 'Can I download the layout diagram?',
            a: 'Yes. The planner allows you to save the layout diagram as a PNG image directly to your device. You can also email a summary of your configuration including key parameters, layout description, and cost breakdown to any recipient.',
          },
          {
            q: 'How do I request a professional quote?',
            a: 'You can use the Contact page to send us your configuration details. Our team of experienced warehouse professionals will review your requirements and provide a detailed, project-specific quotation. We typically respond within 24–48 hours.',
          },
          {
            q: 'Do you offer layout design services?',
            a: 'Yes. While RackingHub provides free self-service planning tools, our team of experienced warehouse professionals can also provide expert reviews, custom engineering assessments, and detailed CAD layouts. Contact us to discuss your project requirements.',
          },
          {
            q: 'Can RackingHub recommend a supplier for my project?',
            a: 'Absolutely. Based on your project requirements — product type, location, volume, certifications needed — we can recommend suitable manufacturers from our curated network. Use the Contact page to share your requirements.',
          },
      ],
    },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-main section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Breadcrumbs items={[{ label: 'FAQ' }]} />
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Everything you need to know about warehouse racking systems, our
              free planner, supplier selection, and project workflows.
            </p>
          </div>

          {/* FAQ Categories */}
          {faqs.map((category) => (
            <div key={category.category} className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-bold text-slate-900">{category.category}</h2>
              </div>
              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-medium text-slate-900 select-none [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-12 bg-primary-950 rounded-2xl p-8 sm:p-10 text-center">
            <HelpCircle className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-white">
              Still Have Questions?
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
              Our team of warehouse professionals is ready to help. Send us your
              question and we will get back to you within 24-48 hours.
            </p>
            <Link
              href="/contact/"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Ask an Expert
              <Truck className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
