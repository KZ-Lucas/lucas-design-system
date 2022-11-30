import AnswerNoteCard from './ResultAnswerNoteCard';
import { AnswerNoteListWrapper } from './ResultAnswerNoteList.style';

import type { ResultAnswerNoteListProps } from './ResultAnswerNoteList.type';

const ResultAnswerNoteList = (props: ResultAnswerNoteListProps) => {
  const { answerNoteList } = props;

  return (
    <AnswerNoteListWrapper direction="column" space="8px">
      {answerNoteList.map((answerNote) => (
        <AnswerNoteCard key={answerNote.questionTitle} {...answerNote} />
      ))}
    </AnswerNoteListWrapper>
  );
};

export default ResultAnswerNoteList;
