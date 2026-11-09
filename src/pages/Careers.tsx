import { useState } from 'react';
import {
  Rocket,
  BrainCircuit,
  Users,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Send,
  Phone,
  ClipboardCheck,
  BadgeCheck,
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { ConcentricRipple } from '../components/ConcentricRipple';
import CardModal from '../components/CardModal';
import SEO from '../components/SEO';

// ─── Open Roles ──────────────────────────────────────────────────────────────
const openRoles = [
  {
    title: 'Business Development Manager (BDM)',
    icon: <Briefcase size={20} className="text-[#EF4444]" />,
    type: 'Internship',
    location: 'Remote / Hybrid',
    team: 'Sales & Growth',
    desc: 'Drive enterprise sales and strategic partnerships for Tekloria. You will be responsible for lead generation, client acquisition, and expanding our footprint in the digital product engineering market.',
    tags: ['B2B Sales', 'Lead Gen', 'Client Relations', 'Strategy'],
  },
];

// ─── Perks ────────────────────────────────────────────────────────────────────
const perks = [
  {
    icon: <Rocket size={22} className="text-[#EF4444]" />,
    title: 'Ship Real Products',
    desc: 'From day one you work on live client projects that reach real users — no toy exercises or internal demo apps.',
  },
  {
    icon: <BrainCircuit size={22} className="text-[#EF4444]" />,
    title: 'Always Learning',
    desc: 'Access to premium courses, conference passes, and internal knowledge-sharing sessions every sprint.',
  },
  {
    icon: <Users size={22} className="text-[#EF4444]" />,
    title: 'Small, Senior Team',
    desc: 'Work directly alongside the founders and senior engineers — no bureaucracy, no micro-management.',
  },
  {
    icon: <HeartHandshake size={22} className="text-[#EF4444]" />,
    title: 'People-First Culture',
    desc: 'Flexible hours, async-first communication, and a team that genuinely cares about your growth and wellbeing.',
  },
];

// ─── Hiring Process ───────────────────────────────────────────────────────────
const process = [
  { icon: <Send size={20} className="text-[#EF4444]" />, title: 'Apply', desc: 'Send us your resume and a short note about what excites you most about the role.' },
  { icon: <Phone size={20} className="text-[#EF4444]" />, title: 'Intro Call', desc: '30-minute video chat with a founder to learn about each other and your background.' },
  { icon: <ClipboardCheck size={20} className="text-[#EF4444]" />, title: 'Technical Review', desc: 'A focused, take-home challenge or portfolio review — always relevant to the actual work.' },
  { icon: <BadgeCheck size={20} className="text-[#EF4444]" />, title: 'Offer', desc: 'We move fast. If you are a great fit, you will hear from us within days, not weeks.' },
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<typeof openRoles[0] | null>(null);

  return (
    <div className="w-full bg-white text-[#0B0B0F]">
      <SEO 
        title="Join The Squad ✦ Build The Future With Us ⚡"
        description="Love shipping fast, clean, and beautiful software? Join Tekloria's ambitious engineering studio. View our open roles 🚀"
        canonicalPath="/careers"
        keywords="careers Tekloria, software engineer jobs, web developer hiring Hyderabad, UI UX designer jobs"
      />

      {/* ======================================================================
          HERO
      ====================================================================== */}
      <section className="relative overflow-hidden pt-28 pb-14 px-6 sm:px-10 bg-[#F7F5F5] border-b border-[#E5E7EB]">
        <div className="absolute -right-16 -top-16 w-96 h-96 pointer-events-none opacity-45">
          <ConcentricRipple id="careers-hero-ripple" variant="neutral-sand" placement="top-right" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-2">
            Join Tekloria
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0F] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Build the Future of{' '}
            <span className="text-[#EF4444]">Digital Products</span>
          </h1>
          <p className="text-[#475569] text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            We are a small, ambitious engineering studio. If you love crafting fast, beautiful, and reliable software — and want your work to matter — you will fit right in.
          </p>
          <a
            href="#open-roles"
            className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#D93636] text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-sm"
          >
            See Open Roles <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ======================================================================
          WHY TEKLORIA
      ====================================================================== */}
      <section className="py-14 px-6 sm:px-10 bg-[#EDE9E3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">
              Why Tekloria
            </div>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight mb-2.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A Place Where Great Work Thrives
            </h2>
            <p className="text-[#475569] text-sm">
              We have built the kind of studio we always wanted to work at.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden p-4 sm:p-6 bg-white border border-[#E5E7EB] rounded-[6px] flex flex-col justify-between group hover:border-[#EF4444] transition-all duration-300 hover:shadow-sm"
              >
                <div className="absolute -right-6 -bottom-6 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  <ConcentricRipple id={`perk-ripple-${idx}`} variant="soft-rose" placement="bottom-right" />
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#0B0B0F] mb-1 sm:mb-1.5 leading-snug">{perk.title}</h3>
                    <p className="text-[#475569] text-[10px] sm:text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          OPEN ROLES
      ====================================================================== */}
      <section id="open-roles" className="py-14 px-6 sm:px-10 max-w-[1200px] mx-auto">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">
            Open Positions
          </div>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Current Openings
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
          {openRoles.map((role, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedRole(role)}
              className="group relative overflow-hidden p-4 sm:p-6 bg-white border border-[#E5E7EB] rounded-[6px] hover:border-[#EF4444] transition-all duration-300 hover:shadow-sm flex flex-col gap-2.5 sm:gap-4 min-h-0 cursor-pointer"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-50 transition-all duration-300">
                <ConcentricRipple id={`role-ripple-${idx}`} variant="soft-rose" placement="bottom-right" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0B0B0F] leading-snug">{role.title}</h3>
                  <div className="hidden sm:flex flex-wrap items-center gap-3 mt-1.5">
                    <span className="inline-flex items-center gap-1 text-xs text-[#475569]">
                      <Clock size={11} className="text-[#EF4444]" /> {role.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#475569]">
                      <MapPin size={11} className="text-[#EF4444]" /> {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#475569]">
                      <Briefcase size={11} className="text-[#EF4444]" /> {role.team}
                    </span>
                  </div>
                </div>
              </div>

              <p className="hidden sm:block relative z-10 text-[#475569] text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{role.desc}</p>

              <div className="hidden sm:flex relative z-10 flex flex-wrap gap-1.5 sm:gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] text-[#475569]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-auto pt-1 sm:pt-1">
                <a
                  href={`mailto:contact@tekloria.in?subject=Application: ${encodeURIComponent(role.title)}&body=Hi Tekloria Team,%0A%0AI am interested in applying for the ${encodeURIComponent(role.title)} role.%0A%0APlease find my details below:%0A%0AName:%0AExperience:%0APortfolio / LinkedIn:%0A%0ALooking forward to hearing from you.`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-semibold text-[#0B0B0F] hover:text-[#EF4444] transition-colors uppercase sm:normal-case tracking-wider sm:tracking-normal"
                >
                  <span className="sm:hidden">Apply</span>
                  <span className="hidden sm:inline">Apply for this role</span>
                  <ArrowRight className="w-3 h-3 sm:w-[13px] sm:h-[13px]" />
                </a>
                <div className="sm:hidden text-[9px] text-[#475569] mt-3 border-t border-[#E5E7EB]/50 pt-2 text-center uppercase tracking-wider font-medium opacity-60">
                  Tap to expand
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open application banner */}
        <div className="mt-6 p-5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[6px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#0B0B0F] mb-0.5">Don't see the right fit?</p>
            <p className="text-xs text-[#475569]">We are always looking for exceptional talent. Send us a general application and we'll be in touch.</p>
          </div>
          <a
            href="mailto:contact@tekloria.in?subject=Open Application — Tekloria&body=Hi Tekloria Team,%0A%0AI would like to submit a general application to join your team.%0A%0AName:%0ARole of Interest:%0AExperience:%0APortfolio / LinkedIn:%0A%0ALooking forward to hearing from you."
            className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold border border-[#0B0B0F] text-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white px-4 py-2.5 rounded-full transition-all duration-200"
          >
            Send Open Application <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* ======================================================================
          HIRING PROCESS
      ====================================================================== */}
      <section className="py-14 px-6 sm:px-10 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 text-center max-w-lg mx-auto">
            <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">
              Our Process
            </div>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Simple, Transparent Hiring
            </h2>
            <p className="text-[#475569] text-sm">
              We respect your time. Our process is direct, fair, and moves fast.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden p-4 sm:p-6 bg-white border border-[#E5E7EB] rounded-[6px] group hover:border-[#EF4444] transition-all duration-300 hover:shadow-sm hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Concentric ripple on hover — matches values / perks cards */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  <ConcentricRipple id={`process-ripple-${idx}`} variant="soft-rose" placement="bottom-right" />
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[6px] bg-[#F8FAFC] border border-[#E5E7EB] group-hover:border-[#EF4444] flex items-center justify-center shrink-0 transition-colors duration-300 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-4 sm:[&>svg]:h-4">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#0B0B0F] mb-1 sm:mb-1.5 leading-snug">{step.title}</h3>
                    <p className="text-[#475569] text-[10px] sm:text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          CTA
      ====================================================================== */}
      <CtaSection
        id="careers"
        badge="Join the Team"
        title="Ready to build something great?"
        description="We would love to hear from you. Drop us your details and let's see if we're a good match."
        primaryButtonText="Apply Now"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Tekloria"
        secondaryButtonLink="/about"
      />

      {/* Mobile Card Modal Overlay */}
      {selectedRole && (
        <CardModal
          title={selectedRole.title}
          description={selectedRole.desc}
          icon={selectedRole.icon}
          tags={selectedRole.tags}
          onClose={() => setSelectedRole(null)}
        />
      )}
    </div>
  );
}
