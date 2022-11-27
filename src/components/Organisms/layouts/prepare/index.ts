import constate from 'constate';

import { compoundBuilder } from '@/utils/builder';

import usePrepare from './index.hook';
import { PrepareBody } from './index.style';

export const [PrepareProvider, useNextHandler, useIsFetchLoading] = constate(
  usePrepare,
  (value) => value.handleNextPress,
  (value) => value.isLoading,
);

const PrepareLayout = compoundBuilder(PrepareProvider, {
  compound: {
    Body: PrepareBody,
  },
});

export default PrepareLayout;
