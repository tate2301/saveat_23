import { TypographyProps } from '@/lib/types';

export default function MutedText(props: TypographyProps) {
  return (
    <p className={`text-3xl font-bold text-slate-200 ${props.className}`}>
      {props.children}
    </p>
  );
}
