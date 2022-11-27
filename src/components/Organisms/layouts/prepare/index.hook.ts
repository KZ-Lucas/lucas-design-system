import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePage } from '@/constants/routes';
import useLeasons from '@/hooks/@features/useLeasons';

const usePrepare = () => {
  const { data: leasonList, isLoading } = useLeasons();
  const navigate = useNavigate();

  const handleNextPress = useCallback(() => {
    navigate(RoutePage.root.leasons);
  }, [navigate]);

  return {
    handleNextPress,
    isLoading,
  };
};

export default usePrepare;
