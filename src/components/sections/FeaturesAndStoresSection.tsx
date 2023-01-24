import { ReactNode } from 'react';

import FeaturesCard from '@/components/cards/FeaturesCard';
import StoreCircleCard from '@/components/cards/StoreCircleCard';
import { ClockIcon, SearchIcon, ShoppingCartIcon } from '@/components/icons';
import Text from '@/components/typography/Text';

export default function FeaturesAndStoreSection() {
  return (
    <div className='grid grid-cols-2 gap-24'>
      <div className='col-span-1 flex flex-col gap-8'>
        <Text className='text-3xl font-medium text-white'>Trending Stores</Text>
        <div className='grid grid-cols-4 gap-8'>
          {new Array(12).fill(0).map((_, i) => (
            <StoreCircleCard
              key={i}
              store_name='Apple'
              picture_url='/images/sf.png'
            />
          ))}
        </div>
      </div>

      <div className='col-span-1 flex flex-col gap-8'>
        <Text className='text-3xl font-medium text-white'>
          Welcome to Saveat.co.uk, your one-stop destination for all the best
          discount codes and vouchers.
        </Text>
        <div className='grid grid-cols-3'>
          <div className='col-span-2 col-start-1'>
            <FeaturesCard
              title='Huge range of stores and offers'
              icon={<ShoppingCartIcon />}
            />
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='col-span-2 col-start-2'>
            <FeaturesCard
              title='Constantly checked and updated daily'
              icon={<ClockIcon />}
            />
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='col-span-2 col-start-1'>
            <FeaturesCard
              title='Add our browser extension and never miss a code again!'
              icon={<SearchIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
