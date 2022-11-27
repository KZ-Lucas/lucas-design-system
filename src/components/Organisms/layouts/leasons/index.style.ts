import styled from '@emotion/styled';

import { Layout } from '@/components/Atoms';

export const LeasonsHeader = styled(Layout.Header)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.blueGray[900]};
  padding: 0.375rem 1rem;
  height: 48px;
  width: 100%;
`;

export const LeasonsFooter = styled(Layout.Footer)`
  border-top: 1px solid ${({ theme }) => theme.colors.blueGray[700]};
  background-color: ${({ theme }) => theme.colors.blueGray[700]};
  height: 3.6rem;
  width: 100%;
`;

export const LeasonsBody = styled(Layout.Body)`
  height: calc(100vh - 48px - 3.6rem);
  background-color: ${({ theme }) => theme.colors.blueGray[700]};
`;
