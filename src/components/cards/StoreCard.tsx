import Image from 'next/image';

import { Store } from '@/lib/types';

import Text from '@/components/typography/Text';

export default function StoreCard(props: Store) {
  return (
    <div className='flex flex-col gap-4 py-4'>
      <div className='relative py-4'>
        <div className='relative flex min-h-[360px]'>
          <Image src={props.picture_url} alt={props.store_name} fill />
        </div>
        <div className='absolute inset-x-auto bottom-[-10px] left-[50%] translate-x-[-50%] shadow'>
          <div className='relative h-[60px] w-[60px] overflow-hidden rounded-full'>
            <Image
              src={props.profile_pic_url ?? ''}
              alt={props.store_name}
              fill
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center text-center'>
        <Text className='text-xl font-medium'>{props.store_name}</Text>
      </div>
    </div>
  );
}
