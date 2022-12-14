import _get from 'lodash/get';

import colors from '@/constants/themeAssets/colors';

import type {
  CreateTypographyParams,
  CreateTypographyTokenParams,
  IColorType,
  MarginSpacing,
  PaddingSpacing,
  Typography,
  TypographyWeight,
} from '@/types/emotion';

const MULTIPLE = 4;

export const marginSpacingStyle = (props: MarginSpacing): string => {
  const { mx, my } = props;
  const { mt = my, mb = my, ml = mx, mr = mx } = props;
  const margins = Object.entries({ top: mt, bottom: mb, left: ml, right: mr });

  return margins
    .reduce<string[]>((arr, [position, value]) => {
      if (typeof value === 'number') {
        arr.push(`margin-${position}: ${(value ?? 0) * MULTIPLE}px`);
      }

      return arr;
    }, [])
    .join(';');
};

export const paddingSpacingStyle = (props: PaddingSpacing): string => {
  const { px, py } = props;
  const { pt = py, pb = py, pl = px, pr = px } = props;
  const paddings = Object.entries({ top: pt, bottom: pb, left: pl, right: pr });

  return paddings
    .filter(([_position, value]) => typeof value === 'number')
    .map(([position, value]) => `padding-${position}: ${(value ?? 0) * MULTIPLE}px`)
    .join(';');
};

export const getColor = (colorType: IColorType) => {
  return _get(colors, colorType);
};

export const createTypographyToken = (params: CreateTypographyTokenParams) => {
  return {
    fontSize: `${params.fontSize}px`,
    fontWeight: params.fontWeight,
    lineHeight: `${params.lineHeight}px`,
  };
};

export const createTypography = ({
  fontSize,
  lineHeight,
}: CreateTypographyParams): Record<TypographyWeight, Typography> => {
  return {
    light: createTypographyToken({
      fontSize,
      fontWeight: 'light',
      lineHeight,
    }),
    regular: createTypographyToken({
      fontSize,
      fontWeight: 'normal',
      lineHeight,
    }),
    bold: createTypographyToken({
      fontSize,
      fontWeight: 'bold',
      lineHeight,
    }),
    semiBold: createTypographyToken({
      fontSize,
      fontWeight: 600,
      lineHeight,
    }),
  };
};
