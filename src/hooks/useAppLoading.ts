import { useAppLoadingContext } from '@/components/Providers/CommonProvider';

const useAppLoading = () => {
  const loadingApi = useAppLoadingContext();

  return loadingApi;
};

export default useAppLoading;
