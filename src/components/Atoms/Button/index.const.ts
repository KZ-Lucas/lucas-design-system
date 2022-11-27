import type { ButtonSize, ButtonStyle, ButtonVariant } from './index.type';

const buttonSizes: Record<ButtonVariant, Record<ButtonSize, ButtonStyle>> = {
  default: {
    large: {
      height: '44px',
      fontSize: '16px',
      px: 4,
    },
    medium: {
      height: '40px',
      fontSize: '13px',
      px: 3,
    },
    small: {
      height: '32px',
      fontSize: '13px',
      px: 2.5,
    },
    tiny: {
      height: '28px',
      fontSize: '13px',
      px: 2,
    },
  },
  pill: {
    large: {
      height: '44px',
      border: 0,
      fontSize: '16px',
      bgColor: 'transparent',
      px: 4,
    },
    medium: {
      height: '40px',
      border: 0,
      fontSize: '13px',
      bgColor: 'transparent',
      px: 3,
    },
    small: {
      height: '32px',
      border: 0,
      fontSize: '13px',
      bgColor: 'transparent',
      px: 2.5,
    },
    tiny: {
      height: '28px',
      border: 0,
      fontSize: '13px',
      bgColor: 'transparent',
      px: 2,
    },
  },
  text: {
    large: {
      fontSize: '15px',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
    medium: {
      fontSize: '15px',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
    small: {
      fontSize: '15px',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
    tiny: {
      fontSize: '15px',
      border: 0,
      bgColor: 'transparent',
      px: 0,
    },
  },
};

export default buttonSizes;
