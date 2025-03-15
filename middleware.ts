import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  if (path === "/") {
    return NextResponse.redirect(new URL("/country", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/country/:path*", "/"],
};
