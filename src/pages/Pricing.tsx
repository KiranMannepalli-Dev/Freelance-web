import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { CtaSection } from '../components/CtaSection';
import { ConcentricRipple } from '../components/ConcentricRipple';
import CardModal from '../components/CardModal';
import SEO from '../components/SEO';

export default function Pricing() {


  const packages = [
    { title: "Web Development", inr: 25000, desc: "Custom SPA, CMS integration, and scalable hosting architecture.", features: ["React / Next.js Setup", "Responsive Design", "Basic SEO Optimization", "Admin Dashboard"] },
    { title: "App Development", inr: 85000, desc: "Native-like cross-platform mobile app for iOS and Android.", features: ["React Native / Flutter", "Push Notifications", "App Store Submission", "API Integration"] },
    { title: "Graphic & UI/UX", inr: 10000, desc: "Complete visual identity and high-fidelity product prototypes.", features: ["Brand Identity Kit", "Figma Prototypes", "Design System", "Marketing Assets"] },
    { title: "ERP Systems", inr: 150000, desc: "Custom business logic for operations, inventory, and billing.", features: ["Role-Based Access", "Inventory Tracking", "Custom Reports", "Secure Data Migration"] },
    { title: "Business Strategy", inr: 25000, desc: "Data-driven marketing, SEO, and conversion optimization.", features: ["Technical SEO Audit", "Funnel Optimization", "Analytics Setup", "Growth Consulting"] },
    { title: "HR Recruiting", inr: 20000, desc: "Dedicated tech talent sourcing, screening, and placement.", features: ["Technical Vetting", "Culture Fit Screening", "Interview Coordination", "Onboarding Support"] }
  ];

  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  return (
    <div className="w-full bg-white text-[#0B0B0F]">
      <SEO 
        title="No BS Pricing ✦ Transparent Investment Packages ⚡"
        description="Crystal-clear pricing for freelance website development, 60fps mobile apps, and custom ERP systems. Zero hidden fees, maximum ROI 🚀"
        canonicalPath="/pricing"
        keywords="freelance website development cost, web development packages, app development cost, ERP pricing, hire developer pricing India"
      />
      {/* 
        ========================================================================
        PRICING SECTION 
        ========================================================================
      */}
      <section className="relative px-6 sm:px-10 pt-28 pb-16 sm:pb-24 bg-white overflow-hidden">
        {/* Large Background Ripple */}
        <div className="absolute -left-48 -top-48 w-[800px] h-[800px] pointer-events-none opacity-30">
          <ConcentricRipple id="pricing-bg-ripple" variant="outline-rings" placement="top-left" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-widest text-[#EF4444] font-semibold mb-2">Transparent Pricing</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0B0B0F] tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Clear Investment, Real Returns
            </h1>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              Every business is unique. These starting packages provide a baseline for our premium services. We tailor every final proposal to your exact technical scope.
            </p>
            

          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedPackage(pkg)}
                className="relative overflow-hidden p-4 sm:p-8 bg-white border border-[#E5E7EB] rounded-[8px] hover:border-[#EF4444] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full min-h-0 cursor-pointer"
              >
                {/* Concentric Ripple on Hover */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-110">
                  <ConcentricRipple id={`pricing-card-ripple-${idx}`} variant="soft-rose" placement="bottom-right" />
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/0 to-[#EF4444]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[8px]" />
                
                <h3 className="text-sm sm:text-lg font-bold text-[#0B0B0F] mb-1.5 sm:mb-2 leading-tight">{pkg.title}</h3>
                <p className="hidden sm:block text-sm text-[#475569] leading-relaxed mb-6 flex-grow">{pkg.desc}</p>
                


                <ul className="hidden sm:block space-y-1.5 sm:space-y-3 mb-4 sm:mb-8">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-1.5 sm:gap-2.5 text-[9px] sm:text-sm text-[#0B0B0F] leading-snug">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#EF4444] shrink-0 sm:mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto sm:pt-4">
                  <Link 
                    to="/contact" 
                    onClick={(e) => e.stopPropagation()}
                    state={{ subject: `Inquiry: ${pkg.title} Package` }}
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-[6px] border border-[#E5E7EB] text-[10px] sm:text-sm font-semibold text-[#0B0B0F] bg-white group-hover:bg-[#EF4444] group-hover:border-[#EF4444] group-hover:text-white transition-all duration-300 uppercase sm:normal-case tracking-wider sm:tracking-normal"
                  >
                    <span className="sm:hidden">Proposal</span>
                    <span className="hidden sm:inline">Request Proposal</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                  <div className="sm:hidden text-[9px] text-[#475569] mt-3 border-t border-[#E5E7EB]/50 pt-2 text-center uppercase tracking-wider font-medium opacity-60">
                    Tap to expand
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        CTA SECTION 
        ========================================================================
      */}
      <CtaSection 
        id="pricing"
        badge="Get Started"
        title="Ready to build?"
        description="Contact us to get a precise quote tailored to your exact project requirements."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />

      {/* Mobile Card Modal Overlay */}
      {selectedPackage && (
        <CardModal
          title={selectedPackage.title}
          description={selectedPackage.desc}
          features={selectedPackage.features}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}
