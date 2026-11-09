import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trackGetStartedClick } from '../lib/analytics';

interface CtaSectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  id?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  badge = "Next Steps",
  title,
  description,
  primaryButtonText = "Start a Project",
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  id = "cta"
}) => {
  const filterId = `cta-concentric-shadow-${id}`;

  return (
    <section className="w-full bg-[#0B0B0F] relative overflow-hidden py-14 sm:py-20 border-t border-white/10 text-white">
      {/* Concentric Stepped Rings Effect occupying the right edge of the entire section */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 md:w-1/2 lg:w-5/12 pointer-events-none select-none overflow-hidden">
        <svg 
          viewBox="0 0 400 400" 
          className="w-full h-full object-cover translate-x-10 sm:translate-x-14 opacity-95" 
          preserveAspectRatio="xMaxYMid slice"
        >
          <defs>
            <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="-6" dy="0" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>
          {/* 7 Stepped Concentric Circles radiating from the right edge in Tekloria Brand Colors */}
          {/* 1. Outermost: Tekloria Red #EF4444 */}
          <circle cx="400" cy="200" r="380" fill="#EF4444" />
          {/* 2. Step 2: Warm Red-Coral */}
          <circle cx="400" cy="200" r="310" fill="#F87171" filter={`url(#${filterId})`} />
          {/* 3. Step 3: Soft Coral */}
          <circle cx="400" cy="200" r="245" fill="#FA8E8E" filter={`url(#${filterId})`} />
          {/* 4. Step 4: Light Rose */}
          <circle cx="400" cy="200" r="185" fill="#FCA5A5" filter={`url(#${filterId})`} />
          {/* 5. Step 5: Pale Rose */}
          <circle cx="400" cy="200" r="130" fill="#FECACA" filter={`url(#${filterId})`} />
          {/* 6. Step 6: Soft Red (#FDECEC from design.md) */}
          <circle cx="400" cy="200" r="80" fill="#FDECEC" filter={`url(#${filterId})`} />
          {/* 7. Core: Pure White (#FFFFFF) */}
          <circle cx="400" cy="200" r="38" fill="#FFFFFF" filter={`url(#${filterId})`} />
        </svg>
        {/* Smooth left-to-right fade mask so text is crisp and readable against Primary Black */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent" />
      </div>

      {/* Content centered within 1200px container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EF4444] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
            <span>{badge}</span>
          </div>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2.5"
            style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
          >
            {title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap items-center gap-3.5 shrink-0">
          <Link 
            to={primaryButtonLink} 
            onClick={() => trackGetStartedClick({
              button_location: `cta_section_${id}`,
              button_text: primaryButtonText,
            })}
            className="inline-flex items-center justify-center bg-[#EF4444] hover:bg-[#D93636] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 gap-2 shadow-sm"
          >
            {primaryButtonText} <ArrowRight size={15} />
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link 
              to={secondaryButtonLink} 
              className="inline-flex items-center justify-center bg-transparent border border-white/40 hover:border-white text-white hover:bg-white hover:text-[#0B0B0F] font-medium text-sm sm:text-base px-5 py-3 rounded-full transition-all duration-200"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
