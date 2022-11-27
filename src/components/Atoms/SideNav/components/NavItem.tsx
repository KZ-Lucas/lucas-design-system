import React from 'react';
import styled from '@emotion/styled';

type NavItemProps = {
  eventKey: string;
  active?: boolean;
} & React.ComponentProps<'li'>;

const NavItem = (props: React.PropsWithChildren<NavItemProps>) => {
  const { children, eventKey, active, ...rest } = props;

  return (
    <SidebarItem active={active} data-event-key={eventKey} {...rest}>
      {children}
    </SidebarItem>
  );
};

export default NavItem;

const SidebarItem = styled.li<{ active?: boolean }>`
  cursor: pointer;
`;
