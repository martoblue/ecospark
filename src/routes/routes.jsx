import { createBrowserRouter } from 'react-router-dom';
import Login from '../layouts/login-signup/Login';
import Signup from '../layouts/login-signup/Signup';
import Root from '../Root';
import ErrorPage from '../../error-page';
import TimeLine from '../components/timeline/timeline';
import EnergiaEolica from '../layouts/energia-eolica/EnergiaEolica';
import EnergiaSolar from '../layouts/energia-solar/EnergiaSolar';

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
  {
    path: '/timeline',
    element: <TimeLine />,
  },
  {
    path: '/energia-eolica',
    element: <EnergiaEolica />,
  },
  {
    path: '/energia-solar',
    element: <EnergiaSolar />,
  },
]);

export default routes;
