import { TypographyProps } from '@/lib/types';

export default function Text(props: TypographyProps) {
  return (
    <p className={`text-slate-100 ${props.className}`}>{props.children}</p>
  );
}
