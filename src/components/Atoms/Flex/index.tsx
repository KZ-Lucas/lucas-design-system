import { cx } from "@emotion/css";

import { flexDefaultStyle } from "./index.style";

import type { ElementType } from "react";
import { FlexProps } from "./index.type";

const Flex = <T extends ElementType = "div" | "nav">(props: FlexProps<T>) => {
  const { as, children, className, ...rest } = props;
  const Component = as ?? "div";

  const defaultStyle = flexDefaultStyle(props);

  return (
    <Component {...rest} className={cx(defaultStyle, className)}>
      {children}
    </Component>
  );
};

export default Flex;
