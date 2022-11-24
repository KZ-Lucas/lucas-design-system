import { Flex } from "@/components/Atoms";
import { FlexProps } from "../Flex/index.type";

type BodyProps = React.PropsWithChildren<FlexProps>;

const Body = (props: BodyProps) => {
  const { children, ...rest } = props;

  return <Flex {...rest}>{children}</Flex>;
};

export default Body;
