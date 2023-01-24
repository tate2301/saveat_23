import Head from 'next/head';
import { Suspense } from 'react';

import SearchModal from '@/components/modals/SearchModal';
import Navbar from '@/components/navigation/Navbar';
import FavoriteOffersSection from '@/components/sections/FavoriteOffersSection';
import FeaturesAndStoreSection from '@/components/sections/FeaturesAndStoresSection';
import FooterSection from '@/components/sections/FooterSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import TrendingStoreSection from '@/components/sections/TrendingStoreSection';
import Text from '@/components/typography/Text';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Saveat - Figma to React</title>
      </Head>
      <main className='container mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 tracking-tight md:gap-24'>
        <Navbar />
        <SearchModal />
        <Suspense
          fallback={<Text>Fetching our favorite offers. Please wait...</Text>}
        >
          <FavoriteOffersSection />
        </Suspense>
        <FeaturesAndStoreSection />
        <TrendingStoreSection />
        <Suspense fallback={<Text>Fetching our reviews. Please wait...</Text>}>
          <ReviewsSection />
        </Suspense>
        <FooterSection />
      </main>
    </>
  );
}
