import { TypographyProps } from '@/lib/types';

export default function Text(props: TypographyProps) {
  return (
    <p className={`font-bold text-white ${props.className}`}>
      {props.children}
    </p>
  );
}
