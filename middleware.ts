// import createMiddleware from 'next-intl/middleware';
// import { NextRequest, NextResponse } from 'next/server';
// import { INTERNALIZATION_COOKIE_NAME } from 'shared/config';
// export function middleware(req: NextRequest) {
//   const locale = req.cookies.get(INTERNALIZATION_COOKIE_NAME) || 'en';
//   const url = new URL(req.url);
//   const pathname = url.pathname;
//   if (!pathname.startsWith(`/${locale}`)) {
//     url.pathname = `/${locale}${pathname}`;
//     return NextResponse.redirect(url);
//   }
//   return NextResponse.next();
// }
// export const config = {
//   matcher: ['/', '/(ru|en|fr)/:path*'],
// };
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*'],
};
