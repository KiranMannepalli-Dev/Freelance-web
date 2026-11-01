import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isDarkHeroNavbar = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 px-6 sm:px-10 py-4 transition-all duration-300 flex justify-between items-center ${isDarkHeroNavbar
          ? 'bg-transparent text-white'
          : 'bg-white/95 backdrop-blur-md text-[#0B0B0F] border-b border-[#E5E7EB]'
          }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group select-none"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <span className="font-semibold text-xl sm:text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Tekloria&reg;
          </span>
          <span className="text-2xl sm:text-3xl leading-none text-[#EF4444] font-bold">
            &#10033;
          </span>
        </Link>

        {/* Right Side: Navigation Tabs + CTA */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium ml-auto">
          {links.slice(0, 5).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 ${isDarkHeroNavbar
                  ? isActive ? 'text-[#EF4444]' : 'text-white hover:opacity-60'
                  : isActive ? 'text-[#EF4444]' : 'text-[#0B0B0F] hover:text-[#EF4444]'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Brochure Download Button */}
          <a
            href="/tekloria-services-brochure.pdf"
            download="Tekloria-Services-Brochure-2025.pdf"
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-full transition-all duration-200 border ${
              isDarkHeroNavbar
                ? 'border-white/30 text-white hover:bg-white/10 hover:border-white'
                : 'border-[#E5E7EB] text-[#0B0B0F] hover:border-[#EF4444] hover:text-[#EF4444] bg-[#F8FAFC]'
            }`}
            title="Download Services Brochure (PDF)"
          >
            <Download size={14} className="text-[#EF4444]" />
            <span>Brochure</span>
          </a>

          <Link
            to="/contact"
            className={`inline-flex items-center justify-center text-sm font-medium px-5 py-2 rounded-full border transition-all duration-200 ml-1 ${isDarkHeroNavbar
              ? 'border-white text-white hover:bg-white hover:text-[#0B0B0F]'
              : 'border-[#0B0B0F] text-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white'
              }`}
          >
            Get in touch
          </Link>

        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col justify-center gap-1.5 z-[60] w-8 h-8 relative focus:outline-none"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${isDarkHeroNavbar && !isMobileNavOpen ? 'bg-white' : 'bg-[#0B0B0F]'} ${isMobileNavOpen ? 'rotate-45 translate-y-[8px] !bg-white' : ''}`} />
          <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${isDarkHeroNavbar && !isMobileNavOpen ? 'bg-white' : 'bg-[#0B0B0F]'} ${isMobileNavOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-[2px] rounded-full transition-all duration-300 ${isDarkHeroNavbar && !isMobileNavOpen ? 'bg-white' : 'bg-[#0B0B0F]'} ${isMobileNavOpen ? '-rotate-45 -translate-y-[8px] !bg-white' : ''}`} />
        </button>
        {/* Mobile Navigation Dropdown */}
        <div
          className={`absolute top-full right-6 sm:right-10 mt-2 w-52 bg-[#0B0B0F] border border-white/10 text-white rounded-2xl z-[55] md:hidden transition-all duration-200 shadow-2xl origin-top-right ${isMobileNavOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex flex-col py-2 text-base font-medium text-left">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileNavOpen(false)}
                className={`px-5 py-3 transition-colors ${location.pathname === link.path ? 'text-[#EF4444] bg-white/5' : 'text-white hover:text-[#EF4444] hover:bg-white/5'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Brochure Download Link */}
            <div className="pt-2 mt-1 border-t border-white/10 px-4 pb-2">
              <a
                href="/tekloria-services-brochure.pdf"
                download="Tekloria-Services-Brochure-2025.pdf"
                onClick={() => setIsMobileNavOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-[#EF4444] hover:bg-[#D93636] text-white text-xs font-semibold transition-colors"
              >
                <Download size={14} />
                Download Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Invisible overlay to close dropdown when clicking outside */}
      <div
        className={`fixed inset-0 z-[40] md:hidden ${isMobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
