import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Generate a random request ID using Web Crypto API
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  const requestId = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')

  // Log the request ID and path
  console.log(`[${requestId}] ${request.method} ${request.nextUrl.pathname}`)
  console.log("Add a breakpoint here")


  // Add the request ID to the response headers
  const response = NextResponse.next()
  response.headers.set('x-request-id', requestId)

  return response
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
