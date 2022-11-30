import { createTypography } from '@/utils/emotion';

import type { Typography, TypographySize, TypographyWeight } from '@/types/emotion';

export const typography: Record<TypographySize, Record<TypographyWeight, Typography>> = {
  xxs: createTypography({
    fontSize: 10,
    lineHeight: 12,
  }),
  xs: createTypography({
    fontSize: 12,
    lineHeight: 14,
  }),
  sm: createTypography({
    fontSize: 14,
    lineHeight: 16,
  }),
  md: createTypography({
    fontSize: 16,
    lineHeight: 18,
  }),
  lg: createTypography({
    fontSize: 18,
    lineHeight: 20,
  }),
  xl: createTypography({
    fontSize: 20,
    lineHeight: 22,
  }),
  xxl: createTypography({
    fontSize: 22,
    lineHeight: 24,
  }),
  '3xl': createTypography({
    fontSize: 28,
    lineHeight: 30,
  }),
  '4xl': createTypography({
    fontSize: 36,
    lineHeight: 38,
  }),
  '5xl': createTypography({
    fontSize: 48,
    lineHeight: 50,
  }),
};
