import { ReactNode } from 'react';

import Text from '@/components/typography/Text';

export default function FeaturesCard(props: {
  title: string;
  icon: ReactNode;
}) {
  return (
    <div className='flex items-center justify-center gap-2 rounded bg-slate-800 p-4'>
      <div className='rounded-full bg-slate-700 p-2 text-white'>
        {props.icon}
      </div>
      <Text className='font-medium'>{props.title}</Text>
    </div>
  );
}
