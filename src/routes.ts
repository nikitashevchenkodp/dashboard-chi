import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

import { PATHS } from './utils/consts';

export const routes = [
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
