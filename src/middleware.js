import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect lowercase /academy to canonical /Academy
  if (pathname === '/academy') {
    const url = request.nextUrl.clone();
    url.pathname = '/Academy';
    return NextResponse.redirect(url, 308);
  }

  if (pathname.startsWith('/academy/')) {
    const url = request.nextUrl.clone();
    url.pathname = '/Academy' + pathname.slice(8);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/academy', '/academy/:path*', '/Academy', '/Academy/:path*'],
};
