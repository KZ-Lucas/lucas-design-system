import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePage } from '@/constants/routes';
import useLeasonStore from '@/store/@features/leason';

import type { LeasonType } from '@/types/leason';

const useLeasons = () => {
  const { leasonList, nextStep, sequence, submitUserAnswer, resultList, fetchLeasonList } =
    useLeasonStore();
  const navigate = useNavigate();

  const currentLeason = useMemo<LeasonType | undefined>(
    () => leasonList[sequence],
    [leasonList, sequence],
  );

  const currentCorrectStatus = useMemo(
    () => resultList?.[currentLeason?.id!],
    [resultList, currentLeason?.id],
  );

  const handleSubmitAnswer = useCallback(
    (answer: string) => {
      if (currentLeason) {
        submitUserAnswer(currentLeason.id, answer);
      }
    },
    [currentLeason, submitUserAnswer],
  );

  const handleNextStep = useCallback(() => {
    if (nextStep() === 10) {
      navigate(RoutePage.root.result);
    }
  }, [navigate, nextStep]);

  return {
    currentLeason,
    handleNextStep,
    leasonList,
    fetchLeasonList,
    sequence,
    currentCorrectStatus,
    handleSubmitAnswer,
  };
};

export default useLeasons;
