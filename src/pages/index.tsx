import Head from 'next/head';

import Navbar from '@/components/navigation/Navbar';

export default function HomePage() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className='container mx-auto'>
        <Navbar />
      </main>
    </>
  );
}
