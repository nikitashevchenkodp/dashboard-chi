import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

import { PATHS } from './utils/consts';
import AdminPage from './pages/AdminPage';

export const publickRoutes = [
  {
    path: PATHS.LOGIN_PAGE,
    Component: LoginPage,
  },
  {
    path: PATHS.SIGNUP_PAGE,
    Component: SignUpPage,
  },
  {
    path: PATHS.RESET_PASSWORD_PAGE,
    Component: ResetPasswordPage,
  },
  {
    path: PATHS.FORGOT_PASSWORD_PAGE,
    Component: ForgotPasswordPage,
  },
];

export const privatRoutes = [
  {
    path: PATHS.ADMIN_PAGE,
    Component: AdminPage,
  },
];
