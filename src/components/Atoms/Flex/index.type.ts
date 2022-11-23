import type { CSSProperties, ElementType } from "react";
import type { OverridableProps } from "@/utils/type";
import { SpacingLayout } from "@/types/emotion";

type FlexBaseProps = {
  display?: "inline-flex" | "flex";
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  space?: CSSProperties["gap"];
};

export type FlexProps<T extends ElementType = "div"> = OverridableProps<
  T,
  FlexBaseProps
> &
  SpacingLayout;
