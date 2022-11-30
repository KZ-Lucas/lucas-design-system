import { SpacingBase } from './index.style';

import type { SpacingProps } from './index.type';

const Spacing = (props: SpacingProps) => {
  const { size } = props;

  return <SpacingBase size={size} />;
};

export default Spacing;
