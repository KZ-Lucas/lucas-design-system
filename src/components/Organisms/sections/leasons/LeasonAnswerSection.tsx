import { Flex } from '@/components/Atoms';
import { LeasonAnswerButtonList } from '@/components/Molecules/components/leasons';
import useLeasons from '@/hooks/useLeasons';

const LeasonAnswerSection = () => {
  const { handleSubmitAnswer, currentLeason, currentCorrectStatus } = useLeasons();

  return (
    <Flex direction="column">
      <LeasonAnswerButtonList
        answerList={currentLeason?.answerList ?? []}
        onSubmit={handleSubmitAnswer}
        showResult={!!currentCorrectStatus}
      />
    </Flex>
  );
};

export default LeasonAnswerSection;
