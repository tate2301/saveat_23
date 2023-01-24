import StoreCard from '@/components/cards/StoreCard';
import MutedText from '@/components/typography/MutedText';
import Text from '@/components/typography/Text';

export default function TrendingStoreSection() {
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex w-full flex-col items-baseline justify-between gap-4 md:flex-row'>
        <Text className='text-3xl font-medium text-white'>Trending Stores</Text>
        <MutedText>See all</MutedText>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {new Array(3).fill(0).map((_, i) => (
          <StoreCard
            key={i}
            store_name='Greggs Store'
            picture_url='/images/snowguy.png'
            profile_pic_url='/images/store_logo.png'
          />
        ))}
      </div>
    </div>
  );
}
