import { isValidElement } from 'react';

import Flex from '../Flex';
import Text from '../Text';
import buttonSizes from './index.const';
import { ButtonBase } from './index.style';

import type { ButtonProps } from './index.type';

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { size, _text, variant = 'default', children, ...rest } = props;

  const { fontSize, ...styles } = buttonSizes[variant][size];

  return (
    <ButtonBase {...rest} {...styles}>
      <Flex direction="row" align="center" justify="center" space="0.5rem">
        {isValidElement(children) ? (
          children
        ) : (
          <Text size={fontSize} {..._text}>
            {children}
          </Text>
        )}
      </Flex>
    </ButtonBase>
  );
};

export default Button;
