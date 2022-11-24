import { Flex } from "@/components/Atoms";
import React from "react";
import { FlexProps } from "../Flex/index.type";

type HeaderProps = React.PropsWithChildren<FlexProps>;

const Header = (props: HeaderProps) => {
  const { children, ...rest } = props;

  return (
    <Flex as="nav" {...rest}>
      {children}
    </Flex>
  );
};

export default Header;
