import { marginSpacingStyle, paddingSpacingStyle } from "@/utils/emotion";
import { css } from "@emotion/css";
import { FlexProps } from "./index.type";

export const flexDefaultStyle = (props: FlexProps<any>) => css`
  display: ${props.display ?? "flex"};
  flex-direction: ${props.direction};
  align-items: ${props.align};
  justify-content: ${props.justify};
  gap: ${props.space};

  ${marginSpacingStyle(props)};
  ${paddingSpacingStyle(props)};
`;
