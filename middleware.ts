import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  console.log(request, "Middleware path:", request.nextUrl.pathname);
  console.log("Middleware token:", token ? "FOUND" : "MISSING");
  const protectedPaths = ["/dashboard"];

  if (
    protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      //   jwt.verify(token, process.env.JWT_SECRET!);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
