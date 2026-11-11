'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Global site-wide interaction tracker.
 * Automatically captures high-intent conversion actions on every page:
 * - Phone number clicks (tel:)
 * - WhatsApp chat clicks
 * - "Book Free Assessment" / Contact CTA clicks
 */
export function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const text = target.textContent?.trim().slice(0, 60) || '';

      // 1. Phone Call Clicks
      if (href.startsWith('tel:')) {
        trackEvent('phone_call_click', {
          phone_number: href.replace('tel:', ''),
          element_text: text,
        });
      }
      // 2. WhatsApp Clicks
      else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackEvent('whatsapp_click', {
          element_text: text,
        });
      }
      // 3. CTA Clicks to Contact / Assessment Page
      else if (href === '/contact' || href.startsWith('/contact?')) {
        trackEvent('cta_contact_click', {
          element_text: text,
          destination: href,
        });
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}

