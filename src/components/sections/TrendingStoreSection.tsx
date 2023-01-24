import StoreCard from '@/components/cards/StoreCard';
import MutedText from '@/components/typography/MutedText';
import Text from '@/components/typography/Text';

export default function TrendingStoreSection() {
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex w-full items-baseline justify-between'>
        <Text className='text-3xl font-medium text-white'>Trending Stores</Text>
        <MutedText className='text-sm'>See all</MutedText>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        {new Array(3).fill(0).map((_, i) => (
          <StoreCard
            key={i}
            store_name='Greggs Store'
            picture_url='/images/snowguy.png'
          />
        ))}
      </div>
    </div>
  );
}
