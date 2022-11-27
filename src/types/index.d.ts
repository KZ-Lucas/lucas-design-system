import '@emotion/react';

import type colors from '@/constants/colors';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
  }
}
