import styled from '@emotion/styled';

import { Layout } from '@/components/Atoms';

export const PrepareBody = styled(Layout.Body)`
  background-color: ${({ theme }) => theme.colors.blueGray[800]};
  min-height: 100vh;
`;
