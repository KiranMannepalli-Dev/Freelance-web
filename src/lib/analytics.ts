/**
 * Google Analytics 4 (GA4) Analytics Utility
 * Measurement ID: G-S1K9L265PM
 *
 * Privacy Notice:
 * In accordance with privacy rules, NEVER log personal identifiable information (PII)
 * such as user names, personal email addresses, phone numbers, or free-form user message text.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'js' | 'config' | 'event',
      targetIdOrEventName: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-S1K9L265PM';

/**
 * Low-level event dispatcher that safely checks if gtag is loaded
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, unknown> = {}
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      page_location: window.location.href,
      page_title: document.title,
      ...eventParams,
    });
  }
}

/**
 * 1. Track Client-Side Page Views across React Router navigations
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: pageTitle || document.title,
    });
  }
}

/**
 * 2. Track WhatsApp button clicks (whatsapp_click)
 */
export function trackWhatsAppClick(params?: {
  button_location?: string;
  service_name?: string;
}) {
  trackEvent('whatsapp_click', {
    button_location: params?.button_location || 'unknown',
    ...(params?.service_name ? { service_name: params.service_name } : {}),
  });
}

/**
 * 3. Track Phone number clicks (phone_click)
 */
export function trackPhoneClick(params?: {
  button_location?: string;
}) {
  trackEvent('phone_click', {
    button_location: params?.button_location || 'unknown',
  });
}

/**
 * 4. Track Contact Form submissions (contact_form_submit)
 * STRICT PRIVACY: NO PII (name, user email, phone, message) is sent.
 */
export function trackContactFormSubmit(params: {
  service_name: string;
  budget_range?: string;
}) {
  trackEvent('contact_form_submit', {
    service_name: params.service_name,
    budget_range: params.budget_range || 'Not specified',
  });
}

/**
 * 5. Track "Get Started" / "Start a Project" button clicks (get_started_click)
 */
export function trackGetStartedClick(params?: {
  button_location?: string;
  button_text?: string;
  service_name?: string;
}) {
  trackEvent('get_started_click', {
    button_location: params?.button_location || 'unknown',
    button_text: params?.button_text || 'Start a Project',
    ...(params?.service_name ? { service_name: params.service_name } : {}),
  });
}

/**
 * 6. Track Email button clicks (email_click)
 */
export function trackEmailClick(params?: {
  button_location?: string;
}) {
  trackEvent('email_click', {
    button_location: params?.button_location || 'unknown',
  });
}

