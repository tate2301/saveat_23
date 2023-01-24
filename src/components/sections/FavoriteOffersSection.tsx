import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRef } from 'react';

import { getFavoriteOffers } from '@/lib/queries';

import OfferCard from '@/components/cards/OfferCard';
import { ChevronLeft, ChevronRight } from '@/components/icons';
import Text from '@/components/typography/Text';

export default function FavoriteOffersSection() {
  const scrollableContainerRef = useRef(null);
  const { data } = useQuery({
    queryKey: ['favoriteOffers'],
    queryFn: getFavoriteOffers,
  });

  return (
    <Link href='#' className='flex flex-col gap-6'>
      <Text className='text-3xl font-medium'>Our Favorite Offers</Text>
      <div className='flex flex-col gap-4'>
        <div className='flex w-full justify-between'>
          <button className='z-10 rounded-full bg-slate-800 p-2 text-white shadow-lg '>
            <ChevronLeft />
          </button>
          <button className='z-10 rounded-full bg-slate-800 p-2 text-white shadow-lg '>
            <ChevronRight />
          </button>
        </div>
        <div
          ref={scrollableContainerRef}
          className='scrollbar-hide relative flex snap-x snap-mandatory gap-4 overflow-x-auto lg:grid lg:grid-cols-4'
        >
          {data?.map((offer, i) => (
            <OfferCard {...offer} key={offer.title + i} />
          ))}
        </div>
      </div>
    </Link>
  );
}
