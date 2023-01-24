import Image from 'next/image';

import { Review } from '@/lib/types';

import { DotIcon, RatingStarIcon } from '@/components/icons';
import Text from '@/components/typography/Text';

export default function ReviewCard(props: Review) {
  return (
    <div className='col-span-1 flex flex-col gap-4 rounded bg-slate-800 p-4'>
      <div className='flex gap-4'>
        <div className='relative aspect-square h-full overflow-hidden rounded-full'>
          <Image
            src={props.user.profile_pic_url}
            alt={props.user.display_name}
            fill
          />
        </div>
        <div>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-1'>
              <div className='text-yellow-500'>
                <RatingStarIcon />
              </div>
              <Text>{props.rating}/5</Text>
            </div>
          </div>
          <Text className='font-medium'>{props.user.display_name}</Text>
        </div>
        <div className='flex flex-grow justify-end text-right'>
          <div className='flex flex-col items-end text-slate-300'>
            <DotIcon />
            <Text className='text-right'>2 month ago</Text>
          </div>
        </div>
      </div>
      <Text>{props.text}</Text>
    </div>
  );
}
