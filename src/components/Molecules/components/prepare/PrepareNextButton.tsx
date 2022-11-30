import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Atoms';
import { RoutePage } from '@/constants/routes';

import type { PrepareNextButtonProps } from './PrepareNextButton.type';

const PrepareNextButton = (props: PrepareNextButtonProps) => {
  const navigate = useNavigate();

  const { children, onClick } = props;

  const handleClick = useCallback(async () => {
    await onClick();

    navigate(RoutePage.root.leasons);
  }, [navigate, onClick]);

  return (
    <Button size="xl" bgColor="orange.400" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default PrepareNextButton;
