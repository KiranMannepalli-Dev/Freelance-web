import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, PenTool, LayoutTemplate, LineChart, Users, ArrowRight, CheckCircle2, Bot, Workflow, Download, Eye, FileText } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { ConcentricRipple } from '../components/ConcentricRipple';
import CardModal from '../components/CardModal';
import BrochureModal from '../components/BrochureModal';
import { 
  WebIllustration, 
  AppIllustration, 
  DesignIllustration, 
  ErpIllustration, 
  StrategyIllustration, 
  HrIllustration 
} from '../components/ServiceIllustrations';
import { techStack } from '../components/TechLogos';

export default function Services() {
  const services = [
    { 
      title: "Web Development", 
      icon: <Code size={28} className="text-[#EF4444]" />, 
      desc: "High-performance websites and custom web applications built for modern businesses. Using React, Next.js, Node.js, and TypeScript, we build responsive, accessible, and ultra-fast web platforms.",
      features: ["Custom SPAs & SSR Web Apps", "Headless CMS & E-commerce", "High Core Web Vitals & SEO", "Secure REST & GraphQL APIs"],
      illustration: <WebIllustration />
    },
    { 
      title: "App Development", 
      icon: <Smartphone size={28} className="text-[#EF4444]" />, 
      desc: "Engage your mobile audience with high-performance iOS and Android applications. We engineer cross-platform and native solutions using React Native and Flutter with fluid, 60fps user experiences.",
      features: ["iOS & Android Cross-Platform", "Native Device Feature Integration", "Offline-first Synchronization", "App Store & Play Store Deployment"],
      illustration: <AppIllustration />
    },
    { 
      title: "Graphic & UI/UX Design", 
      icon: <PenTool size={28} className="text-[#EF4444]" />, 
      desc: "Visual communication is key to market distinction. Our creative team designs striking posters, comprehensive visual brand identities, design systems, and intuitive, human-centered UI/UX prototypes.",
      features: ["Design Systems & Brand Kits", "Product Wireframing & Prototyping", "Promotional & Marketing Posters", "Interactive Figma Hand-off"],
      illustration: <DesignIllustration />
    },
    { 
      title: "ERP Development", 
      icon: <LayoutTemplate size={28} className="text-[#EF4444]" />, 
      desc: "Streamline your business operations with our custom Enterprise Resource Planning systems. Centralize inventory, billing, human resources, and supply chains into a unified dashboard.",
      features: ["Role-Based Access Control", "Automated Billing & Reporting", "Inventory & Warehouse Tracking", "Custom Third-Party Integrations"],
      illustration: <ErpIllustration />
    },
    { 
      title: "Business Strategy & Marketing", 
      icon: <LineChart size={28} className="text-[#EF4444]" />, 
      desc: "Sustainable digital growth is engineered through data. We offer technical SEO, paid search strategies, funnel optimization, and strategic consulting to turn visits into revenue.",
      features: ["Technical SEO & Performance", "Conversion Rate Optimization (CRO)", "Multi-Channel Digital Strategy", "Analytics & Lifecycle Metrics"],
      illustration: <StrategyIllustration />
    },
    { 
      title: "HR Recruiting Services", 
      icon: <Users size={28} className="text-[#EF4444]" />, 
      desc: "Finding and onboarding the right technical talent. We screen, vet, and place senior software engineers, UI/UX designers, and product leaders who align with your technical bar and company culture.",
      features: ["Technical Screening & Assessment", "Direct Hire & Staff Augmentation", "Culture-Match Vetting", "Rapid Hiring Turnaround"],
      illustration: <HrIllustration />
    },
    { 
      title: "AI Chatbots & Agents", 
      icon: <Bot size={28} className="text-[#EF4444]" />, 
      desc: "Deploy intelligent conversational agents and autonomous AI systems to engage customers 24/7 and handle complex inquiries.",
      features: ["Custom AI Chatbots", "Autonomous Agents", "LLM Integration", "Customer Support AI"],
      illustration: <img src="/Chat bot-pana.svg" alt="AI Chatbot Illustration" className="w-full h-full object-contain drop-shadow-sm" />
    },
    { 
      title: "Business Automations", 
      icon: <Workflow size={28} className="text-[#EF4444]" />, 
      desc: "Streamline your operations with intelligent workflow automations to reduce manual tasks, eliminate errors, and scale effortlessly.",
      features: ["Business Process Automation", "API Integrations", "Data Synchronization", "Task Automation"],
      illustration: <img src="/Design Process-cuate.svg" alt="Business Automations Illustration" className="w-full h-full object-contain drop-shadow-sm" />
    }
  ];

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <div className="w-full bg-white text-[#0B0B0F]">
      {/* 
        ========================================================================
        PAGE HERO (Solid Light Background - design.md #74)
        ========================================================================
      */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pb-14 px-6 sm:px-10 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        {/* Subtle Neutral Ripple Watermark */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 pointer-events-none opacity-40">
          <ConcentricRipple 
            id="services-hero-ripple" 
            variant="neutral-light" 
            placement="bottom-right" 
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-2">Our Digital Capabilities</div>
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0F] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            End-to-End Solutions for <span className="text-[#EF4444]">Modern Businesses</span>
          </h1>
          <p className="text-[#475569] text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
            From single-page web applications to complex enterprise ERPs and cross-platform mobile apps, we design and build software that scales.
          </p>

          {/* Brochure Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/tekloria-services-brochure.pdf"
              download="Tekloria-Services-Brochure-2025.pdf"
              className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#D93636] text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
            >
              <Download size={15} />
              Download Services Brochure (PDF)
            </a>
            <button
              onClick={() => setIsBrochureOpen(true)}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#0B0B0F] border border-[#E5E7EB] hover:border-[#0B0B0F] font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all duration-200"
            >
              <Eye size={15} className="text-[#EF4444]" />
              Preview Brochure
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        DETAILED SERVICES (Background: White #FFFFFF - design.md #41, #42)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
          {services.map((svc, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedService(svc)}
              className="relative overflow-hidden p-4 sm:p-8 bg-white border border-[#E5E7EB] rounded-[6px] hover:border-[#EF4444] transition-all duration-300 flex flex-col justify-between group hover:shadow-sm min-h-0 sm:min-h-[350px] cursor-pointer"
            >

              {/* Vector / Media Illustration (Fitted to card blob area) */}
              {svc.illustration && (
                <div className="hidden sm:flex absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 pointer-events-none z-0 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 drop-shadow-sm items-end justify-end opacity-50 sm:opacity-100">
                  {svc.illustration}
                </div>
              )}

              <div className="relative z-10 max-w-[100%] sm:max-w-[65%]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3.5 mb-2 sm:mb-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {svc.icon}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-[#0B0B0F] leading-tight">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                  {svc.desc}
                </p>
                <div className="hidden sm:block space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-sm text-[#475569]">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#EF4444] shrink-0" />
                      <span className="truncate sm:whitespace-normal">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-1 sm:pt-2 relative z-10 mt-auto">
                <Link 
                  to="/contact" 
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-[#0B0B0F] hover:text-[#EF4444] transition-colors uppercase sm:normal-case tracking-wider sm:tracking-normal"
                >
                  <span className="sm:hidden">Consult</span>
                  <span className="hidden sm:inline">Request Consultation</span>
                  <ArrowRight className="w-3 h-3 sm:w-[13px] sm:h-[13px]" />
                </Link>
                <div className="sm:hidden text-[9px] text-[#475569] mt-3 border-t border-[#E5E7EB]/50 pt-2 text-center uppercase tracking-wider font-medium opacity-60">
                  Tap to expand
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        BROCHURE SHOWCASE BANNER
        ========================================================================
      */}
      <section className="pb-12 sm:pb-14 px-6 sm:px-10 max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-[#0B0B0F] text-white p-6 sm:p-10 border border-white/10 shadow-xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 pointer-events-none opacity-40">
            <ConcentricRipple id="brochure-banner-ripple" variant="soft-rose" placement="top-right" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EF4444] mb-3">
              <FileText size={15} />
              <span>Official Capabilities Catalog</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Need Our Complete Technical Services Brochure?
            </h2>
            
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
              Download our comprehensive 2025–2026 catalog detailing engineering architectures, delivery timelines, SLA guarantees, and service breakdowns in an executive-ready PDF format.
            </p>
            
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="/tekloria-services-brochure.pdf"
                download="Tekloria-Services-Brochure-2025.pdf"
                className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#D93636] text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
              >
                <Download size={15} />
                Download PDF Brochure
              </a>
              <button
                onClick={() => setIsBrochureOpen(true)}
                className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-white text-white hover:bg-white/10 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all duration-200"
              >
                <Eye size={15} />
                Interactive Preview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        TECHNOLOGY SECTION (Background: Soft Line #F8FAFC - design.md #47, #55)
        ========================================================================
      */}
      <section className="relative overflow-hidden py-10 sm:py-12 px-6 sm:px-10 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        {/* Technical Outlined Rings Watermark */}
        <div className="absolute -left-12 -bottom-12 w-72 h-72 pointer-events-none opacity-30">
          <ConcentricRipple 
            id="tech-stack-ripple" 
            variant="outline-rings" 
            placement="bottom-left" 
          />
        </div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">Technology Ecosystem</div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0B0B0F] tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Engineered with Industry-Standard Frameworks
          </h2>
          {/* Continuous Flowing Horizontal Line of All Exact Tech Logos */}
          <div className="relative overflow-hidden py-4 max-w-full">
            {/* Left and Right Edge Fade Masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20" />

            <div className="overflow-hidden">
              <div className="animate-marquee gap-5 sm:gap-7 flex items-center">
                {[...techStack, ...techStack].map((tech, idx) => (
                  <div 
                    key={`${tech.name}-${idx}`} 
                    title={tech.name}
                    className="group flex flex-col items-center justify-center shrink-0 transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 sm:w-13 sm:h-13 flex items-center justify-center p-2.5 rounded-[8px] bg-white border border-[#E5E7EB] hover:border-[#EF4444] shadow-xs group-hover:shadow-md transform group-hover:scale-115 group-hover:-translate-y-1 transition-all duration-300">
                      {tech.logo}
                    </div>
                    <span className="text-[11px] font-medium text-[#475569] group-hover:text-[#0B0B0F] mt-1.5 transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        CTA SECTION (Sleek, Compact & Stylish Contained Card - design.md #52)
        ========================================================================
      */}
      <CtaSection 
        id="services"
        badge="Get Started"
        title="Have a project in mind?"
        description="Let's discuss how we can engineer, launch, and scale your digital product."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
      />

      {/* Mobile Card Modal Overlay */}
      {selectedService && (
        <CardModal
          title={selectedService.title}
          description={selectedService.desc}
          icon={selectedService.icon}
          features={selectedService.features}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* Interactive Brochure Preview Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
