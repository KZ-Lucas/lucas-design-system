import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Flex } from '@/components/Atoms';
import { RoutePage } from '@/constants/routes';

const ResultNavigatorSection = () => {
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => {
    navigate(RoutePage.root.prepare);
  }, [navigate]);

  return (
    <Flex space="20px" px={8}>
      <Button size="md" bgColor="blueGray.200" px={8} onClick={navigateToHome}>
        홈으로
      </Button>
    </Flex>
  );
};

export default ResultNavigatorSection;
