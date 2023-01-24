import Image from 'next/image';

import { Store } from '@/lib/types';

import Text from '@/components/typography/Text';

export default function StoreCircleCard(props: Store) {
  return (
    <div className='col-span-1 flex flex-col items-center gap-4'>
      <div className='relative h-[80px] w-[80px] overflow-hidden rounded-full'>
        <Image src={props.picture_url} alt={props.store_name} fill />
      </div>
      <Text className='font-medium'>{props.store_name}</Text>
    </div>
  );
}
