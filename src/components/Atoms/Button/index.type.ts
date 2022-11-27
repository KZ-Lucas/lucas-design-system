import type { ComponentProps, CSSProperties } from 'react';
import type { IColorType, SpacingLayout } from '@/types/emotion';
import type { TextBaseProps } from '../Text/index.type';

export type ButtonSize = 'small' | 'medium' | 'large' | 'tiny';
export type ButtonStyle = {
  height?: string;
  fontSize?: string;
  bgColor?: IColorType;
  border?: CSSProperties['border'];
} & SpacingLayout;

export type ButtonVariant = 'pill' | 'text' | 'default';

export type ButtonProps = {
  size: 'small' | 'medium' | 'large' | 'tiny';
  variant?: ButtonVariant;
  _text?: TextBaseProps;
} & ComponentProps<'button'> &
  ButtonStyle;
