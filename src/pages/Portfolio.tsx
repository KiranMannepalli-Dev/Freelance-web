import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { ConcentricRipple } from '../components/ConcentricRipple';
import SEO from '../components/SEO';

interface Project {
  title: string;
  category: string;
  desc: string;
  img: string;
  tech: string[];
  scope: string;
}

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const categories = ['All', 'Web Development', 'App Development', 'ERP Systems', 'Graphic Design'];

  const projects = [
    { 
      title: "Fintech Core Banking App", 
      category: "App Development", 
      desc: "A responsive, biometric-secured mobile banking application handling 100k+ daily transactions.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
      tech: ["React Native", "TypeScript", "Node.js"],
      scope: "<h4 class='font-semibold text-[#0B0B0F] mb-2'>Overview</h4><p class='mb-4'>Developed a secure, high-performance banking application designed for scalability and seamless user onboarding. The app integrates advanced biometric authentication, real-time transaction processing, and a comprehensive ledger system.</p><h4 class='font-semibold text-[#0B0B0F] mb-2'>Key Deliverables</h4><ul class='list-disc pl-5 mb-4 space-y-1 text-sm'><li>Cross-platform mobile application (iOS & Android)</li><li>Biometric login (FaceID / Fingerprint)</li><li>End-to-end encrypted ledger syncing</li><li>Admin dashboard for compliance tracking</li></ul>"
    },
    { 
      title: "Omnichannel E-Commerce Hub", 
      category: "Web Development", 
      desc: "Headless Next.js storefront integrated with Stripe and custom inventory management.",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=900",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      scope: "<h4 class='font-semibold text-[#0B0B0F] mb-2'>Overview</h4><p class='mb-4'>A high-speed, headless e-commerce solution architected for a multi-regional retailer. The system decoupling allows rapid front-end iteration while maintaining robust back-end integrations.</p><h4 class='font-semibold text-[#0B0B0F] mb-2'>Key Deliverables</h4><ul class='list-disc pl-5 mb-4 space-y-1 text-sm'><li>Headless Next.js storefront</li><li>Stripe payment gateway integration</li><li>Real-time custom inventory sync</li><li>Automated transactional emails</li></ul>"
    },
    { 
      title: "Enterprise Supply Chain ERP", 
      category: "ERP Systems", 
      desc: "Centralized ERP suite for manufacturing inventory, warehouse tracking, and automated invoicing.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
      tech: ["React", "Python", "Docker"],
      scope: "<h4 class='font-semibold text-[#0B0B0F] mb-2'>Overview</h4><p class='mb-4'>A bespoke Enterprise Resource Planning (ERP) platform developed for a large-scale manufacturing client to eliminate data silos and automate manual workflows.</p><h4 class='font-semibold text-[#0B0B0F] mb-2'>Key Deliverables</h4><ul class='list-disc pl-5 mb-4 space-y-1 text-sm'><li>Centralized data warehouse</li><li>Automated invoicing & billing modules</li><li>Live inventory tracking dashboard</li><li>Role-based access control (RBAC)</li></ul>"
    },
    { 
      title: "Aura Visual Brand & Design System", 
      category: "Graphic Design", 
      desc: "Complete visual identity overhaul, promotional poster series, and component library.",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=900",
      tech: ["Figma", "Branding", "UI/UX"],
      scope: "<h4 class='font-semibold text-[#0B0B0F] mb-2'>Overview</h4><p class='mb-4'>A comprehensive brand overhaul and digital design system created to unify Aura's presence across physical and digital touchpoints.</p><h4 class='font-semibold text-[#0B0B0F] mb-2'>Key Deliverables</h4><ul class='list-disc pl-5 mb-4 space-y-1 text-sm'><li>Brand identity & logo guidelines</li><li>UI/UX component library in Figma</li><li>Promotional digital poster series</li><li>Interactive high-fidelity prototypes</li></ul>"
    },
    { 
      title: "SaaS Analytics & Billing Dashboard", 
      category: "Web Development", 
      desc: "Real-time subscription metrics, multi-tenant billing, and role-based permissions.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=900",
      tech: ["Next.js", "Supabase", "Chart.js"],
      scope: "<h4 class='font-semibold text-[#0B0B0F] mb-2'>Overview</h4><p class='mb-4'>A data-intensive SaaS dashboard enabling product teams to track user engagement, subscription churn, and revenue metrics in real-time.</p><h4 class='font-semibold text-[#0B0B0F] mb-2'>Key Deliverables</h4><ul class='list-disc pl-5 mb-4 space-y-1 text-sm'><li>Multi-tenant architecture</li><li>Dynamic real-time charting (Chart.js)</li><li>Automated subscription billing workflows</li><li>Advanced filtering & reporting</li></ul>"
    },
    { 
      title: "Health & Wellness Mobile Companion", 
      category: "App Development", 
      desc: "Cross-platform mobile app with telemetry tracking and personalized health insights.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=900",
      tech: ["Flutter", "Firebase", "HealthKit"],
      scope: "<h4 class='font-semibold text-[#0B0B0F] mb-2'>Overview</h4><p class='mb-4'>A unified mobile companion app that interfaces with native health frameworks to provide actionable wellness metrics and coaching to end-users.</p><h4 class='font-semibold text-[#0B0B0F] mb-2'>Key Deliverables</h4><ul class='list-disc pl-5 mb-4 space-y-1 text-sm'><li>Apple HealthKit & Google Fit integration</li><li>Personalized insight generation algorithm</li><li>Telemetry tracking & charting</li><li>Offline-first data caching via Firebase</li></ul>"
    },
  ];

  const previousWorks = [
    {
      title: "Dental Clinic Platform",
      link: "https://dental-clinic-api-henna.vercel.app/",
      img: "/Dental Clinic.png"
    },
    {
      title: "Winev Bike Rentals",
      link: "https://winev-bike-rentals.vercel.app/",
      img: "/Winev Bikes.png"
    },
    {
      title: "Elite Real Estate",
      link: "https://elite-realestate.web.app/",
      img: "/Realestate.png"
    },
    {
      title: "Home Dream Interio",
      link: "https://home-dream-interio.vercel.app/",
      img: "/Home Interior.png"
    },
    {
      title: "Core Engine",
      link: "https://cro-engine-seven.vercel.app/",
      img: "/Core Engine.png"
    },
    {
      title: "Mentor OS AI",
      link: "https://mentor-ai-web-chi.vercel.app/",
      img: "/Mentor OS.png"
    }
  ];

  const filtered = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="w-full bg-white text-[#0B0B0F]">
      <SEO 
        title="Proof Of Work ✦ Insane Web &amp; App Case Studies ⚡"
        description="Check out our latest proof of work. Live web applications, fintech apps, e-commerce hubs, and custom enterprise tools that drive real growth 🚀"
        canonicalPath="/portfolio"
        keywords="freelance website portfolio, mobile app portfolio, React projects, Next.js web applications, client case studies, Tekloria work"
      />
      {/* 
        ========================================================================
        PORTFOLIO HERO (Solid Light Background - design.md #75)
        ========================================================================
      */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pb-14 px-6 sm:px-10 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        {/* Subtle Neutral Ripple Watermark */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 pointer-events-none opacity-40">
          <ConcentricRipple 
            id="portfolio-hero-ripple" 
            variant="neutral-light" 
            placement="bottom-right" 
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-2">Featured Work</div>
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0F] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Engineered for Impact & <span className="text-[#EF4444]">Performance</span>
          </h1>
          <p className="text-[#475569] text-base sm:text-lg max-w-3xl leading-relaxed">
            Explore our recent client case studies across custom web applications, cross-platform apps, enterprise systems, and visual design.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  selectedFilter === cat
                    ? 'bg-[#0B0B0F] text-white'
                    : 'bg-white text-[#475569] border border-[#E5E7EB] hover:border-[#0B0B0F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        PROJECT GRID (design.md #43, #44)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((proj, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden bg-white border border-[#E5E7EB] rounded-[6px] hover:border-[#EF4444] transition-all duration-300 flex flex-col justify-between group hover:shadow-sm min-h-[260px]"
            >
              <div className="w-full h-32 sm:h-36 overflow-hidden bg-[#F8FAFC] relative shrink-0">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                {/* Floating Mini-Target Indicator on Image Hover */}
                <div className="absolute top-3 right-3 w-7 h-7 opacity-0 group-hover:opacity-95 transition-all duration-300 pointer-events-none drop-shadow-md transform group-hover:scale-110">
                  <ConcentricRipple id={`proj-target-${idx}`} variant="mini-target" size="sm" />
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow relative overflow-hidden">
                {/* Micro-Ripple Corner Accent on Card Hover */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  <ConcentricRipple id={`proj-card-${idx}`} variant="soft-rose" placement="bottom-right" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base font-semibold text-[#0B0B0F] mb-1.5 line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-[#475569] text-[11px] sm:text-xs leading-relaxed mb-3 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] relative z-10 flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#0B0B0F] group-hover:text-[#EF4444] transition-colors"
                  >
                    View Project Scope <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        PREVIOUS WORKS SECTION
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto border-t border-[#E5E7EB]">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0B0B0F] tracking-tight mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Previous Works
          </h2>
          <p className="text-[#475569] text-sm">Explore some of our recently deployed client projects and applications.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previousWorks.map((work, idx) => (
            <a 
              key={idx}
              href={work.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative bg-white border border-[#E5E7EB] rounded-[6px] group hover:border-[#EF4444] transition-all duration-300 flex flex-col overflow-hidden hover:shadow-sm"
            >
              <div className="w-full h-40 sm:h-48 overflow-hidden bg-[#F8FAFC]">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-[#0B0B0F] mb-3">{work.title}</h3>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#475569] group-hover:text-[#EF4444] transition-colors mt-auto">
                  Visit Live Site <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* 
        ========================================================================
        CTA SECTION (Sleek, Compact & Stylish Contained Card - design.md #52)
        ========================================================================
      */}
      <CtaSection 
        id="portfolio"
        badge="Tailored Proof"
        title="Want to see tailored case studies?"
        description="Tell us about your industry, and we'll prepare relevant live work samples and architectural approaches."
        primaryButtonText="Get in touch"
        primaryButtonLink="/contact"
      />

      {/* Project Scope Modal */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${selectedProject ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-[#0B0B0F]/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        />
        <div className={`relative w-full max-w-2xl max-h-[85vh] bg-white rounded-[12px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${selectedProject ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
          
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E5E7EB] bg-[#F8FAFC]">
            <h3 className="text-lg sm:text-xl font-bold text-[#0B0B0F]">
              {selectedProject?.title} <span className="hidden sm:inline font-normal text-[#475569]">- Project Scope</span>
            </h3>
            <button 
              onClick={() => setSelectedProject(null)}
              className="p-2 bg-white border border-[#E5E7EB] hover:bg-[#EF4444] hover:text-white hover:border-[#EF4444] rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="p-6 sm:p-8 overflow-y-auto text-sm sm:text-base text-[#475569] leading-relaxed custom-scrollbar">
            {selectedProject?.scope && (
              <div dangerouslySetInnerHTML={{ __html: selectedProject.scope }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
