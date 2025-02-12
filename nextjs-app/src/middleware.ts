import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  return response
}