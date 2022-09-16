import LoginPage from './pages/login-page';
import SignUpPage from './pages/signup-page';
import ForgotPasswordPage from './pages/forgot-password-page';
import ResetPasswordPage from './pages/reset-password-page';

import { LOGIN_PAGE, SIGNUP_PAGE, RESET_PASSWORD_PAGE, FORGOT_PASSWORD_PAGE } from './utils/consts';

export const routes = [
  {
    path: LOGIN_PAGE,
    Component: LoginPage,
  },
  {
    path: SIGNUP_PAGE,
    Component: SignUpPage,
  },
  {
    path: RESET_PASSWORD_PAGE,
    Component: ResetPasswordPage,
  },
  {
    path: FORGOT_PASSWORD_PAGE,
    Component: ForgotPasswordPage,
  },
];
