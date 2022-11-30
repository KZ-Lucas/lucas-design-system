import constate from 'constate';

import { compoundBuilder } from '@/utils/builder';

import useLeasons from './index.hook';
import { LeasonsBody, LeasonsFooter, LeasonsHeader, LeasonsWrapper } from './index.style';

export const [LeasonsProvider] = constate(useLeasons);

const LeasonsLayout = compoundBuilder(LeasonsProvider, {
  compound: {
    Header: LeasonsHeader,
    Body: LeasonsBody,
    Footer: LeasonsFooter,
  },
  wrapper: LeasonsWrapper,
});

export default LeasonsLayout;
