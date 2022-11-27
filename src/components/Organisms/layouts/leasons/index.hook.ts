import { useMemo } from "react";

type LeasonsHookParams = {
  onSubmit: () => void;
};

const useLeasons = (params: LeasonsHookParams) => {
  const { onSubmit } = params;

  const memoizedApiObj = useMemo(() => ({ onSubmit }), [onSubmit]);

  return {
    api: memoizedApiObj,
  };
};

export default useLeasons;
