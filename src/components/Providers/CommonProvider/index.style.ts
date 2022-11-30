import styled from '@emotion/styled';

import { Flex } from '@/components/Atoms';

export const LoadingWrapper = styled(Flex)`
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const Backdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.blueGray[600]};
  opacity: 0.8;
`;
