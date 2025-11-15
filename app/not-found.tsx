import Link from 'next/link';
import { getServerSidePathname } from 'shared/lib/serverUtils';

export default async function NotFound() {
  const pathname = await getServerSidePathname();

  console.log('pathnamepathnamepathname', pathname);

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
