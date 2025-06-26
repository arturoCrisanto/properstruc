import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req) {
  return withAuth(req);
}

export const config = {
  matcher: [
    // Protect dashboard and any other protected routes
    "/dashboard/:path*",
    // Add other protected routes here as needed
    // "/profile/:path*",
    // "/settings/:path*",
  ],
};
