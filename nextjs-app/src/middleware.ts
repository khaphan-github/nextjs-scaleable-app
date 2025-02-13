import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CookieConfig } from "./config/keys/cookies";
import { AuthConfig } from "./modules/auth/config";

/**
 * Request len khogn co cookie thi redirect ve /auth
 * @param req 
 * @returns 
 */
export function middleware(req: NextRequest) {
  const token = req.cookies.get(CookieConfig.accessToken)?.value;

  if (!token && req.nextUrl.pathname !== AuthConfig.loginDomain) {
    return NextResponse.redirect(new URL(AuthConfig.loginDomain, req.url));
  }

  return NextResponse.next(); // Allow navigation
}

// Routes Middleware should not run on
// todo: Check agains to handle middlware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], // Protect these routes
};
