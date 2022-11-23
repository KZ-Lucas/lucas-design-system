import { MarginSpacing, PaddingSpacing } from "@/types/emotion";

// import { SerializedStyles } from "@emotion/react";
const MULTIPLE = 4;

export const marginSpacingStyle = (props: MarginSpacing): string => {
  const { mx, my } = props;
  const { mt = my, mb = my, ml = mx, mr = mx } = props;
  const margins = Object.entries({ top: mt, bottom: mb, left: ml, right: mr });

  return margins
    .filter(([_position, value]) => typeof value === "number")
    .map(
      ([position, value]) => `margin-${position}: ${(value ?? 0) * MULTIPLE}px`
    )
    .join(";");
};

export const paddingSpacingStyle = (props: PaddingSpacing): string => {
  const { px, py } = props;
  const { pt = py, pb = py, pl = px, pr = px } = props;
  const paddings = Object.entries({ top: pt, bottom: pb, left: pl, right: pr });

  return paddings
    .filter(([_position, value]) => typeof value === "number")
    .map(
      ([position, value]) => `padding-${position}: ${(value ?? 0) * MULTIPLE}px`
    )
    .join(";");
};
