import { css } from "@emotion/css";
import { TextProps } from "./index.type";

export const textDefaultStyle = (props: TextProps<any>) => css`
  font-weight: ${props.weight};
  font-size: ${props.size};
  color: ${props.color};
  text-align: ${props.align};
  line-height: ${props.lineHeight};
  margin: 0;
  text-decoration: ${props.strike ? "line-through" : "auto"};
`;
