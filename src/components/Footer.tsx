import { useState } from 'react';
import { Link } from 'react-router-dom';
import PolicyModal, { type PolicyType } from './PolicyModal';

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  return (
    <>
      <footer className="relative overflow-hidden w-full bg-[#0B0B0F] text-white pt-10 pb-6 sm:pt-14 sm:pb-8 px-6 sm:px-10 border-t border-white/10">
        {/* Background Monumental Logo Watermark (Exact Navbar Logo Mark: Tekloria® ✻) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[600px] h-[300px] bg-[#EF4444]/[0.025] rounded-full blur-3xl pointer-events-none" />
          
          <div 
            className="tracking-tight leading-none whitespace-nowrap opacity-[0.045] transform scale-100 sm:scale-105 transition-transform"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-[18vw] sm:text-[19vw] lg:text-[18vw] font-bold text-white tracking-tight">
              Tekloria
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-8 sm:mb-10">
            {/* Brand Info */}
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-3 sm:mb-4 group select-none">
                <span className="font-semibold text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Tekloria&reg;
                </span>
                <span className="text-3xl leading-none text-[#EF4444] font-bold">
                  &#10033;
                </span>
              </Link>
              <p className="text-white/70 text-sm max-w-sm mb-5 sm:mb-6 leading-relaxed">
                Custom Web &amp; App Development for Modern Businesses. Transforming ambitious ideas into high-performance software solutions.
              </p>
              <div className="text-[10px] sm:text-xs text-[#EF4444] font-medium tracking-wider uppercase">
                Ideas &rarr; Code &rarr; Real Solutions
              </div>
            </div>
            
            {/* Services Column */}
            <div className="col-span-1">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-wider text-white font-semibold mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-sm text-white/70">
                <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">App Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">ERP Systems</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Graphic &amp; UI/UX</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Business Strategy</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">HR Recruiting</Link></li>
                <li className="pt-1">
                  <a 
                    href="/tekloria-services-brochure.pdf" 
                    download="Tekloria-Services-Brochure-2025.pdf" 
                    className="inline-flex items-center gap-1.5 text-xs text-[#EF4444] hover:underline font-semibold"
                  >
                    Download Brochure (PDF) &darr;
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-span-1">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-wider text-white font-semibold mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-sm text-white/70">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="col-span-2 lg:col-span-1 mt-2 sm:mt-0 pt-6 sm:pt-0 border-t border-white/5 sm:border-t-0">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-wider text-white font-semibold mb-3 sm:mb-4">Connect</h4>
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EF4444] transition-colors" aria-label="LinkedIn">
                  <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EF4444] transition-colors" aria-label="Twitter">
                  <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EF4444] transition-colors" aria-label="Instagram">
                  <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://wa.me/918520950487" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                  <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                {/* Email */}
                <div>
                  <span className="text-[10px] sm:text-xs text-white/50 block mb-0.5">Email</span>
                  <a href="mailto:contact@tekloria.in" className="text-[12px] sm:text-sm text-white hover:text-[#EF4444] transition-colors break-all">
                    contact@tekloria.in
                  </a>
                </div>
                {/* Location */}
                <div>
                  <span className="text-[10px] sm:text-xs text-white/50 block mb-0.5">Location</span>
                  <span className="text-[12px] sm:text-sm text-white/80">Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} Tekloria&reg; Digital Solutions. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 text-xs sm:text-sm text-white/50">
              <button
                onClick={() => setActivePolicy('sitemap')}
                className="hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
              >
                Site Map
              </button>
              <span className="text-white/20">·</span>
              <button
                onClick={() => setActivePolicy('privacy')}
                className="hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-white/20">·</span>
              <button
                onClick={() => setActivePolicy('terms')}
                className="hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal — rendered outside footer so it overlays everything */}
      {activePolicy && (
        <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />
      )}
    </>
  );
}
