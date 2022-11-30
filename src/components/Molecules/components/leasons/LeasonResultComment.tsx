import { Typography } from '@/components/Atoms';

import { CORRECT_COMMENT, INCORRECT_COMMENT } from './LeasonResultComment.const';

import type { LeasonResultCommentProps } from './LeasonResultComment.type';

const LeasonResultComment = (props: LeasonResultCommentProps) => {
  const { type } = props;

  return (
    <Typography size="md" color={type === 'correct' ? 'secondary.600' : 'red.600'}>
      {type === 'correct' ? CORRECT_COMMENT : INCORRECT_COMMENT}
    </Typography>
  );
};

export default LeasonResultComment;
