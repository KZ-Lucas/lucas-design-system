import parseHtml from 'html-react-parser';

import { Typography } from '@/components/Atoms';

import { AnswerNoteCardWrapper } from './ResultAnswerNoteCard.style';

import type { AnswerNoteCardType } from './ResultAnswerNoteCard.type';

const AnswerNoteCard = (props: AnswerNoteCardType) => {
  const { questionTitle, correctAnswer, myAnswer } = props;
  const isCorrect = correctAnswer === myAnswer;
  return (
    <AnswerNoteCardWrapper
      align="flex-start"
      role={`answer-note-card-${isCorrect ? 'correct' : 'incorrect'}`}
      direction="column"
      px={3}
      py={3}
      space="8px"
      isCorrect={isCorrect}
    >
      <Typography size="lg" color="white" align="left">
        {parseHtml(questionTitle)}
      </Typography>

      <Typography size="lg" color="secondary.600">
        정답: {parseHtml(correctAnswer)}
      </Typography>

      <Typography size="lg" color={isCorrect ? 'secondary.600' : 'red.600'}>
        나의 답변: {parseHtml(myAnswer)}
      </Typography>
    </AnswerNoteCardWrapper>
  );
};

export default AnswerNoteCard;
