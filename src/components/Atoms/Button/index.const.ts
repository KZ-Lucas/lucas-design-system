import type { ButtonSize, ButtonStyle, ButtonVariant } from './index.type';

const BUTTON_SIZES: Record<ButtonVariant, Record<ButtonSize, ButtonStyle>> = {
  default: {
    xl: {
      height: '56px',
      fontSize: 'xl',
      px: 4,
    },
    lg: {
      height: '44px',
      fontSize: 'lg',
      px: 4,
    },
    md: {
      height: '40px',
      fontSize: 'md',
      px: 3,
    },
    sm: {
      height: '32px',
      fontSize: 'md',
      px: 2.5,
    },
    xs: {
      height: '28px',
      fontSize: 'md',
      px: 2,
    },
  },
  pill: {
    xl: {
      height: '56px',
      border: 0,
      fontSize: 'xl',
      bgColor: 'transparent',
      px: 4,
    },
    lg: {
      height: '44px',
      border: 0,
      fontSize: 'lg',
      bgColor: 'transparent',
      px: 4,
    },
    md: {
      height: '40px',
      border: 0,
      fontSize: 'md',
      bgColor: 'transparent',
      px: 3,
    },
    sm: {
      height: '32px',
      border: 0,
      fontSize: 'md',
      bgColor: 'transparent',
      px: 2.5,
    },
    xs: {
      height: '28px',
      border: 0,
      fontSize: 'md',
      bgColor: 'transparent',
      px: 2,
    },
  },
  text: {
    xl: {
      fontSize: 'md',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
    lg: {
      fontSize: 'md',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
    md: {
      fontSize: 'md',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
    sm: {
      fontSize: 'md',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
    xs: {
      fontSize: 'md',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
  },
};

export default BUTTON_SIZES;
