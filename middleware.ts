import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose";

export const middleware = async (req: NextRequest) => {

   const token = req.cookies.get('Jwt_login_token')?.value; 

  if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
  }
  try {
  const hasVerifiedToken = token && await jwtVerify(token, new TextEncoder().encode("your_secret_key"));

    if (hasVerifiedToken) {
      return NextResponse.next()
    }
  } catch (error) {
    console.error("Token verification error:", error);
    return NextResponse.redirect('/admin/login');
  }
};

export const config = {
  matcher: ["/admin","/admin/dashboard" , "/admin/dashboard/events" ,"/admin/dashboard/upcoming-events","/admin/dashboard/prayer-requests" ,"/admin/dashboard/parish","/admin/dashboard/parish-members","/admin/dashboard/banner"],
}
