import { TypographyProps } from '@/lib/types';

export default function Heading(props: TypographyProps) {
  return (
    <p className={`text-3xl font-bold text-white ${props.className}`}>
      {props.children}
    </p>
  );
}
