import { useState, useEffect } from 'react';
import { X, Download, Printer, CheckCircle2, FileText, Sparkles, Shield, Cpu } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'process'>('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 transition-all duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0B0B0F]/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white text-[#0B0B0F] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E5E7EB] z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center text-[#EF4444]">
              <FileText size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-[#0B0B0F]" style={{ fontFamily: 'var(--font-display)' }}>
                  Tekloria&reg; <span className="text-[#EF4444]">&#10033;</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#EF4444]/10 text-[#EF4444] px-2 py-0.5 rounded-full">
                  Services Brochure 2025–2026
                </span>
              </div>
              <p className="text-xs text-[#475569]">Official Engineering & Capabilities Catalog</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/tekloria-services-brochure.pdf"
              download="Tekloria-Services-Brochure-2025.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#EF4444] hover:bg-[#D93636] text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm transition-all"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.open('/tekloria-services-brochure.pdf', '_blank')}
              title="Open full PDF in new tab"
              className="hidden sm:inline-flex p-2 text-[#475569] hover:text-[#0B0B0F] hover:bg-[#E5E7EB]/60 rounded-full transition-colors"
            >
              <Printer size={18} />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#475569] hover:text-[#0B0B0F] hover:bg-[#E5E7EB]/60 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-[#E5E7EB] bg-white text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-[#0B0B0F] text-white' : 'text-[#475569] hover:bg-[#F8FAFC]'}`}
          >
            Brochure Overview
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'services' ? 'bg-[#0B0B0F] text-white' : 'text-[#475569] hover:bg-[#F8FAFC]'}`}
          >
            All 8 Core Services
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'process' ? 'bg-[#0B0B0F] text-white' : 'text-[#475569] hover:bg-[#F8FAFC]'}`}
          >
            Process & Guarantees
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 custom-scrollbar text-[#0B0B0F]">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Hero Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0F] text-white relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#EF4444] mb-2">
                    <Sparkles size={14} />
                    <span>Executive Summary</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    Engineering High-Performance Digital Products That Scale
                  </h3>
                  <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6">
                    Tekloria is a specialized software engineering studio based in Hyderabad, India. We architect custom single-page and server-rendered web applications, native and cross-platform mobile apps, bespoke enterprise ERP suites, and autonomous AI agents for modern companies.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="/tekloria-services-brochure.pdf"
                      download="Tekloria-Services-Brochure-2025.pdf"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EF4444] hover:bg-[#D93636] text-white text-sm font-semibold rounded-full shadow-sm transition-all"
                    >
                      <Download size={16} />
                      Download Complete PDF Brochure (3 Pages)
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#EF4444]">100%</div>
                  <div className="text-xs text-[#475569] font-medium mt-1">IP & Code Ownership</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0B0B0F]">&lt;1s</div>
                  <div className="text-xs text-[#475569] font-medium mt-1">Core Web Vitals Speed</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0B0B0F]">60fps</div>
                  <div className="text-xs text-[#475569] font-medium mt-1">Fluid Mobile UI/UX</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#EF4444]">24/7</div>
                  <div className="text-xs text-[#475569] font-medium mt-1">AI Automation & Support</div>
                </div>
              </div>

              {/* Tech Stack Summary */}
              <div className="p-5 rounded-xl border border-[#E5E7EB] bg-white">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B0B0F] mb-3 flex items-center gap-2">
                  <Cpu size={16} className="text-[#EF4444]" />
                  Technologies Powering Our Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#475569]">
                  <div>
                    <span className="font-semibold text-[#0B0B0F] block mb-1">Frontend & Mobile:</span>
                    React 19, Next.js, React Native, Flutter, TypeScript, Tailwind CSS
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B0B0F] block mb-1">Backend & Databases:</span>
                    Node.js, Express, Python, PostgreSQL, Supabase, Redis, Docker
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B0B0F] block mb-1">AI & Workflow:</span>
                    OpenAI / Claude APIs, LangChain, Custom Webhooks, Zapier, Make
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-5">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-xl font-bold text-[#0B0B0F]">Comprehensive Service Portfolio</h3>
                  <p className="text-xs text-[#475569]">Detailed scope for each of our 8 core engineering disciplines</p>
                </div>
                <a
                  href="/tekloria-services-brochure.pdf"
                  download="Tekloria-Services-Brochure-2025.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EF4444] text-white text-xs font-semibold rounded-full hover:bg-[#D93636] transition-colors"
                >
                  <Download size={13} /> Download PDF
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">01</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">Web Application Development</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Ultra-fast SPAs & Next.js platforms built for SEO, accessibility, and frictionless conversions.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Custom SPAs & Next.js SSR</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Headless E-Commerce & Stripe Billing</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Sub-second Core Web Vitals</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Scalable REST & GraphQL Cloud APIs</li>
                  </ul>
                </div>

                {/* 2 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">02</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">Mobile App Development</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Native & cross-platform apps for iOS and Android engineered with offline-first synchronization.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> React Native & Flutter Architectures</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Biometrics, Bluetooth & Native Integrations</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Offline-First Data Caching</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Full App Store & Google Play Submissions</li>
                  </ul>
                </div>

                {/* 3 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">03</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">Graphic & UI/UX Design</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Striking visual communication, brand design systems, and Figma component libraries.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Complete Brand Guidelines & Logo Systems</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Scalable Figma UI Kits & Tokens</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Interactive Wireframing & Prototyping</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Marketing Collateral & Poster Designs</li>
                  </ul>
                </div>

                {/* 4 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">04</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">Enterprise ERP Systems</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Custom operational platforms centralizing multi-warehouse inventory, RBAC, and billing.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Granular Role-Based Permissions (RBAC)</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Automated Invoicing & Multi-Currency Billing</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Live Inventory & Supply Chain Tracking</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Seamless Logistics & Banking APIs</li>
                  </ul>
                </div>

                {/* 5 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">05</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">Business Strategy & SEO</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Data-engineered organic visibility, conversion optimization, and retention growth funnels.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Technical SEO Auditing & Rich Schemas</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Conversion Rate Optimization (CRO)</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Multi-Channel Digital Acquisition Funnels</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Product Telemetry & Retention Analytics</li>
                  </ul>
                </div>

                {/* 6 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">06</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">HR Recruiting & Staffing</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Screening, vetting, and placing top engineering and design talent directly into your team.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Deep Technical Coding Screenings</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Dedicated Staff Augmentation & Direct Hire</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Culture & Philosophy Match Vetting</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Rapid 7–14 Day Candidate Turnaround</li>
                  </ul>
                </div>

                {/* 7 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">07</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">AI Chatbots & Autonomous Agents</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Custom conversational AI workflows and LLM assistants engaging visitors 24/7.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Fine-Tuned Domain LLMs & RAG Pipelines</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Multi-Channel Sync (Web, WhatsApp, CRM)</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Context-Aware Action Agents</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Automated Lead Qualification & Triage</li>
                  </ul>
                </div>

                {/* 8 */}
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center">08</span>
                    <h4 className="font-bold text-sm text-[#0B0B0F]">Intelligent Business Automations</h4>
                  </div>
                  <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                    Robotic process automation and custom API bridges that eliminate manual overhead.
                  </p>
                  <ul className="text-xs text-[#1E293B] space-y-1.5 border-t border-[#E5E7EB] pt-2">
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> End-to-End Workflow Automations (RPA)</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Custom Middleware APIs & Webhooks</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Cross-Platform CRM & ERP Sync</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#EF4444] shrink-0" /> Proactive Real-Time Incident Alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#0B0B0F]">Our 4-Stage Delivery Process</h3>
                <p className="text-xs text-[#475569]">How Tekloria ensures transparent, on-time project execution</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="text-xs font-bold text-[#EF4444] uppercase mb-1">Phase 01</div>
                  <h4 className="text-sm font-bold text-[#0B0B0F] mb-1.5">Discovery & System Architecture</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    We audit existing systems, establish functional requirements, map user stories, and architect the database schemas and infrastructure.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="text-xs font-bold text-[#EF4444] uppercase mb-1">Phase 02</div>
                  <h4 className="text-sm font-bold text-[#0B0B0F] mb-1.5">Rapid Agile Sprint Cycles</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Two-week agile sprints with bi-weekly live staging demos so you can test features in real-time and provide direct feedback.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="text-xs font-bold text-[#EF4444] uppercase mb-1">Phase 03</div>
                  <h4 className="text-sm font-bold text-[#0B0B0F] mb-1.5">Rigorous QA & Security Audits</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Comprehensive cross-browser, mobile responsiveness, load stress, and penetration tests ensure zero surprises upon launch.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
                  <div className="text-xs font-bold text-[#EF4444] uppercase mb-1">Phase 04</div>
                  <h4 className="text-sm font-bold text-[#0B0B0F] mb-1.5">Production Launch & SLA Maintenance</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Zero-downtime blue/green deployment, complete code repository handover, full documentation, and ongoing 24/7 SLA maintenance.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#FFFFFF]">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B0B0F] mb-3 flex items-center gap-2">
                  <Shield size={16} className="text-[#EF4444]" />
                  The Tekloria Guarantee
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#475569]">
                  <div>
                    <span className="font-semibold text-[#0B0B0F] block mb-1">100% Client Code Ownership:</span>
                    You own the entire repository, Git history, licenses, and assets without proprietary vendor lock-in.
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B0B0F] block mb-1">Direct Senior Engineering Contact:</span>
                    Communicate directly with the developers writing your code—zero account manager barriers.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E5E7EB] bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#475569] text-center sm:text-left">
            <span>Have questions or a custom RFP? Reach us directly at </span>
            <a href="mailto:contact@tekloria.in" className="text-[#EF4444] font-semibold hover:underline">
              contact@tekloria.in
            </a>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="/tekloria-services-brochure.pdf"
              download="Tekloria-Services-Brochure-2025.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#EF4444] hover:bg-[#D93636] text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm transition-all"
            >
              <Download size={15} />
              <span>Download PDF Brochure</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 border border-[#E5E7EB] hover:bg-white text-xs sm:text-sm font-medium rounded-full text-[#475569] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
