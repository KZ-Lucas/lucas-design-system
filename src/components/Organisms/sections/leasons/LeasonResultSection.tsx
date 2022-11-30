import { Flex } from '@/components/Atoms';
import {
  LeasonNextStepButton,
  LeasonResultComment,
} from '@/components/Molecules/components/leasons';
import useLeasons from '@/hooks/useLeasons';

const LeasonResultSection = () => {
  const { currentCorrectStatus, handleNextStep } = useLeasons();

  const isResultShow = !!currentCorrectStatus;
  return (
    <Flex align="center" justify="space-between">
      {isResultShow && <LeasonResultComment type={currentCorrectStatus} />}
      {isResultShow && <LeasonNextStepButton onClick={handleNextStep} />}
    </Flex>
  );
};

export default LeasonResultSection;
