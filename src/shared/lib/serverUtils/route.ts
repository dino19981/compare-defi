import { headers } from 'next/headers';

export const getServerSidePathname = async () => {
  const headersList = await headers();

  const referer = headersList.get('referer') || '';
  const xUrl = headersList.get('x-url') || '';
  const urlString = xUrl || referer || '';

  if (!urlString) {
    return null;
  }

  try {
    const url = new URL(urlString);
    const pathnameWithoutLocale = url.pathname.split('/').slice(1).join('/');
    return pathnameWithoutLocale;
  } catch {
    const pathnameWithoutLocale = urlString.split('/').slice(1).join('/');
    return pathnameWithoutLocale;
  }
};
