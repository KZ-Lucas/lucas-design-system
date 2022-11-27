import type { CSSProperties, ElementType } from 'react';
import type { SpacingLayout } from '@/types/emotion';
import type { OverridableProps } from '@/utils/type';

type FlexBaseProps = {
  display?: 'inline-flex' | 'flex';
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  space?: CSSProperties['gap'];
};

export type FlexProps<T extends ElementType = 'div'> = OverridableProps<T, FlexBaseProps> &
  SpacingLayout;
