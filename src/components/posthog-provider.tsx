'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals'

function sendToPostHog(metric: Metric) {
  if (posthog.__loaded) {
    posthog.capture('$web_vitals', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    })
  }
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track pageviews
    if (pathname && posthog.__loaded) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if PostHog is already initialized
    if (!posthog.__loaded) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true, // Enable pageleave tracking for accurate bounce rate and session duration
        capture_heatmaps: true, // Enable heatmaps
        capture_performance: true, // Enable performance monitoring
        session_recording: {
          recordCrossOriginIframes: false, // Don't record cross-origin iframes for privacy
        },
        loaded: () => {
          if (process.env.NODE_ENV === 'development') console.log('PostHog loaded')
          
          // Initialize Web Vitals tracking
          onCLS(sendToPostHog)
          onINP(sendToPostHog) // Interaction to Next Paint (replaces FID)
          onFCP(sendToPostHog)
          onLCP(sendToPostHog)
          onTTFB(sendToPostHog)
        }
      })
    }

    // Ensure page leave events are captured on page unload
    const handleBeforeUnload = () => {
      if (posthog.__loaded) {
        posthog.capture('$pageleave')
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  )
}
