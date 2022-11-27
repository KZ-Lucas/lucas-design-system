import styled from '@emotion/styled';

import { Flex, Text } from '@/components/Atoms';

import { LeasonNavItemBase } from './LeassonNavItem.style';

import type { ComponentProps } from 'react';

type LeasonNavItemProps = ComponentProps<typeof LeasonNavItemBase>;

const LeasonNavItem = (props: LeasonNavItemProps) => {
  return (
    <LeasonNavItemBase {...props}>
      <Flex direction="row" align="center" space="8px">
        <Circle align="center" justify="center">
          {/* <CheckBadgeIcon width={12} height={12} color="#e1e1e1" /> */}
        </Circle>
        <Text typography="base" color="blueGray.200">
          아하 질문
        </Text>
      </Flex>
    </LeasonNavItemBase>
  );
};

export default LeasonNavItem;

const Circle = styled(Flex)`
  border-radius: 50%;
  border: 2px solid #e1e1e1;

  width: 18px;
  height: 18px;
`;
