import { useCallback, useState } from 'react';

const useCommonProvider = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const endLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    loadingApi: { startLoading, endLoading },
  };
};

export default useCommonProvider;
