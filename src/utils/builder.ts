import { Header, Body, Footer } from "@/components/Atoms/Layout";
import { cx } from "@emotion/css";
import React from "react";

const LayoutPart = {
  Header,
  Body,
  Footer,
};

type OverrideStyleOption = {
  [key in keyof typeof LayoutPart]?: string;
};

export const compoundLayoutBuilder = <T>(
  LayoutComponent: React.FC<T>,
  styleOption: OverrideStyleOption
) => {
  const _layout = LayoutComponent as typeof LayoutComponent & typeof LayoutPart;

  Object.entries(LayoutPart).forEach(([layoutName, layoutComponent]) => {
    _layout[layoutName as keyof typeof LayoutPart] = ({ className, ...rest }) =>
      layoutComponent({
        className: cx(
          styleOption[layoutName as keyof typeof LayoutPart],
          className
        ),
        ...rest,
      });
  });

  return _layout;
};
