import Balancer from 'react-wrap-balancer';

import { TypographyProps } from '@/lib/types';

export default function Heading(props: TypographyProps) {
  return (
    <p
      className={`text-4xl font-bold text-white md:text-5xl ${props.className}`}
    >
      <Balancer>{props.children}</Balancer>
    </p>
  );
}
