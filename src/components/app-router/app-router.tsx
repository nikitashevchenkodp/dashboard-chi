import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../../routes';
const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
