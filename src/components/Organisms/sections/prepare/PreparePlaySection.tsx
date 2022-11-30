import { useCallback } from 'react';

import { Flex } from '@/components/Atoms';
import PrepareNextButton from '@/components/Molecules/components/prepare/PrepareNextButton';
import useLeasons from '@/hooks/useLeasons';
import useWaitFor from '@/hooks/useWaitFor';
import useTimerStore from '@/store/@features/timer';

const PreparePlaySection = () => {
  const { waitForSync } = useWaitFor();
  const { startTimer } = useTimerStore();
  const { fetchLeasonList } = useLeasons();

  const handleNext = useCallback(async () => {
    await waitForSync(fetchLeasonList);
    startTimer();
  }, [fetchLeasonList, startTimer, waitForSync]);

  return (
    <Flex direction="column">
      <PrepareNextButton onClick={handleNext}>문제 풀기</PrepareNextButton>
    </Flex>
  );
};

export default PreparePlaySection;
