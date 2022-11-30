import type { CSSProperties } from 'react';
import type { theme } from '@/constants/theme';
import type colors from '@/constants/themeAssets/colors';
import type { Leaves } from '@/utils/type';
import type { MARGIN_SPACING_OPTIONS, PADDING_SPACING_OPTIONS } from './../constants/emotion';

export type MarginSpacing = {
  [key in typeof MARGIN_SPACING_OPTIONS[number]]?: number;
};

export type PaddingSpacing = {
  [key in typeof PADDING_SPACING_OPTIONS[number]]?: number;
};

export type SpacingLayout = MarginSpacing & PaddingSpacing;

export type IColorType = Leaves<typeof colors>;

export type TypographySize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | '3xl'
  | '4xl'
  | '5xl';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type TypographyWeight = 'light' | 'regular' | 'bold' | 'semiBold';
export type Typography = {
  fontSize: string;
  fontWeight: string | number;
  lineHeight: string;
};

export type ButtonStyle = {
  height?: string;
  fontSize?: string;
  bgColor?: IColorType;
  border?: CSSProperties['border'];
} & SpacingLayout;

export type CreateTypographyTokenParams = {
  fontSize: number;
  fontWeight: string | number;
  lineHeight: number;
};

export type CreateTypographyParams = {
  fontSize: number;
  lineHeight: number;
};

export type Theme = typeof theme;
