import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { MainState } from '../../MainContext';
import { publickRoutes, privatRoutes } from '../../routes';
import './AppRouter.scss';

const AppRouter = () => {
  const { user } = MainState();

  const publick = publickRoutes.map(({ path, Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });

  const privat = privatRoutes.map(({ path, Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });

  return (
    <div style={{ width: '100%' }}>
      <BrowserRouter>
        {user ? (
          <Routes>
            {privat}
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        ) : (
          <Routes>
            {publick}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
