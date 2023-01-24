import ReviewCard from '@/components/cards/ReviewCard';
import MutedText from '@/components/typography/MutedText';
import Text from '@/components/typography/Text';

export default function ReviewsSection() {
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex w-full flex-col items-baseline justify-between gap-4 md:flex-row'>
        <Text className='text-3xl font-medium text-white'>
          Find out why savers rate us!
        </Text>
        <MutedText>See all</MutedText>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {new Array(3).fill(0).map((_, i) => (
          <ReviewCard
            key={i}
            user={{
              display_name: 'Kamfes',
              profile_pic_url: '/images/snowguy.png',
            }}
            rating={3.2}
            text={
              "I love this app. It's so easy to use and I love the fact that I can save money on my favorite stores."
            }
          />
        ))}
      </div>
    </div>
  );
}
