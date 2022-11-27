import styled from '@emotion/styled';

import SideNav from '@/components/Atoms/SideNav';

export const LeasonNavItemBase = styled(SideNav.NavItem)`
  background-color: ${(props) => (props.active ? props.theme.colors.blueGray[600] : 'transparent')};
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  transition: all 0.08s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blueGray[600]};
    border-radius: 0.0625rem;
    box-shadow: 0.5rem 0 0 0.25rem ${({ theme }) => theme.colors.blueGray[600]},
      -0.5rem 0 0 0.25rem ${({ theme }) => theme.colors.blueGray[600]};
  }
`;
