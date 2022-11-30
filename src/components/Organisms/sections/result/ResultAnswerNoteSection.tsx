import { useMemo } from 'react';

import { Flex, Spacing, Typography } from '@/components/Atoms';
import ResultAnswerNoteList from '@/components/Molecules/components/result/ResultAnswerNoteList';
import useLeasonStore from '@/store/@features/leason';

const ResultAnswerNoteSection = () => {
  const { leasonList, answerList } = useLeasonStore();

  const answerNoteList = useMemo(() => {
    return leasonList.map((leason) => ({
      questionTitle: leason.question,
      correctAnswer: leason.correct_answer,
      myAnswer: answerList[leason.id],
    }));
  }, [answerList, leasonList]);

  return (
    <Flex direction="column">
      <Typography size="xl" color="blueGray.100" weight="bold">
        오답 노트
      </Typography>

      <Spacing size="8px" />

      <ResultAnswerNoteList answerNoteList={answerNoteList} />
    </Flex>
  );
};

export default ResultAnswerNoteSection;
