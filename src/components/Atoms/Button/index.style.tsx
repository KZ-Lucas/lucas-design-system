import styled from '@emotion/styled';

import { getColor, marginSpacingStyle, paddingSpacingStyle } from '@/utils/emotion';

import type { ButtonStyle } from './index.type';

export const ButtonBase = styled.button<ButtonStyle>`
  height: ${(props) => props.height};

  ${(props) => (props.bgColor ? `background-color: ${getColor(props.bgColor)}` : null)};
  border: ${(props) => props.border ?? 0};
  border-radius: 4px;
  ${marginSpacingStyle};
  ${paddingSpacingStyle};
`;
