import { useCallback } from 'react';

import useAppLoading from './useAppLoading';

/** useWaitFor은 해당 Promise가 반환되기 전까지 Loading Indicator를 표시합니다. */
const useWaitFor = () => {
  const { startLoading, endLoading } = useAppLoading();
  const waitForSync = useCallback(
    async (cb: () => Promise<void>) => {
      startLoading();
      await cb();
      endLoading();
    },
    [endLoading, startLoading],
  );

  return { waitForSync };
};

export default useWaitFor;
