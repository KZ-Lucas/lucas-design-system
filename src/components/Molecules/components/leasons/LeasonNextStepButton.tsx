import { Button } from '@/components/Atoms';

import type { LeasonNextStepButtonProps } from './LeasonNextStepButton.type';

const LeasonNextStepButton = (props: LeasonNextStepButtonProps) => {
  const { onClick } = props;

  return (
    <Button
      size="sm"
      onClick={onClick}
      variant="pill"
      _text={{
        color: 'blueGray.200',
        size: 'md',
      }}
    >
      다음 문제
    </Button>
  );
};

export default LeasonNextStepButton;
