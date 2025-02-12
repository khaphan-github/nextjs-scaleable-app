import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CookieConfig } from "./config/keys/cookies";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(CookieConfig.accessToken)?.value;

  // If user is not logged in and tries to access protected routes, redirect to /auth
  if (!token && req.nextUrl.pathname !== "/auth") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // If user is logged in and tries to access /auth, redirect to home
  if (token && req.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // Allow navigation
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/auth"], // Protect these routes
};
