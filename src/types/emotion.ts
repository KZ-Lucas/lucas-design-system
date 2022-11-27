import type colors from '@/constants/colors';
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
