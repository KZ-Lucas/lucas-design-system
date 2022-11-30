import type { ComponentProps, CSSProperties } from 'react';
import type { TextBaseProps } from '@/components/Atoms/Typography/index.type';
import type { IColorType, SpacingLayout, TypographySize } from '@/types/emotion';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonStyle = {
  height?: string;
  fontSize?: TypographySize;
  bgColor?: IColorType;
  border?: CSSProperties['border'];
} & SpacingLayout;

export type ButtonVariant = 'pill' | 'text' | 'default';

export type ButtonProps = {
  size: ButtonSize;
  variant?: ButtonVariant;
  _text?: TextBaseProps;
  fullWidth?: boolean;
} & ComponentProps<'button'> &
  ButtonStyle;
