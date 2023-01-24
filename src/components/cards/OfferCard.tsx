import Image from 'next/image';

import { Offer } from '@/lib/types';

import MutedText from '@/components/typography/MutedText';
import Text from '@/components/typography/Text';

export default function OfferCard(props: Offer) {
  return (
    <div className='flex-noshrink relative min-h-[440px] min-w-[320px] md:min-w-[280px] lg:col-span-1 lg:w-auto'>
      <Image src={props.picture_url} alt={props.title} fill />
      <div className='absolute bottom-0 left-0 w-full p-8'>
        <div className='flex flex-col gap-4 rounded-xl bg-slate-900 p-4 text-white'>
          <Text className='text-xl font-medium'>{props.title}</Text>
          <MutedText>{props.description}</MutedText>
          <div className='flex items-center gap-4'>
            <div className='relative h-[40px] w-[40px] rounded-full'>
              <Image
                src={props.user.profile_picture_url}
                alt={props.user.display_name}
                fill
              />
            </div>
            <Text className='font-medium'>{props.user.display_name}</Text>
            <Text className='text-yellow-500'>
              &bull; Save {props.discount}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
