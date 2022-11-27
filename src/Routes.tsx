import { Navigate, Route, Routes as RouteWrapper } from 'react-router-dom';

import { RoutePage } from './constants/routes';
import Leasons from './pages/leasons';
import Prepare from './pages/prepare';

const Routes = () => (
  <RouteWrapper>
    <Route path="/" element={<Navigate to={RoutePage.root.prepare} />} />
    <Route path={RoutePage.root.leasons} element={<Leasons />} />
    <Route path={RoutePage.root.prepare} element={<Prepare />} />
  </RouteWrapper>
);

export default Routes;
