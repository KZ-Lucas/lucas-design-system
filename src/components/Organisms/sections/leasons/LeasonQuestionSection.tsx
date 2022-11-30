import { Flex } from '@/components/Atoms';
import { LeasonQuestionTitle } from '@/components/Molecules/components/leasons';
import useLeasons from '@/hooks/useLeasons';

const LeasonQuestionSection = () => {
  const { currentLeason, sequence } = useLeasons();

  return (
    <Flex direction="column">
      <LeasonQuestionTitle sequence={sequence + 1} questionTitle={currentLeason?.question ?? ''} />
    </Flex>
  );
};

export default LeasonQuestionSection;
