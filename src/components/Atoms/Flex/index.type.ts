import type { CSSProperties, ElementType } from "react";
import { SpacingLayout } from "@/types/emotion";
import { OverridableProps } from "@/utils/type";

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
