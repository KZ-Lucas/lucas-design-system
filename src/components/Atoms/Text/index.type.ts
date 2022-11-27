import type { CSSProperties, ElementType } from 'react';
import type { IColorType } from '@/types/emotion';
import type { OverridableProps } from '@/utils/type';
import type { DEFAULT_ELEMENT } from './index.const';

export type FontWeightType = 400 | 500 | 700;
export type Typography =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'regular'
  | 'base'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xlarge'
  | '4xlarge'
  | '5xlarge';

export type TextBaseProps = {
  weight?: FontWeightType;
  size?: CSSProperties['fontSize'];
  color?: IColorType;
  align?: CSSProperties['textAlign'];
  lineHeight?: CSSProperties['lineHeight'];
  strike?: boolean;
  typography?: Typography;
};

export type TextProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<
  T,
  TextBaseProps
>;
