import parseHtml from 'html-react-parser';

import { LeasonAnswerButtonBase } from './LeasonAnswerButton.style';

import type { LeasonAnswerButtonProps } from './LeasonAnswerButton.type';

const LeasonAnswerButton = (props: LeasonAnswerButtonProps) => {
  const { title, ...rest } = props;

  return <LeasonAnswerButtonBase {...rest}>{parseHtml(title)}</LeasonAnswerButtonBase>;
};

export default LeasonAnswerButton;
