import { Fragment } from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import type { MatcherFunction } from '@testing-library/react';
import type { ReactElement } from 'react';

export function renderWithRouter(
  component: ReactElement,
  options: Parameters<typeof render>[1] & { route?: string } = {},
) {
  if (options.route != null) {
    window.history.pushState({}, 'Test page', options.route);
  }

  return render(component, {
    ...options,
    wrapper: ({ children }) => {
      const Wrapper = options?.wrapper ?? Fragment;
      return (
        <BrowserRouter>
          <Wrapper>{children}</Wrapper>
          <LocationDisplay />
        </BrowserRouter>
      );
    },
  });
}

export const mockLocation = {
  get: () => screen.getByTestId('location-display').textContent,
};

const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export function textContentMatcher(textMatch: string | RegExp): MatcherFunction {
  const hasText =
    typeof textMatch === 'string'
      ? (node: Element) => node.textContent === textMatch
      : (node: Element) => textMatch.test(node.textContent!);

  return (_content, node) => {
    if (node == null || !hasText(node)) {
      return false;
    }

    const childrenDontHaveText = Array.from(node?.children || []).every((child) => !hasText(child));

    return childrenDontHaveText;
  };
}
