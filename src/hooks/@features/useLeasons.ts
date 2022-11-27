import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import queryKey from '@/constants/queryKey';
import { getLeasons } from '@/services/leasons';

const useLeasons = () => {
  const queryData = useQuery(
    [queryKey.leasons.FETCH_LEASONS],
    async () => {
      const res = await getLeasons();

      /**? DUMMY API에서 별도의 유니크 ID를 주지 않아 직접 처리합니다. */
      return res.results.map((result) => ({ ...result, id: uuidv4() }));
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  return queryData;
};

export default useLeasons;
