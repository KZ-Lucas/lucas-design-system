import type Button from '@/components/Atoms/Button';
import type { LeasonResultType } from '@/store/@features/leason/index.type';

export type LeasonAnswerButtonProps = {
  title: string;
  correctType?: LeasonResultType;
} & Omit<React.ComponentProps<typeof Button>, 'children'>;
