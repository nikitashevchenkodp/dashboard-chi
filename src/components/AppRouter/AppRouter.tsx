import React, { ReactNode } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { publickRoutes, privatRoutes, RouteItem } from '../../routes';
import './AppRouter.scss';
import { useAppSelector } from '../../hooks/typedDispatch';
import { userSelector } from '../../store/selectors';

const AppRouter = () => {
  const { user } = useAppSelector(userSelector);

  const renderRoutes = (routes: Array<RouteItem>): ReactNode => {
    return routes.map(({ path, Component, children }) => (
      <Route key={path} path={path} element={Component} children={children && renderRoutes(children)} />
    ));
  };

  const publickRoute = renderRoutes(publickRoutes);
  const privatRoute = renderRoutes(privatRoutes);

  return (
    <div style={{ width: '100%' }}>
      <BrowserRouter>
        <Routes>{user ? privatRoute : publickRoute}</Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
