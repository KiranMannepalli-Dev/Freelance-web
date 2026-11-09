import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  PenTool, 
  LayoutTemplate, 
  LineChart, 
  Users, 
  CheckCircle2,
  Globe,
  ShoppingBag,
  Layers,
  Laptop,
  Sparkles
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { ConcentricRipple } from '../components/ConcentricRipple';
import FaqSection from '../components/FaqSection';
import SEO from '../components/SEO';
import { trackGetStartedClick } from '../lib/analytics';

function useTypewriter(text: string, speed = 35, startDelay = 500) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    let intervalId: number;
    let currentIndex = 0;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayed(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Home() {
  const [showPills, setShowPills] = useState(false);
  const typewriter = useTypewriter("Freelance Website Development, Mobile Apps & Business Software");

  useEffect(() => {
    const timer = setTimeout(() => setShowPills(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const websiteSpecialties = [
    {
      title: "Freelance Website Development",
      badge: "Agile & Direct",
      desc: "Fast, custom websites engineered with React, Next.js, and TypeScript. Work directly with experienced freelance developers without agency overhead.",
      icon: <Laptop size={22} className="text-[#EF4444]" />,
      highlights: ["React & Next.js SPAs", "Fast Time-to-Market", "Clean Maintainable Code"]
    },
    {
      title: "Mobile App Development",
      badge: "iOS & Android",
      desc: "End-to-end mobile applications built with React Native and Flutter. 60fps animations, native sensor integration, and store submissions.",
      icon: <Smartphone size={22} className="text-[#EF4444]" />,
      highlights: ["Cross-Platform Efficiency", "Offline-First Sync", "App Store & Play Store"]
    },
    {
      title: "Business & Corporate Websites",
      badge: "Lead Generating",
      desc: "High-credibility web platforms for businesses, enterprise startups, medical clinics, consulting firms, and local services to convert visitors into clients.",
      icon: <Globe size={22} className="text-[#EF4444]" />,
      highlights: ["SEO & Core Web Vitals", "Contact Funnels", "Brand Authority"]
    },
    {
      title: "E-Commerce & Online Stores",
      badge: "High Conversion",
      desc: "Custom storefronts and headless commerce with integrated payment gateways (Stripe, Razorpay), automated invoices, and inventory syncing.",
      icon: <ShoppingBag size={22} className="text-[#EF4444]" />,
      highlights: ["Multi-Currency Checkout", "Product Catalogues", "Cart Optimization"]
    },
    {
      title: "Custom Web Apps & SaaS",
      badge: "Scalable Systems",
      desc: "Interactive web applications, customer portals, billing platforms, and operational dashboards tailored specifically to your unique workflow.",
      icon: <Layers size={22} className="text-[#EF4444]" />,
      highlights: ["Role-Based Access", "API & Database Sync", "Real-Time Dashboards"]
    },
    {
      title: "All Types of Custom Sites",
      badge: "Bespoke Solutions",
      desc: "From portfolio websites and landing pages to real estate portals, educational platforms, and restaurant systems — built to fit any business model.",
      icon: <Sparkles size={22} className="text-[#EF4444]" />,
      highlights: ["Custom Functionality", "Fast Responsive Design", "Fully Managed Deploy"]
    }
  ];

  const services = [
    { 
      title: "Web Development", 
      icon: <Code size={24} className="text-[#EF4444]" />, 
      desc: "High-performance websites and custom web applications built for modern businesses." 
    },
    { 
      title: "App Development", 
      icon: <Smartphone size={24} className="text-[#EF4444]" />, 
      desc: "Engaging, scalable iOS and Android applications with native-level performance." 
    },
    { 
      title: "Graphic & UI/UX Design", 
      icon: <PenTool size={24} className="text-[#EF4444]" />, 
      desc: "Striking posters, branding identities, and human-centered digital experiences." 
    },
    { 
      title: "ERP Development", 
      icon: <LayoutTemplate size={24} className="text-[#EF4444]" />, 
      desc: "Custom Enterprise Resource Planning architectures to streamline your operations." 
    },
    { 
      title: "Business Strategy", 
      icon: <LineChart size={24} className="text-[#EF4444]" />, 
      desc: "Data-driven marketing, SEO optimization, and holistic strategic growth planning." 
    },
    { 
      title: "HR Recruiting Services", 
      icon: <Users size={24} className="text-[#EF4444]" />, 
      desc: "Specialized technical talent acquisition to build high-impact, cohesive teams." 
    }
  ];

  const processSteps = [
    { num: "01", title: "Discover", desc: "Understanding your vision, business targets, and user needs." },
    { num: "02", title: "Plan", desc: "Architecting the technical blueprint and product roadmap." },
    { num: "03", title: "Design", desc: "Crafting intuitive, human-centered UI/UX prototypes." },
    { num: "04", title: "Develop", desc: "Engineering resilient, high-speed code with modern frameworks." },
    { num: "05", title: "Test", desc: "Rigorous quality assurance, cross-device testing, and security." },
    { num: "06", title: "Launch", desc: "Seamless deployment, scaling, and ongoing performance support." },
  ];

  const clients = [
    {
      name: "KickZo",
      logo: "/KickZo Logo.png",
      category: "Footwear & E-Commerce",
    },
    {
      name: "Winev",
      logo: "/Second Logo for Winev-Photoroom.png",
      category: "Smart Mobility & Rentals",
    },
    {
      name: "Yedz Media",
      logo: "/Yedz Media Client.png",
      category: "Digital Media & Creative",
    },
  ];

  return (
    <div className="w-full bg-white">
      <SEO 
        title="Next-Gen Websites &amp; Mobile Apps That Hit Different ⚡"
        description="We engineer insane websites, 60fps mobile apps &amp; high-converting business platforms. ⚡ Freelance speed, enterprise craft, zero agency fluff 🚀"
        canonicalPath="/"
        keywords="freelance website development, freelance app development, custom web development, mobile app development, business related websites, all types of websites, hire freelance developer, React web development, Next.js developer, Tekloria"
      />
      {/* 
        ========================================================================
        HERO SECTION (Scoped ONLY to this container)
        ========================================================================
      */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0B0F] px-6 sm:px-10 py-24">
        {/* Scoped Hero Visual Environment (Prepared for Vectors) */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 75% 35%, #7a0f1b 0%, #42070d 40%, #170205 75%, #050001 100%)'
          }}
        >
          {/* Ambient Concentric Ripple in Hero backdrop */}
          <div className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none opacity-30 sm:opacity-40">
            <ConcentricRipple 
              id="hero-ambient" 
              variant="dark-ambient" 
              placement="bottom-right" 
            />
          </div>
          {/* Subtle Technical Outlined Ripple Arc in Hero top-right */}
          <div className="absolute right-0 top-0 w-80 h-80 pointer-events-none opacity-20 sm:opacity-30">
            <ConcentricRipple 
              id="hero-outline" 
              variant="outline-red" 
              placement="top-right" 
            />
          </div>
        </div>

        {/* Hero Content & Vector Illustration (2-Column Responsive Layout) */}
        <div className="max-w-[1200px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-12 md:mt-0">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-[660px]">
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#EF4444] mb-4">
              <span>Freelance Web &amp; App Studio</span>
              <span className="text-white/40 hidden sm:inline">&bull;</span>
              <span>Ideas &rarr; Code &rarr; Real Solutions</span>
            </div>

            <h1 
              className="font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl mb-6 leading-[1.12]"
              style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
            >
              <span style={{ color: '#FFFFFF' }}>Build Your Vision with Modern</span>{' '}
              <span className="text-[#EF4444]">Technology</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg lg:text-xl font-normal mb-8 leading-relaxed min-h-[56px]">
              {typewriter.displayed}
              {!typewriter.done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-[#EF4444] align-middle ml-1 animate-pulse" />
              )}
            </p>

            <div 
              className="flex flex-wrap items-center gap-4 transition-all duration-500"
              style={{ 
                opacity: showPills ? 1 : 0, 
                transform: showPills ? 'translateY(0)' : 'translateY(12px)' 
              }}
            >
              {/* Primary CTA (design.md #38) */}
              <Link 
                to="/contact" 
                onClick={() => trackGetStartedClick({
                  button_location: 'home_hero',
                  button_text: 'Start a Project',
                })}
                className="inline-flex items-center justify-center bg-[#EF4444] hover:bg-[#D93636] text-white font-medium text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-200"
              >
                Start a Project
              </Link>

              {/* Outline CTA (design.md #38) */}
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-white hover:text-[#0B0B0F] font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 gap-2"
              >
                Explore Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero SVG Illustration */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center relative">

            <div className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] relative group">

              {/* ── Ambient red glow behind image ── */}
              <div className="animate-glow absolute inset-0 rounded-full bg-[#EF4444]/20 blur-3xl pointer-events-none -z-10 scale-110" />

              {/* ── Main illustration ── */}
              <img
                src="/Hero section.svg"
                alt="Tekloria Digital Solutions Ecosystem"
                className="w-full h-auto object-contain select-none pointer-events-none relative z-10"
              />

              {/* ── Electric Shock SVG overlay ─────────────────────────────────
                  Three independent lightning bolts drawn at different corners /
                  angles with staggered animation delays so they fire at
                  non-uniform intervals, mimicking real electricity crackling.
              ──────────────────────────────────────────────────────────────── */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 560 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Bolt 1 — top-left arc down to center-right */}
                <g className="animate-electric-1">
                  {/* Glow halo */}
                  <path
                    d="M 80 60 L 130 140 L 105 145 L 165 240 L 140 248 L 210 340"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.18"
                    filter="url(#bolt-blur)"
                  />
                  {/* Sharp bolt */}
                  <path
                    className="animate-bolt-1"
                    d="M 80 60 L 130 140 L 105 145 L 165 240 L 140 248 L 210 340"
                    stroke="#FF6B6B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Bright core */}
                  <path
                    className="animate-bolt-1"
                    d="M 80 60 L 130 140 L 105 145 L 165 240 L 140 248 L 210 340"
                    stroke="white"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                  {/* Spark tips */}
                  <circle cx="80" cy="60" r="3" fill="#FF6B6B" className="animate-electric-1" />
                  <circle cx="210" cy="340" r="3" fill="#FF6B6B" className="animate-electric-1" />
                </g>

                {/* Bolt 2 — top-right arc down to center-left */}
                <g className="animate-electric-2">
                  <path
                    d="M 480 80 L 420 170 L 448 178 L 380 270 L 408 280 L 340 380"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.18"
                    filter="url(#bolt-blur)"
                  />
                  <path
                    className="animate-bolt-2"
                    d="M 480 80 L 420 170 L 448 178 L 380 270 L 408 280 L 340 380"
                    stroke="#FF6B6B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="animate-bolt-2"
                    d="M 480 80 L 420 170 L 448 178 L 380 270 L 408 280 L 340 380"
                    stroke="white"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                  <circle cx="480" cy="80" r="3" fill="#FF6B6B" className="animate-electric-2" />
                  <circle cx="340" cy="380" r="3" fill="#FF6B6B" className="animate-electric-2" />
                </g>

                {/* Bolt 3 — short bottom-center burst */}
                <g className="animate-electric-3">
                  <path
                    d="M 270 420 L 310 470 L 288 476 L 320 520"
                    stroke="#EF4444"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.18"
                    filter="url(#bolt-blur)"
                  />
                  <path
                    className="animate-bolt-3"
                    d="M 270 420 L 310 470 L 288 476 L 320 520"
                    stroke="#FF6B6B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="animate-bolt-3"
                    d="M 270 420 L 310 470 L 288 476 L 320 520"
                    stroke="white"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                  <circle cx="270" cy="420" r="2.5" fill="#FF6B6B" className="animate-electric-3" />
                  <circle cx="320" cy="520" r="2.5" fill="#FF6B6B" className="animate-electric-3" />
                </g>

                {/* Shared blur filter for the glow halos */}
                <defs>
                  <filter id="bolt-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" />
                  </filter>
                </defs>
              </svg>

            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        CLIENTS & PARTNERS SECTION (Background: Soft Line #F8FAFC - design.md #55)
        ========================================================================
      */}
      <section className="relative overflow-hidden py-10 sm:py-12 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 mb-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#EF4444] font-semibold mb-2">
            <span>Trusted Partnerships</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0B0B0F] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Powering Next-Gen Solutions for Leading Brands
          </h2>
        </div>

        {/* Continuous Flowing Horizontal Marquee of Client Logos */}
        <div className="relative overflow-hidden max-w-full">
          {/* Edge Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20" />

          <div className="overflow-hidden py-2">
            <div className="animate-marquee gap-4 sm:gap-6 flex items-center">
              {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, idx) => (
                <div 
                  key={`${client.name}-${idx}`} 
                  title={`${client.name} — ${client.category}`}
                  className="group flex flex-col items-center justify-center shrink-0 transition-all duration-300 cursor-default"
                >
                  <div className="h-16 sm:h-20 w-36 sm:w-44 px-4 sm:px-6 py-2.5 rounded-[6px] bg-white border border-[#E5E7EB] hover:border-[#EF4444]/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] group-hover:shadow-md transform group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-10 sm:max-h-12 max-w-full object-contain transform group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-[#64748B] group-hover:text-[#0B0B0F] mt-2 transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SERVICES SECTION (Background: White #FFFFFF - design.md #41, #42, #55)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto bg-white">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">Our Capabilities</div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight mb-2.5" style={{ fontFamily: 'var(--font-display)' }}>
            Core Digital Solutions
          </h2>
          <p className="text-[#475569] text-sm sm:text-base max-w-2xl leading-relaxed">
            We provide comprehensive, end-to-end digital engineering and design services to scale modern businesses.
          </p>
        </div>

        {/* 6-Card Grid (design.md #31, #32, #41, #42) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="relative overflow-hidden p-4 sm:p-6 bg-white border border-[#E5E7EB] rounded-[6px] transition-all duration-300 hover:border-[#EF4444] hover:shadow-sm flex flex-col justify-between group"
            >
              {/* Subtle Concentric Ripple Corner Accent on Hover */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-75 transition-all duration-300 transform group-hover:scale-110">
                <ConcentricRipple 
                  id={`home-svc-${i}`} 
                  variant="soft-rose" 
                  placement="bottom-right" 
                />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#F8FAFC] flex items-center justify-center border border-[#E5E7EB] shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {svc.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-[#0B0B0F] leading-tight">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {svc.desc}
                </p>
              </div>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-[#0B0B0F] group-hover:text-[#EF4444] transition-colors relative z-10 mt-auto uppercase sm:normal-case tracking-wider sm:tracking-normal"
              >
                <span className="sm:hidden">Explore</span>
                <span className="hidden sm:inline">Explore service</span>
                <ArrowRight size={13} className="w-3 h-3 sm:w-[13px] sm:h-[13px] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        ALL TYPES OF WEBSITES & APPS (SEO Focus: Freelance Web, Mobile, Business)
        ========================================================================
      */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 max-w-[1200px] mx-auto bg-white border-t border-[#E5E7EB]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">
              Specialized Development
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B0B0F] tracking-tight mb-2.5" style={{ fontFamily: 'var(--font-display)' }}>
              All Types of Websites &amp; Mobile Applications
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              From nimble freelance website development to enterprise mobile applications and business platforms — we engineer solutions that perform, rank on Google, and convert.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() => trackGetStartedClick({
              button_location: 'home_specialties_hire_dev',
              button_text: 'Hire a Developer',
            })}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#EF4444] hover:bg-[#D93636] px-5 py-2.5 rounded-full transition-all duration-200 shrink-0 self-start md:self-auto"
          >
            Hire a Developer <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {websiteSpecialties.map((spec, i) => (
            <div
              key={i}
              className="relative overflow-hidden p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-[8px] transition-all duration-300 hover:border-[#EF4444] hover:shadow-md flex flex-col justify-between group"
            >
              {/* Concentric Ripple Corner Accent on Hover */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-75 transition-all duration-300 transform group-hover:scale-110">
                <ConcentricRipple 
                  id={`home-spec-${i}`} 
                  variant="soft-rose" 
                  placement="bottom-right" 
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[6px] bg-[#F8FAFC] flex items-center justify-center border border-[#E5E7EB]">
                    {spec.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#F8FAFC] text-[#475569] border border-[#E5E7EB] rounded-full">
                    {spec.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-[#0B0B0F] mb-2 leading-snug">
                  {spec.title}
                </h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-4">
                  {spec.desc}
                </p>

                <div className="space-y-1.5 mb-5 border-t border-[#F1F5F9] pt-3">
                  {spec.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#475569]">
                      <CheckCircle2 size={13} className="text-[#EF4444] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => trackGetStartedClick({
                  button_location: 'home_specialties_card',
                  button_text: 'Request Project Scope',
                  service_name: spec.title,
                })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0B0F] group-hover:text-[#EF4444] transition-colors relative z-10 mt-auto"
              >
                <span>Request Project Scope</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        WHY CHOOSE TEKLORIA (Background: Soft Line #F8FAFC - design.md #55)
        ========================================================================
      */}
      <section className="relative overflow-hidden py-12 sm:py-14 px-6 sm:px-10 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        {/* Subtle Architectural Neutral Ripple Watermark */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 pointer-events-none opacity-40">
          <ConcentricRipple 
            id="why-choose-ripple" 
            variant="neutral-light" 
            placement="bottom-right" 
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">Why Tekloria</div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Engineering Growth, Not Just Software.
              </h2>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-5">
                We bridge the gap between creative visual design and enterprise-level full-stack engineering, delivering real business outcomes.
              </p>
              <div className="space-y-2.5 text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#EF4444]" />
                  <span>Fast Delivery without Technical Debt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#EF4444]" />
                  <span>Clean Code Architecture & Modern Tech Stacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#EF4444]" />
                  <span>Transparent Communication & Dedicated Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 bg-white border border-[#E5E7EB] rounded-[6px]">
                <h4 className="text-xs sm:text-sm font-semibold text-[#0B0B0F] mb-1 sm:mb-1.5 leading-tight">Innovative Strategies</h4>
                <p className="text-[#475569] text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Tailored solutions engineered specifically for your unique market positioning and user engagement targets.
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-white border border-[#E5E7EB] rounded-[6px]">
                <h4 className="text-xs sm:text-sm font-semibold text-[#0B0B0F] mb-1 sm:mb-1.5 leading-tight">Multidisciplinary Team</h4>
                <p className="text-[#475569] text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                  From UI/UX creatives to cloud architects, our team works cohesively across every touchpoint.
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-white border border-[#E5E7EB] rounded-[6px]">
                <h4 className="text-xs sm:text-sm font-semibold text-[#0B0B0F] mb-1 sm:mb-1.5 leading-tight">End-to-End Delivery</h4>
                <p className="text-[#475569] text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                  From initial concept wireframing to production deployment and maintenance, we handle the entire product lifecycle.
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-white border border-[#E5E7EB] rounded-[6px]">
                <h4 className="text-xs sm:text-sm font-semibold text-[#0B0B0F] mb-1 sm:mb-1.5 leading-tight">High Security & Speed</h4>
                <p className="text-[#475569] text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Optimized for instant page loads, robust API data protection, and enterprise-grade scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        PROCESS SECTION (Background: White #FFFFFF - design.md #46, #55)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto bg-white">
        <div className="mb-8 text-center max-w-xl mx-auto">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">Our Process</div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight mb-2.5" style={{ fontFamily: 'var(--font-display)' }}>
            The Development Journey
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed">
            A structured, transparent workflow designed to guarantee precision and speed from day one.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative overflow-hidden p-4 sm:p-6 border border-[#E5E7EB] rounded-[6px] bg-[#FFFFFF] hover:border-[#EF4444] transition-all duration-200 group flex flex-col">
              {/* Mini-target ripple as a subtle corner watermark */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                <ConcentricRipple 
                  id={`home-process-${idx}`} 
                  variant="outline-red" 
                  placement="bottom-right" 
                />
              </div>

              <div className="flex flex-col gap-1 sm:gap-2 mb-2 sm:mb-3">
                <span className="text-lg sm:text-2xl font-bold text-[#E5E7EB] group-hover:text-[#EF4444]/20 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.num}
                </span>
                <h3 className="text-sm sm:text-lg font-semibold text-[#0B0B0F] leading-tight">{step.title}</h3>
              </div>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        TESTIMONIALS / SUPPORTING (Background: Sand #EDE9E3 - design.md #48, #55)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 bg-[#EDE9E3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">Testimonials</div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Trusted by Ambitious Teams
            </h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Testimonial 1 */}
            <div className="sticky lg:static top-[100px] z-[1] w-full max-w-3xl lg:max-w-none mx-auto relative overflow-hidden p-4 sm:p-6 bg-white rounded-[6px] border border-[#E5E7EB] flex flex-col justify-between group hover:border-[#EF4444]/40 transition-all duration-300 shadow-sm">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-45 transition-opacity duration-300">
                <ConcentricRipple id="test-1" variant="neutral-sand" placement="bottom-right" />
              </div>
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex gap-1 sm:gap-1.5 text-[#FBBC05]">
                  {/* 5 Stars */}
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Google G Logo */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6 relative z-10 font-medium">
                "Tekloria's team was amazing to work with. They delivered our custom web platform way ahead of schedule and the UI is incredibly smooth. Highly recommend them for any custom development."
              </p>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EF4444] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  R
                </div>
                <div>
                  <div className="font-semibold text-base text-[#0B0B0F]">Rahul Sharma</div>
                  <div className="text-xs text-[#475569]">2 weeks ago</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="sticky lg:static top-[120px] z-[2] w-full max-w-3xl lg:max-w-none mx-auto relative overflow-hidden p-4 sm:p-6 bg-white rounded-[6px] border border-[#E5E7EB] flex flex-col justify-between group hover:border-[#EF4444]/40 transition-all duration-300 shadow-md lg:shadow-sm">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-45 transition-opacity duration-300">
                <ConcentricRipple id="test-2" variant="neutral-sand" placement="bottom-right" />
              </div>
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex gap-1 sm:gap-1.5 text-[#FBBC05]">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6 relative z-10 font-medium">
                "We hired them for a complete rebrand and app development. The entire process was so transparent and the final product exceeded all our expectations. Best tech team in Hyderabad!"
              </p>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  P
                </div>
                <div>
                  <div className="font-semibold text-base text-[#0B0B0F]">Priya Desai</div>
                  <div className="text-xs text-[#475569]">1 month ago</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="sticky lg:static top-[140px] z-[3] w-full max-w-3xl lg:max-w-none mx-auto relative overflow-hidden p-4 sm:p-6 bg-white rounded-[6px] border border-[#E5E7EB] flex flex-col justify-between group hover:border-[#EF4444]/40 transition-all duration-300 shadow-lg lg:shadow-sm">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-45 transition-opacity duration-300">
                <ConcentricRipple id="test-3" variant="neutral-sand" placement="bottom-right" />
              </div>
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex gap-1 sm:gap-1.5 text-[#FBBC05]">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6 relative z-10 font-medium">
                "Their custom ERP solution completely transformed how we manage our inventory. Very professional, responsive, and they actually understand business logic, not just coding."
              </p>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  V
                </div>
                <div>
                  <div className="font-semibold text-base text-[#0B0B0F]">Vikram Reddy</div>
                  <div className="text-xs text-[#475569]">3 months ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FAQ & ANSWER ENGINE OPTIMIZATION (AEO) SECTION
        ========================================================================
      */}
      <FaqSection />

      {/* 
        ========================================================================
        FINAL CTA SECTION (With Layered Concentric Rings in Tekloria Brand Colors)
        ========================================================================
      */}
      <CtaSection 
        id="home"
        badge="Next Steps"
        title="Ready to scale your business?"
        description="Let's discuss your product goals, engineering roadmap, and build your next digital solution together."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
}
