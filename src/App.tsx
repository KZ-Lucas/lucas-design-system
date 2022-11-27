import { injectGlobal } from '@emotion/css';

import colors from './constants/colors';
import Routes from './Routes';

injectGlobal`
  body {
    background: ${colors.gray[100]};
    margin: 0;
  }

  * {
    font-family: Pretendard;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #37485D !important;
  }
`;

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
