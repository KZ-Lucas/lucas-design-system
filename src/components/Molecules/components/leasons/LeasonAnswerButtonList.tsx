import LeasonAnswerButton from './LeasonAnswerButton';
import { AnswerButtonGroup } from './LeasonAnswerButtonList.style';

import type { LeasonAnswerListProps } from './LeasonAnswerButtonList.type';

const LeasonAnswerButtonList = (props: LeasonAnswerListProps) => {
  const { answerList, onSubmit, showResult } = props;

  return (
    <AnswerButtonGroup direction="column" space="8px">
      {answerList.map((answer) => (
        <LeasonAnswerButton
          size="lg"
          key={answer.title}
          onClick={() => {
            onSubmit(answer.title);
          }}
          title={answer.title}
          correctType={showResult ? answer.type : undefined}
        />
      ))}
    </AnswerButtonGroup>
  );
};

export default LeasonAnswerButtonList;
