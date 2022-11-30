import { useEffect } from 'react';

import useLeasonStore from '@/store/@features/leason';

const usePrepare = () => {
  useEffect(() => {
    useLeasonStore.persist.clearStorage();
  }, []);

  return {};
};

export default usePrepare;
