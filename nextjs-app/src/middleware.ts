import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CookieConfig } from "./config/keys/cookies";

/**
 * Request len khogn co cookie thi redirect ve /auth
 * @param req 
 * @returns 
 */
export function middleware(req: NextRequest) {
  const isProtectedRoute = true;
  const token = req.cookies.get(CookieConfig.accessToken)?.value;

  if (isProtectedRoute && !token && req.nextUrl.pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next(); // Allow navigation
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], // Protect these routes
};
