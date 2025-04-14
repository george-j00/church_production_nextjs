// app/api/logout/route.js
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ message: 'Logged out successfully' });
    cookies().delete('Jwt_login_token')
    return response;
}
