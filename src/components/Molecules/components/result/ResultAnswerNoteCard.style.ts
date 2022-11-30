import styled from '@emotion/styled';

import { Flex } from '@/components/Atoms';

export const AnswerNoteCardWrapper = styled(Flex)<{ isCorrect: boolean }>`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 4px;
  opacity: 0.8;

  border: 1px dashed
    ${({ theme, isCorrect }) => (isCorrect ? theme.colors.secondary[600] : theme.colors.red[600])};
`;
