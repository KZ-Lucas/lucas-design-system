import Button from '@/components/Atoms/Button';

import { useNextHandler } from '../../layouts/prepare';

type PrepareNextButtonProps = React.PropsWithChildren<{}>;

const PrepareNextButton = (props: PrepareNextButtonProps) => {
  const { children } = props;
  const handleNext = useNextHandler();

  return (
    <Button size="large" bgColor="orange.400" onClick={handleNext}>
      {children}
    </Button>
  );
};

export default PrepareNextButton;
