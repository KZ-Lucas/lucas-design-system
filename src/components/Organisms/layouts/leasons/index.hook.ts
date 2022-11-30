import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePage } from '@/constants/routes';
import useLeasonStore from '@/store/@features/leason';

import type { LeasonType } from '@/types/leason';

const useLeasons = () => {
  const { leasonList, sequence } = useLeasonStore();
  const navigate = useNavigate();

  const currentLeason = useMemo<LeasonType | undefined>(
    () => leasonList[sequence],
    [leasonList, sequence],
  );

  /** 질문 데이터가 없을 경우 시작 페이지으로 이동 */
  useEffect(() => {
    if (!currentLeason) {
      navigate(RoutePage.root.prepare);
    }
  }, [currentLeason, navigate]);

  return {};
};

export default useLeasons;
