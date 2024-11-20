import { auth } from "@/auth"

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(new URL("/api/auth/signin", req.url))
  }
})

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
  // matcher: ["/"],
  matcher: [
    "/",
    "/dashboard/:path*",
    "/profile/:path*",

    // Exclude auth routes
    "/((?!api|_next/static|_next/image|favicon.ico|login|register).*)",
  ]
}