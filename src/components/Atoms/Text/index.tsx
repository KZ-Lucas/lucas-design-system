import { cx } from '@emotion/css';

import { getColor } from '@/utils/emotion';

import { DEFAULT_ELEMENT, FontSize, LineHeight } from './index.const';
import { textDefaultStyle } from './index.style';

import type { ElementType } from 'react';
import type { TextProps } from './index.type';

const Text = <T extends ElementType>(props: TextProps<T>) => {
  const {
    weight,
    size: customSize,
    lineHeight: customLineHeight,
    color = 'black',
    align,
    className,
    as,
    strike,
    children,
    typography = 'medium',
    ...rest
  } = props;

  const Component = as ?? DEFAULT_ELEMENT;

  const size = customSize ?? FontSize[typography];
  const lineHeight = customLineHeight ?? LineHeight[typography];

  const defaultStyle = textDefaultStyle({
    ...props,
    size,
    lineHeight,
    color: getColor(color),
  });

  return (
    <Component {...rest} className={cx(defaultStyle, className)}>
      {children}
    </Component>
  );
};

export default Text;
