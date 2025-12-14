import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl
  
  // Skip redirects for localhost and development environments
  if (
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1') ||
    hostname.includes('0.0.0.0') ||
    hostname.startsWith('192.168.') ||
    hostname.startsWith('10.') ||
    hostname.includes('.local')
  ) {
    return NextResponse.next()
  }
  
  // Check protocol from multiple sources (some hosting platforms vary)
  const forwardedProto = request.headers.get('x-forwarded-proto') || ''
  const urlProtocol = url.protocol
  const isHttp = forwardedProto === 'http' || urlProtocol === 'http:'
  
  // Check if hostname has www
  const hasWww = hostname.startsWith('www.')
  
  // Check if we need to redirect (only for production domain)
  // Redirect if: has www OR is HTTP OR hostname is not the canonical domain
  if (hostname !== 'levelupmathacademy.ca' && (hasWww || isHttp || hostname.includes('levelupmathacademy.ca'))) {
    // Build canonical URL: https://levelupmathacademy.ca + path + query
    const pathWithQuery = url.pathname + (url.search || '')
    const canonicalUrl = new URL(pathWithQuery, 'https://levelupmathacademy.ca')
    
    return NextResponse.redirect(canonicalUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
