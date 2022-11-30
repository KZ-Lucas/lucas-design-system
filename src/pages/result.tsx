import { Spacing, Typography } from '@/components/Atoms';
import ResultLayout from '@/components/Organisms/layouts/result';
import ResultAnswerNoteSection from '@/components/Organisms/sections/result/ResultAnswerNoteSection';
import ResultChartSection from '@/components/Organisms/sections/result/ResultChartSection';
import ResultNavigatorSection from '@/components/Organisms/sections/result/ResultNavigatorSection';
import ResultTimerSection from '@/components/Organisms/sections/result/ResultTimerSection';

const Result = () => {
  return (
    <ResultLayout>
      <ResultLayout.Header justify="center">
        <Typography size="3xl" color="blueGray.100">
          🎉 수고하셨습니다 🎉
        </Typography>
      </ResultLayout.Header>

      <Spacing size="20px" />

      <ResultLayout.Body align="center" direction="column">
        <ResultChartSection />

        <Spacing size="20px" />

        <ResultTimerSection />

        <Spacing size="20px" />

        <ResultNavigatorSection />
      </ResultLayout.Body>

      <Spacing size="20px" />

      <ResultLayout.Footer align="center" direction="column">
        <ResultAnswerNoteSection />
      </ResultLayout.Footer>
    </ResultLayout>
  );
};

export default Result;
