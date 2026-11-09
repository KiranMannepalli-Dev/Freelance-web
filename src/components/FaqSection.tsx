import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ConcentricRipple } from './ConcentricRipple';

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs: FaqItem[] = [
  {
    category: "Website Development",
    question: "What freelance website development services does Tekloria provide?",
    answer: "Tekloria specializes in high-performance freelance website development using React, Next.js, TypeScript, and modern headless architectures. We build all types of websites including corporate business sites, e-commerce stores (Shopify, WooCommerce, custom payment checkouts), SaaS platforms, custom customer portals, high-converting landing pages, and interactive portfolio websites."
  },
  {
    category: "Mobile App Development",
    question: "Can Tekloria develop custom mobile apps for both iOS and Android?",
    answer: "Yes. We engineer cross-platform and native mobile applications using React Native and Flutter. Our apps feature 60fps animations, biometric authentication, push notifications, offline-first synchronization, background processing, and complete App Store & Google Play Store submission and compliance support."
  },
  {
    category: "Business Websites",
    question: "What types of business-related websites do you build?",
    answer: "We develop business websites for all industries, including medical clinics & healthcare, real estate agencies, law & consulting firms, manufacturing enterprises, hospitality, fintech, and startups. Every business website is architected with technical SEO, Core Web Vitals optimization, lead generation funnels, and mobile responsiveness."
  },
  {
    category: "Cost & Transparency",
    question: "Why should we hire Tekloria instead of an expensive traditional agency?",
    answer: "Traditional agencies have high overhead, lengthy bureaucratic delays, and account manager intermediaries. Tekloria provides direct access to senior full-stack engineers and designers, delivering enterprise-grade code at freelance agility with 50-70% lower total project costs and 2x faster delivery turnaround."
  },
  {
    category: "Tech Stack",
    question: "What technology stack does Tekloria use for custom development?",
    answer: "We utilize cutting-edge industry technologies: Front-end (React 19, Next.js, TypeScript, Tailwind CSS), Mobile (React Native, Flutter, Swift, Kotlin), Back-end (Node.js, Express, Python, Django, REST APIs, GraphQL), Databases (PostgreSQL, MongoDB, Supabase, Redis), and Cloud Hosting (AWS, Vercel, Docker, Cloudflare)."
  },
  {
    category: "Delivery Timeline",
    question: "How long does a website or mobile app project typically take?",
    answer: "A standard high-performance business website or landing page typically takes 1 to 2 weeks. Custom e-commerce platforms and multi-page web applications take 2 to 4 weeks. Full cross-platform mobile apps or complex enterprise ERP systems take 4 to 8 weeks, with bi-weekly sprint demos and continuous live previews."
  },
  {
    category: "SEO & Support",
    question: "Are your websites optimized for Google Search (SEO) and AI Answer Engines (AEO)?",
    answer: "Yes, 100%. Every project built by Tekloria includes comprehensive Technical SEO (semantic HTML5, Schema.org microdata, sitemaps, robots directives, OpenGraph meta tags, 90+ Google PageSpeed score) and Answer Engine Optimization (AEO) to ensure your business ranks prominently on Google, Perplexity AI, ChatGPT Search, and Gemini."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq"
      className="py-14 sm:py-20 px-6 sm:px-10 bg-[#F8FAFC] border-t border-[#E5E7EB] relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background Ripple Watermark */}
      <div className="absolute -left-20 -top-20 w-[420px] h-[420px] pointer-events-none opacity-30 select-none">
        <ConcentricRipple id="faq-bg-ripple" variant="outline-rings" placement="top-left" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Context for AEO */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-2">
              <HelpCircle size={15} />
              <span>Answers &amp; Technical Insights</span>
            </div>
            <h2 
              id="faq-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B0B0F] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Frequently Asked <span className="text-[#EF4444]">Questions</span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6">
              Everything you need to know about our freelance website development, mobile apps, business websites, and engineering workflows.
            </p>

            <div className="p-5 bg-white border border-[#E5E7EB] rounded-[8px] space-y-3 mb-6">
              <h3 className="text-xs font-semibold text-[#0B0B0F] uppercase tracking-wider">
                Have a specific requirement?
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                We review technical briefs within 24 business hours with free architectural guidance and cost estimates.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EF4444] hover:underline"
              >
                <span>Speak directly with a lead developer</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white border rounded-[8px] transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#EF4444] shadow-sm' : 'border-[#E5E7EB] hover:border-[#CBD5E1]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#0B0B0F] pr-2">
                      {faq.question}
                    </span>
                    <span 
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#EF4444]/10 text-[#EF4444] rotate-180' : 'bg-[#F8FAFC] text-[#475569]'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

