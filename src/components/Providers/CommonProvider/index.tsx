import constate from 'constate';
import { MoonLoader } from 'react-spinners';

import { compoundBuilder } from '@/utils/builder';

import useCommonProvider from './index.hook';
import { Backdrop, LoadingWrapper } from './index.style';

import type { CommonProviderLayoutProps } from './index.type';

export const [provider, useIsLoadingContext, useAppLoadingContext] = constate(
  useCommonProvider,
  (value) => value.isLoading,
  (value) => value.loadingApi,
);

const CommonProviderLayout = (props: CommonProviderLayoutProps) => {
  const { children } = props;
  const isLoading = useIsLoadingContext();

  return (
    <>
      {isLoading && (
        <LoadingWrapper align="center" justify="center">
          <Backdrop />
          <MoonLoader color="white" size="44px" />
        </LoadingWrapper>
      )}

      {children}
    </>
  );
};

const CommonProvider = compoundBuilder(provider, {
  wrapper: CommonProviderLayout,
});

export default CommonProvider;
