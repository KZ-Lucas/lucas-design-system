import colors from "@/constants/colors";
import { css } from "@emotion/css";

export const HeaderStyle = css`
  position: relative;
  background-color: ${colors.blueGray[900]};
  padding: 0.375rem 1rem;
  height: 48px;
  width: 100%;
`;

export const FooterStyle = css`
  border-top: 1px solid ${colors.blueGray[800]};
  background-color: ${colors.blueGray[700]};
  height: 3.6rem;
  width: 100%;
`;

export const BodyStyle = css`
  height: calc(100vh - 48px - 3.6rem);
  background-color: ${colors.blueGray[700]};
`;
