import { Target, Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { ConcentricRipple } from '../components/ConcentricRipple';
import SEO from '../components/SEO';

export default function About() {
  const team = [
    {
      name: "Kiran Mannepalli",
      img: "/Kiran Mannepalli.jpeg",
      bgColor: "#FAD2A8",
      curve: "down" as const
    },
    {
      name: "Revanth Kumar Bandi",
      img: "/Revanth Bandi.jpg",
      bgColor: "#F9A8A8",
      curve: "up" as const
    }
  ];

  const values = [
    {
      title: "Technical Rigor",
      icon: <Target size={24} className="text-[#EF4444]" />,
      desc: "We write clean, documented, and resilient code built for long-term scalability without technical shortcuts."
    },
    {
      title: "Product-Driven Innovation",
      icon: <Lightbulb size={24} className="text-[#EF4444]" />,
      desc: "We adopt modern frameworks not for trends, but to deliver tangible speed, security, and market advantages."
    },
    {
      title: "Transparent Integrity",
      icon: <ShieldCheck size={24} className="text-[#EF4444]" />,
      desc: "No black-box engineering or hidden costs. We provide clear sprint updates, roadmap access, and direct team contact."
    },
    {
      title: "Human Partnerships",
      icon: <HeartHandshake size={24} className="text-[#EF4444]" />,
      desc: "We treat your business as our own, aligning engineering milestones directly with your commercial goals."
    }
  ];

  return (
    <div className="w-full bg-white text-[#0B0B0F]">
      <SEO 
        title="The Squad &amp; The Vision ✦ Who We Are ⚡"
        description="Meet the engineering squad behind Tekloria. We combine technical rigor with creative fire to build digital products that scale 🚀"
        canonicalPath="/about"
        keywords="about Tekloria, freelance development agency, software engineers Hyderabad, custom web development team"
      />
      {/* 
        ========================================================================
        ABOUT HERO (Background: Beige #F7F5F5 - design.md #12, #45, #76)
        ========================================================================
      */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pb-14 px-6 sm:px-10 bg-[#F7F5F5] border-b border-[#E5E7EB]">
        {/* Subtle Sand Tone Ripple Accent */}
        <div className="absolute -right-16 -top-16 w-96 h-96 pointer-events-none opacity-45">
          <ConcentricRipple
            id="about-hero-ripple"
            variant="neutral-sand"
            placement="top-right"
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-2">About Tekloria</div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0F] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ideas &rarr; Code &rarr; <span className="text-[#EF4444]">Real Solutions</span>
          </h1>
          <p className="text-[#475569] text-base sm:text-lg max-w-3xl leading-relaxed">
            Tekloria is a modern technology and engineering studio. We combine disciplined software engineering with clean design to build digital products that drive enterprise growth.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        WHO WE ARE & STORY (Background: White #FFFFFF - design.md #45)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Built for Ambitious Teams That Value Quality.
            </h2>
            <div className="w-10 h-1 bg-[#EF4444] rounded-full mb-4"></div>
          </div>
          <div className="lg:col-span-7 space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed">
            <p>
              Founded on the belief that software should be fast, reliable, and beautifully crafted, Tekloria provides comprehensive digital solutions ranging from high-converting websites and native mobile apps to custom enterprise ERP architectures.
            </p>
            <p>
              We operate at the intersection of modern product design and full-stack engineering. Rather than relying on generic templates, we engineer bespoke architectures specifically matched to our clients' operational workflows.
            </p>
          </div>
        </div>

        {/* Stats Grid with Mini-Target Pod Accents */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[6px]">
          <div className="relative overflow-hidden p-3 rounded-[6px] group">
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-[#EF4444] mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                100%
              </div>
              <div className="w-6 h-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ConcentricRipple variant="mini-target" id="stat-100" size="sm" />
              </div>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#475569]">Client Satisfaction</div>
          </div>

          <div className="relative overflow-hidden p-3 rounded-[6px] group">
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-[#EF4444] mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                50+
              </div>
              <div className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ConcentricRipple variant="mini-target" id="stat-50" size="sm" />
              </div>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#475569]">Delivered Solutions</div>
          </div>

          <div className="relative overflow-hidden p-3 rounded-[6px] group">
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-[#EF4444] mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                99.9%
              </div>
              <div className="w-6 h-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ConcentricRipple variant="mini-target" id="stat-99" size="sm" />
              </div>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#475569]">Uptime Architecture</div>
          </div>

          <div className="relative overflow-hidden p-3 rounded-[6px] group">
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-bold text-[#EF4444] mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                6+
              </div>
              <div className="w-6 h-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ConcentricRipple variant="mini-target" id="stat-6" size="sm" />
              </div>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#475569]">Core Disciplines</div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        CORE VALUES / OUR FOUNDATION (Background: Sand #EDE9E3 - design.md #12, #48)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 bg-[#EDE9E3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 text-center max-w-xl mx-auto">
            <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">Our Foundation</div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight mb-2.5" style={{ fontFamily: 'var(--font-display)' }}>
              Principles We Build By
            </h2>
            <p className="text-[#475569] text-sm">
              Consistent standards that define every line of code and every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden p-4 sm:p-6 bg-white border border-[#E5E7EB] rounded-[6px] flex flex-col justify-between group hover:border-[#EF4444] transition-all duration-300 hover:shadow-sm"
              >
                {/* Subtle Hover Micro-Ripple Accent */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  <ConcentricRipple id={`val-ripple-${idx}`} variant="soft-rose" placement="bottom-right" />
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#0B0B0F] mb-1 sm:mb-1.5 leading-snug">{val.title}</h3>
                    <p className="text-[#475569] text-[10px] sm:text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        OUR TEAM SECTION (Compact & Refined Wavy Ribbon Style)
        ========================================================================
      */}
      <section className="py-10 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto">
        {/* Hidden SVG Definitions for the Alternating Wave Cutouts */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <defs>
            <clipPath id="team-wave-down" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.08 Q 0.5,0.20 1,0.08 L 1,0.88 Q 0.5,1.00 0,0.88 Z" />
            </clipPath>
            <clipPath id="team-wave-up" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.08 Q 0.5,-0.04 1,0.08 L 1,0.88 Q 0.5,0.76 0,0.88 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="mb-8 text-center max-w-lg mx-auto">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1">Our Team</div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0B0B0F] tracking-tight mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
            The Minds Behind Tekloria
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
            A passionate multidisciplinary team engineering high-performance software.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[430px] mx-auto items-start">
          {team.map((member, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              {/* Compact Wavy Shaped Portrait Container */}
              <div
                className="w-full max-w-[155px] sm:max-w-[175px] aspect-[4/4.8] relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-sm"
                style={{
                  clipPath: member.curve === 'down' ? 'url(#team-wave-down)' : 'url(#team-wave-up)',
                  backgroundColor: member.bgColor
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Centered Name directly underneath */}
              <div className="text-center mt-2.5 sm:mt-3">
                <h3 className="text-sm sm:text-base font-semibold text-[#0B0B0F] tracking-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        CTA SECTION (Sleek, Compact & Stylish Contained Card - design.md #52)
        ========================================================================
      */}
      <CtaSection
        id="about"
        badge="Let's Build"
        title="Let's build something exceptional."
        description="Tell us about your next project, and let's turn your concept into fast, scalable, and reliable software."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
