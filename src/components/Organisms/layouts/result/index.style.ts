import styled from '@emotion/styled';

import { Flex } from '@/components/Atoms';

export const ResultWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.blueGray[800]};
  min-height: 100vh;
  flex-direction: column;
  padding: 1rem;
`;

export const ResultHeader = styled(Flex)``;

export const ResultBody = styled(Flex)``;

export const ResultFooter = styled(Flex)``;
