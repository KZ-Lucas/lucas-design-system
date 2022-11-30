import { Navigate, Route, Routes as RouteWrapper } from 'react-router-dom';

import { RoutePage } from './constants/routes';
import Leasons from './pages/leasons';
import Prepare from './pages/prepare';
import Result from './pages/result';

const Routes = () => (
  <RouteWrapper>
    <Route path="/" element={<Navigate to={RoutePage.root.prepare} />} />
    <Route path={RoutePage.root.leasons} element={<Leasons />} />
    <Route path={RoutePage.root.prepare} element={<Prepare />} />
    <Route path={RoutePage.root.result} element={<Result />} />
  </RouteWrapper>
);

export default Routes;
