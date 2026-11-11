/**
 * Unified Analytics & Conversion Tracker for Level Up Math Academy.
 * Dispatches conversion events synchronously across:
 * - Google Tag Manager (dataLayer)
 * - Google Analytics 4 (gtag)
 * - Meta Pixel (fbq)
 * - PostHog (posthog)
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    posthog?: { capture: (event: string, properties?: Record<string, any>) => void };
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    ...params,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Tag Manager (GTM)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventPayload,
  });

  // 2. Google Analytics 4 (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventPayload);
  }

  // 3. Meta / Facebook Pixel (fbq)
  if (typeof window.fbq === 'function') {
    if (eventName === 'generate_lead') {
      window.fbq('track', 'Lead', eventPayload);
    } else if (eventName === 'phone_call_click' || eventName === 'whatsapp_click') {
      window.fbq('track', 'Contact', eventPayload);
    } else {
      window.fbq('trackCustom', eventName, eventPayload);
    }
  }

  // 4. PostHog
  if (window.posthog && typeof window.posthog.capture === 'function') {
    try {
      window.posthog.capture(eventName, eventPayload);
    } catch (_) {}
  }
}

