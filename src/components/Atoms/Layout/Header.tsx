import React from 'react';

import { Flex } from '@/components/Atoms';

import type { FlexProps } from '../Flex/index.type';

type HeaderProps = React.PropsWithChildren<FlexProps>;

const Header = (props: HeaderProps) => {
  const { children, ...rest } = props;
  console.log('hasdasda??');
  return (
    <Flex as="nav" {...rest}>
      {children}
    </Flex>
  );
};

export default Header;
