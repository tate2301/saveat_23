import Head from 'next/head';

import SearchModal from '@/components/modals/SearchModal';
import Navbar from '@/components/navigation/Navbar';
import FavoriteOffers from '@/components/sections/FavoriteOffers';
import FeaturesAndStoreSection from '@/components/sections/FeaturesAndStoresSection';
import FooterSection from '@/components/sections/FooterSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import TrendingStoreSection from '@/components/sections/TrendingStoreSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className='container mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 md:gap-24'>
        <Navbar />
        <SearchModal />
        <FavoriteOffers />
        <FeaturesAndStoreSection />
        <TrendingStoreSection />
        <ReviewsSection />
        <FooterSection />
      </main>
    </>
  );
}
