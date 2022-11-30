import { Pie } from 'react-chartjs-2';

import { Flex } from '@/components/Atoms';

import { useGetChartData } from '../../layouts/result';

const ResultChartSection = () => {
  const getChartData = useGetChartData();

  return (
    <Flex>
      <Pie data={getChartData()} />
    </Flex>
  );
};

export default ResultChartSection;
