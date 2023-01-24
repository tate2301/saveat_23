import { useQuery } from '@tanstack/react-query';

import { getReviews } from '@/lib/queries';

import ReviewCard from '@/components/cards/ReviewCard';
import MutedText from '@/components/typography/MutedText';
import Text from '@/components/typography/Text';

export default function ReviewsSection() {
  const { data } = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex w-full flex-col items-baseline justify-between gap-4 md:flex-row'>
        <Text className='text-3xl font-medium text-white'>
          Find out why savers rate us!
        </Text>
        <MutedText>See all</MutedText>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {data?.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </div>
  );
}
