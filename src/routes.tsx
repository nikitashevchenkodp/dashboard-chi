import React, { ReactNode } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

import { PATHS } from './utils/consts';
import TicketsPage from './pages/TicketsPage';
import CustomersPage from './pages/CustomersPage';
import SettingsPage from './pages/SettingsPage';
import OverviewPage from './pages/OverviewPage';
import { Navigate } from 'react-router-dom';
import PublicLayout from './Layout/PublicLayout';
import AdminLayout from './Layout/AdminLayout';

export type RouteItem = {
  path: string;
  Component: ReactNode;
  children?: Array<RouteItem>;
};

export const publickRoutes: Array<RouteItem> = [
  {
    path: PATHS.BASE_PATH,
    Component: <PublicLayout />,
    children: [
      {
        path: PATHS.LOGIN_PAGE,
        Component: <LoginPage />,
      },
      {
        path: PATHS.SIGNUP_PAGE,
        Component: <SignUpPage />,
      },
      {
        path: PATHS.RESET_PASSWORD_PAGE,
        Component: <ResetPasswordPage />,
      },
      {
        path: PATHS.FORGOT_PASSWORD_PAGE,
        Component: <ForgotPasswordPage />,
      },
      {
        path: PATHS.NOT_FOUND,
        Component: <Navigate to={PATHS.LOGIN_PAGE} replace />,
      },
    ],
  },
  {
    path: PATHS.NOT_FOUND,
    Component: <Navigate to={PATHS.LOGIN_PAGE} replace />,
  },
];

export const privatRoutes: Array<RouteItem> = [
  {
    path: PATHS.ADMIN_PAGE,
    Component: <AdminLayout />,
    children: [
      {
        path: PATHS.TICKETS_PAGE,
        Component: <TicketsPage />,
      },
      {
        path: PATHS.CUSTOMERS_PAGE,
        Component: <CustomersPage />,
      },
      {
        path: PATHS.SETTINGS_PAGE,
        Component: <SettingsPage />,
      },
      {
        path: PATHS.OVERVIEW_PAGE,
        Component: <OverviewPage />,
      },
      {
        path: PATHS.NOT_FOUND,
        Component: <Navigate to={PATHS.OVERVIEW_PAGE} replace />,
      },
    ],
  },
  {
    path: PATHS.NOT_FOUND,
    Component: <Navigate to={PATHS.ADMIN_PAGE} replace />,
  },
];
