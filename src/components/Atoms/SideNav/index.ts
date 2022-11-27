import constate from 'constate';

import { compoundBuilder } from '@/utils/builder';

import Nav from './components/Nav';
import NavItem from './components/NavItem';
import useSideNav from './index.hook';

export const [SideNavProvider, useNavChange] = constate(
  useSideNav,
  (value) => value.handleSelectNav,
);

const SideNav = compoundBuilder(SideNavProvider, {
  compound: {
    Nav,
    NavItem,
  },
});

export default SideNav;
