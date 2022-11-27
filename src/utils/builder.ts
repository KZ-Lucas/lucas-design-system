import type React from 'react';

export const compoundBuilder = <
  LayoutComponentType,
  CompoundComponentType extends Record<
    string,
    (React.FC<LayoutComponentType> & CompoundComponentType)[keyof CompoundComponentType]
  >,
>(
  LayoutComponent: React.FC<LayoutComponentType>,
  CompoundComponent: {
    compound?: CompoundComponentType;
  },
) => {
  const _layout = LayoutComponent as typeof LayoutComponent & CompoundComponentType;

  if (CompoundComponent.compound) {
    Object.entries(CompoundComponent.compound).forEach(([layoutName, layoutComponent]) => {
      _layout[layoutName as keyof CompoundComponentType] = layoutComponent;
    });
  }

  return _layout;
};
