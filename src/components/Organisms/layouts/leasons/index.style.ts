import styled from '@emotion/styled';

import { Flex, Layout } from '@/components/Atoms';

export const LeasonsHeader = styled(Layout.Header)`
  flex: 1;
`;

export const LeasonsFooter = styled(Layout.Footer)`
  width: 100%;
`;

export const LeasonsBody = styled(Layout.Body)``;

export const LeasonsWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.blueGray[800]};
  min-height: 100vh;
  flex-direction: column;
  padding: 1rem;
`;
