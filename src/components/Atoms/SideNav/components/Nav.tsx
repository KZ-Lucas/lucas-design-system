import React, { useCallback } from 'react';
import styled from '@emotion/styled';

import { useNavChange } from '..';

type NavProps = {};

const Nav = (props: React.PropsWithChildren<NavProps>) => {
  const { children } = props;
  const handleChangeNav = useNavChange();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLUListElement>) => {
      const target = event.target as HTMLElement;
      const li = target.closest('li');

      if (li?.dataset.eventKey) {
        handleChangeNav(li.dataset.eventKey);
      }
    },
    [handleChangeNav],
  );

  return <NavBase onClick={handleClick}>{children}</NavBase>;
};

export default Nav;

const NavBase = styled.ul`
  flex-basis: 12.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.blueGray[800]};
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
`;
