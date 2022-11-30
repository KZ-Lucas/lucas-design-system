import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getColor, marginSpacingStyle, paddingSpacingStyle } from '@/utils/emotion';

import { DEFAULT_TYPOGRAPHY_ELEMENT } from '../Typography/index.const';

import type { ButtonProps } from './index.type';

export const ButtonBase = styled.button<ButtonProps>`
  height: ${(props) => props.height};
  cursor: pointer;

  ${(props) => (props.bgColor ? `background-color: ${getColor(props.bgColor)}` : null)};
  border: ${(props) => props.border ?? 0};
  border-radius: 4px;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};

  ${(props) =>
    props.variant === 'pill' &&
    css`
      &:hover {
        background-color: rgba(25, 118, 210, 0.04);
      }
    `};

  ${DEFAULT_TYPOGRAPHY_ELEMENT} {
    white-space: nowrap;
  }

  ${marginSpacingStyle};
  ${paddingSpacingStyle};
`;
