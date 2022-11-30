import { Spacing } from '@/components/Atoms';
import LeasonsLayout from '@/components/Organisms/layouts/leasons';
import LeasonAnswerSection from '@/components/Organisms/sections/leasons/LeasonAnswerSection';
import LeasonQuestionSection from '@/components/Organisms/sections/leasons/LeasonQuestionSection';
import LeasonResultSection from '@/components/Organisms/sections/leasons/LeasonResultSection';

const Leasons = () => {
  return (
    <LeasonsLayout>
      <LeasonsLayout.Header direction="column">
        <LeasonQuestionSection />
      </LeasonsLayout.Header>

      <LeasonsLayout.Footer direction="column">
        <LeasonResultSection />

        <Spacing size="12px" />

        <LeasonAnswerSection />
      </LeasonsLayout.Footer>
    </LeasonsLayout>
  );
};

export default Leasons;
