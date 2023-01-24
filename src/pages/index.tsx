import Head from 'next/head';

import SearchModal from '@/components/modals/SearchModal';
import Navbar from '@/components/navigation/Navbar';

export default function HomePage() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className='container mx-auto flex flex-col gap-12 md:py-12'>
        <Navbar />
        <SearchModal />
      </main>
    </>
  );
}
