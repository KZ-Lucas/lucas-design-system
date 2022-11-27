import constate from 'constate';

import { compoundBuilder } from '@/utils/builder';

import useLeasons from './index.hook';
import { LeasonsBody, LeasonsFooter, LeasonsHeader } from './index.style';

export const [LeasonsProvider, useLeasonsApi] = constate(useLeasons, (value) => value.api);

const LeasonsLayout = compoundBuilder(LeasonsProvider, {
  compound: {
    Header: LeasonsHeader,
    Body: LeasonsBody,
    Footer: LeasonsFooter,
  },
});

export default LeasonsLayout;
