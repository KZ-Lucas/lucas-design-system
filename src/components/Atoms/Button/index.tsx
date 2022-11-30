import { isValidElement } from 'react';

import { Flex, Typography } from '@/components/Atoms';

import BUTTON_SIZES from './index.const';
import { ButtonBase } from './index.style';

import type { ButtonProps } from './index.type';

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { size, _text, variant = 'default', children } = props;

  const { fontSize, ...styles } = BUTTON_SIZES[variant][size];

  return (
    <ButtonBase {...styles} {...props}>
      <Flex direction="row" align="center" justify="center" space="0.5rem">
        {isValidElement(children) ? (
          children
        ) : (
          <Typography size={fontSize ?? 'md'} weight={_text?.weight ?? 'regular'} {..._text}>
            {children}
          </Typography>
        )}
      </Flex>
    </ButtonBase>
  );
};

export default Button;
