import { SITE_CONFIG } from '../config/siteConfig';

export type AnalyticsEvent =
  | 'diagnostic_start'
  | 'diagnostic_question_answer'
  | 'diagnostic_complete'
  | 'diagnostic_lead_start'
  | 'diagnostic_lead_submit'
  | 'cta_hero'
  | 'cta_diagnostic'
  | 'cta_method'
  | 'cta_pricing'
  | 'cta_final'
  | 'whatsapp_click'
  | 'pricing_6_months'
  | 'pricing_12_months'
  | 'faq_open';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEvent,
  eventParams: Record<string, unknown> = {}
): void {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...eventParams,
  };

  if (SITE_CONFIG.analytics.enableConsoleLogging) {
    // Log formatado para desenvolvimento e inspeção de conformidade
    console.debug(`[Analytics Event: ${eventName}]`, payload);
  }

  // 1. Google Tag Manager (dataLayer)
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // 2. Google Analytics 4 (gtag)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // 3. Meta Pixel (fbq)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (eventName === 'diagnostic_lead_submit') {
      window.fbq('track', 'Lead', eventParams);
    } else if (eventName === 'whatsapp_click') {
      window.fbq('track', 'Contact', eventParams);
    } else {
      window.fbq('trackCustom', eventName, eventParams);
    }
  }
}
