import FeaturesCard from '@/components/cards/FeaturesCard';
import StoreCircleCard from '@/components/cards/StoreCircleCard';
import { ClockIcon, SearchIcon, ShoppingCartIcon } from '@/components/icons';
import Text from '@/components/typography/Text';

export default function FeaturesAndStoreSection() {
  return (
    <div className='grid grid-cols-1 gap-24 lg:grid-cols-2'>
      <div className='col-span-1 flex flex-col gap-8'>
        <Text className='text-3xl font-medium text-white'>Trending Stores</Text>
        <div className='grid grid-cols-3 gap-8 md:grid-cols-4'>
          {new Array(8).fill(0).map((_, i) => (
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
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='col-span-1 col-start-1 md:col-span-2'>
            <FeaturesCard
              title='Huge range of stores and offers'
              icon={<ShoppingCartIcon />}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='col-span-1 col-start-2 md:col-span-2'>
            <FeaturesCard
              title='Constantly checked and updated daily'
              icon={<ClockIcon />}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='col-span-1 col-start-1 md:col-span-2'>
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
