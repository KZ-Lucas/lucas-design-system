import constate from 'constate';

import { compoundBuilder } from '@/utils/builder';

import useResult from './index.hook';
import { ResultBody, ResultFooter, ResultHeader, ResultWrapper } from './index.style';

export const [ResultProvider, useGetChartData] = constate(useResult, (value) => value.getChartData);

const ResultLayout = compoundBuilder(ResultProvider, {
  wrapper: ResultWrapper,
  compound: {
    Header: ResultHeader,
    Body: ResultBody,
    Footer: ResultFooter,
  },
});

export default ResultLayout;
