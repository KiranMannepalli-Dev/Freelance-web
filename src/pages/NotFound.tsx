import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Compass, ArrowRight } from 'lucide-react';
import { ConcentricRipple } from '../components/ConcentricRipple';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-white text-[#0B0B0F] relative overflow-hidden pt-28 pb-20 px-6 sm:px-10">
      {/* Background Accent Ripple */}
      <div className="absolute -right-20 -top-20 w-[420px] h-[420px] pointer-events-none opacity-30 select-none">
        <ConcentricRipple
          id="notfound-ripple"
          variant="soft-rose"
          placement="top-right"
        />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
          Error 404 &bull; Page Not Found
        </div>

        {/* Big 404 Headline */}
        <h1
          className="text-6xl sm:text-8xl font-black tracking-tight text-[#0B0B0F] mb-4 select-none"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          4<span className="text-[#EF4444]">0</span>4
        </h1>

        <h2
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B0B0F] mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Lost in Digital Space?
        </h2>

        <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-8">
          The page or route you are looking for doesn't exist, was moved, or the link may have expired.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#0B0B0F] text-[#0B0B0F] font-medium text-sm sm:text-base px-5 py-3 rounded-full transition-all duration-200"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#EF4444] hover:bg-[#D93636] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-200 shadow-sm"
          >
            <Home size={16} />
            Back to Home
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#E5E7EB] hover:border-[#EF4444] text-[#475569] hover:text-[#EF4444] font-medium text-sm sm:text-base px-5 py-3 rounded-full transition-all duration-200"
          >
            <Compass size={16} />
            Explore Services
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-[#E5E7EB] text-xs text-[#475569]">
          <span className="font-semibold text-[#0B0B0F]">Need immediate assistance?</span>{' '}
          <Link to="/contact" className="text-[#EF4444] hover:underline inline-flex items-center gap-1 font-medium ml-1">
            Contact our engineering team <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
