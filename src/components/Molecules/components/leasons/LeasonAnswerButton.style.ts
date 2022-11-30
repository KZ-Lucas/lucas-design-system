import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from '@/components/Atoms';

import type { LeasonAnswerButtonProps } from './LeasonAnswerButton.type';

export const LeasonAnswerButtonBase = styled(Button)<Pick<LeasonAnswerButtonProps, 'correctType'>>`
  background-color: ${({ theme }) => theme.colors.blueGray[200]};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  /** correctType 여부에 따라 스타일을 지정합니다. */
  ${({ theme, correctType }) => {
    if (correctType) {
      return css`
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-color: ${correctType === 'correct'
          ? theme.colors.secondary[600]
          : theme.colors.red[600]};

        span {
          color: ${correctType === 'correct' ? theme.colors.secondary[600] : theme.colors.red[600]};
        }
      `;
    } else {
      return css`
        &:hover {
          opacity: 0.8;
        }
      `;
    }
  }}
`;
