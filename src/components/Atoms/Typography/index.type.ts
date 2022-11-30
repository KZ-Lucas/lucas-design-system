import type { CSSProperties, ElementType } from 'react';
import type { IColorType, TypographySize, TypographyWeight } from '@/types/emotion';
import type { OverridableProps } from '@/utils/type';
import type { DEFAULT_ELEMENT } from './index.const';

export type TextBaseProps = {
  weight?: TypographyWeight;
  size: TypographySize;
  color?: IColorType;
  align?: CSSProperties['textAlign'];
  lineHeight?: CSSProperties['lineHeight'];
  strike?: boolean;
};

export type TextProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<
  T,
  TextBaseProps
>;
