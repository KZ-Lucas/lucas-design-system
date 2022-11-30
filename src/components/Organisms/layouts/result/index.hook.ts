import { useCallback } from 'react';

import colors from '@/constants/themeAssets/colors';
import useLeasonStore from '@/store/@features/leason';

const useResult = () => {
  const { resultList } = useLeasonStore();

  const getChartData = useCallback(() => {
    const correctStatusList = Object.values(resultList);
    const correctCount = correctStatusList.filter((status) => status === 'correct').length;
    const wrongCount = correctStatusList.length - correctCount;

    return {
      labels: ['정답', '오답'],
      datasets: [
        {
          label: '풀이 결과',
          data: [correctCount, wrongCount],
          backgroundColor: [colors.secondary[600], colors.red[600]],
          borderColor: [colors.secondary[600], colors.red[600]],
          borderWidth: 1,
        },
      ],
    };
  }, [resultList]);

  return {
    getChartData,
  };
};

export default useResult;
