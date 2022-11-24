import { Navigate, Route, Routes as RouteWrapper } from "react-router-dom";
import { RoutePage } from "./constants/routes";
import Leasons from "./pages/leasons";

const Routes = () => (
  <RouteWrapper>
    <Route path="/" element={<Navigate to={RoutePage.root.leasons} />} />
    <Route path={RoutePage.root.leasons} element={<Leasons />} />
  </RouteWrapper>
);

export default Routes;
