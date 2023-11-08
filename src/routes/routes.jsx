import { createBrowserRouter } from 'react-router-dom';
import Login from '../layouts/login-signup/Login';
import Signup from '../layouts/login-signup/Signup';
import Root from '../Root';
import ErrorPage from '../../error-page';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default routes;
