import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getColor } from '@/utils/emotion';

import type { Typography as TypographyType } from '@/types/emotion';
import type { TextProps } from './index.type';

export const typographyComponentBuilder = (componentType: keyof JSX.IntrinsicElements) =>
  styled(componentType)<TextProps>`
    /** TypographyType을 통해 기본 스타일을 처리합니다. */
    ${({ theme, size, weight = 'regular' }) => {
      const props: TypographyType = theme.typography?.[size]?.[weight] ?? {};

      return css`
        font-size: ${props.fontSize};
        font-weight: ${props.fontWeight};
        line-height: ${props.lineHeight};
      `;
    }}

    /** TypographyType 외 여분의 프롭을 통해 나머지 스타일을 처리합니다. */
    ${({ align, lineHeight, strike, color }) => {
      return css`
        text-align: ${align};
        line-height: ${lineHeight};
        text-decoration: ${strike ? 'line-through' : 'auto'};
        color: ${getColor(color || 'black')};
      `;
    }}

    font-family: Roboto, Helvetica, Arial, sans-serif;
  `;
