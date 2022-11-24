import constate from "constate";
import useLeasons from "@/hooks/useLeasons";
import { compoundLayoutBuilder } from "@/utils/builder";
import { BodyStyle, FooterStyle, HeaderStyle } from "./index.style";

export const [LeasonsProvider, useLeasonsApi] = constate(
  useLeasons,
  (value) => value.api
);

const LeasonsLayout = compoundLayoutBuilder(LeasonsProvider, {
  Header: HeaderStyle,
  Body: BodyStyle,
  Footer: FooterStyle,
});

export default LeasonsLayout;
