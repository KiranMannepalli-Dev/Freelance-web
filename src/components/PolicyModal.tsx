import { useEffect } from 'react';
import { X } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms';

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

// ─── Content ──────────────────────────────────────────────────────────────────
const content: Record<PolicyType, { title: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'We collect information you provide directly to us, such as your name, email address, phone number, company name, and project details when you fill out our contact or inquiry forms. We may also automatically collect certain technical data including IP address, browser type, device information, and pages visited when you use our website.',
      },
      {
        heading: '2. How We Use Your Information',
        body: 'We use the information we collect to respond to your inquiries and provide the services you request, send you project updates, proposals, and relevant communications, improve and optimise our website and service offerings, comply with legal obligations, and protect against fraudulent or unlawful activity.',
      },
      {
        heading: '3. Sharing of Information',
        body: 'Tekloria does not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting business — such as hosting providers or analytics tools — under strict confidentiality agreements. We may also disclose information where required by law.',
      },
      {
        heading: '4. Cookies',
        body: 'Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.',
      },
      {
        heading: '5. Data Security',
        body: 'We implement industry-standard security measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      },
      {
        heading: '6. Data Retention',
        body: 'We retain personal information only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When no longer needed, data is securely deleted or anonymised.',
      },
      {
        heading: '7. Your Rights',
        body: 'You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at contact@tekloria.in. We will respond to your request within a reasonable timeframe.',
      },
      {
        heading: '8. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.',
      },
      {
        heading: '9. Contact Us',
        body: 'If you have any questions or concerns about this Privacy Policy, please reach out to us at contact@tekloria.in or through our Contact page.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing or using the Tekloria website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website or engage our services.',
      },
      {
        heading: '2. Services',
        body: 'Tekloria provides custom software development, UI/UX design, mobile application development, ERP systems, digital marketing strategy, and HR recruiting services. All services are delivered subject to a separate written agreement or proposal signed by both parties.',
      },
      {
        heading: '3. Intellectual Property',
        body: 'All content on this website — including text, graphics, logos, icons, and code — is the property of Tekloria and protected by applicable intellectual property laws. Upon full payment, clients receive ownership of deliverables as specified in their individual project agreement. Tekloria retains the right to showcase completed work in its portfolio unless a written non-disclosure agreement is in place.',
      },
      {
        heading: '4. Client Responsibilities',
        body: 'Clients are responsible for providing accurate project requirements, timely feedback, and necessary access to assets and third-party platforms. Delays caused by the client may affect project timelines and additional charges may apply.',
      },
      {
        heading: '5. Payment Terms',
        body: 'Payment schedules and amounts are outlined in individual project proposals. Tekloria reserves the right to pause or terminate work on any project where payments are overdue. All fees are non-refundable unless explicitly stated in a written agreement.',
      },
      {
        heading: '6. Limitation of Liability',
        body: 'Tekloria shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount paid for the specific service in question.',
      },
      {
        heading: '7. Confidentiality',
        body: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of the working relationship.',
      },
      {
        heading: '8. Termination',
        body: 'Either party may terminate a project engagement with written notice as specified in the project agreement. Upon termination, the client shall pay for all work completed up to the termination date.',
      },
      {
        heading: '9. Governing Law',
        body: 'These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, India.',
      },
      {
        heading: '10. Changes to Terms',
        body: 'Tekloria reserves the right to update these Terms & Conditions at any time. Continued use of the website or services after changes are posted constitutes your acceptance of the revised terms.',
      },
      {
        heading: '11. Contact',
        body: 'For any questions regarding these Terms & Conditions, please contact us at contact@tekloria.in.',
      },
    ],
  },
};

// ─── Modal Component ──────────────────────────────────────────────────────────
export default function PolicyModal({ type, onClose }: PolicyModalProps) {
  const { title, sections } = content[type];

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8"
      style={{ background: 'rgba(11,11,15,0.80)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0B0B0F] border border-white/10 rounded-[10px] flex flex-col overflow-hidden"
        style={{ animation: 'modalIn 0.22s cubic-bezier(0.22,1,0.36,1) both' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#EF4444] font-semibold mb-0.5">
              Tekloria® Legal
            </div>
            <h2
              className="text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 shrink-0"
          >
            <X size={17} />
          </button>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 flex-1 text-white/70 text-sm leading-relaxed">
          <p className="text-white/40 text-xs">
            Last updated: September 2025 &nbsp;·&nbsp; Effective immediately upon publication.
          </p>

          {sections.map((sec, idx) => (
            <div key={idx}>
              <h3 className="text-white text-sm font-semibold mb-1.5">{sec.heading}</h3>
              <p className="text-white/60 text-sm leading-relaxed whitespace-pre-wrap">{sec.body}</p>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="px-6 py-4 border-t border-white/10 shrink-0 flex items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Tekloria® Digital Solutions</p>
          <button
            onClick={onClose}
            className="text-xs font-semibold px-5 py-2 rounded-full bg-[#EF4444] hover:bg-[#D93636] text-white transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>

      {/* Keyframe injected inline for the modal entrance */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
}
