import parseHtml from 'html-react-parser';

import { Flex, Spacing, Typography } from '@/components/Atoms';

import type { LeasonQuestionProps } from './LeasonQuestionTitle.type';

const LeasonQuestionTitle = (props: LeasonQuestionProps) => {
  const { sequence, questionTitle } = props;
  return (
    <Flex direction="column">
      <Typography size="5xl" color="blueGray.100">
        Q{sequence}
      </Typography>

      <Spacing size="12px" />

      <Typography size="3xl" color="blueGray.200">
        {parseHtml(questionTitle)}
      </Typography>
    </Flex>
  );
};

export default LeasonQuestionTitle;
