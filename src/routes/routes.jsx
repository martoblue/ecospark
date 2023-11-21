import { createBrowserRouter } from 'react-router-dom';
import Login from '../layouts/login-signup/Login';
import Signup from '../layouts/login-signup/Signup';
import Root from '../Root';
import ErrorPage from '../../error-page';
import EnergiaEolica from '../layouts/energia-eolica/EnergiaEolica';
import EnergiaSolar from '../layouts/energia-solar/EnergiaSolar';
import Timeline from '../components/timeline_2/Timeline_2';
import Primera from '../layouts/login-signup/prueba-actualizar';

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
    element: <Timeline />
  },
  {
    path: '/energia-eolica',
    element: <EnergiaEolica />,
  },
  {
    path: '/energia-solar',
    element: <EnergiaSolar />,
  },
  {
    path: '/energia-encuesta',
    element: <Primera />
  },
]);

export default routes;
