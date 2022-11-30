import React from 'react';

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
    wrapper?: React.FC;
  },
) => {
  const _layout = (
    CompoundComponent.wrapper
      ? wrapperComponentBuilder(CompoundComponent.wrapper, LayoutComponent)
      : LayoutComponent
  ) as typeof LayoutComponent & CompoundComponentType;

  if (CompoundComponent.compound) {
    Object.entries(CompoundComponent.compound).forEach(([layoutName, layoutComponent]) => {
      _layout[layoutName as keyof CompoundComponentType] = layoutComponent;
    });
  }

  return _layout;
};

const wrapperComponentBuilder = <T extends {}>(
  WrapperComponent: React.FC<T>,
  LayoutComponent: React.FC<any>,
) => {
  return function anonymous(props: T) {
    return (
      <LayoutComponent>
        <WrapperComponent {...props} />
      </LayoutComponent>
    );
  };
};
