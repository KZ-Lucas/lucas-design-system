import { useCallback } from 'react';

type SideNavHookParams = {
  onSelect: (selectedKey: string) => void;
};

const useSideNav = (props: SideNavHookParams) => {
  const { onSelect } = props;

  const handleSelectNav = useCallback(
    (navKey: string) => {
      onSelect(navKey);
    },
    [onSelect],
  );

  return {
    handleSelectNav,
  };
};

export default useSideNav;
