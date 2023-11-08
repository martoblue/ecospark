import { createBrowserRouter } from 'react-router-dom';
//import Login from '../layouts/login-signup/Login';
//import Signup from '../layouts/login-signup/Signup';
import Root from '../Root';
import ErrorPage from '../../error-page';
import Navbar from '../components/navbar/Navbar';
//import Pregunta from '../components/pregunta/pregunta';
//import Timeline from '../components/timeline/timeline'
//import Foro from '../components/foro/foro';
//import Mapa from '../components/mapa/mapa';
//import Calculadora from '../components/calculadora/calculadora';

const routes = createBrowserRouter([
  {
    path: '/',
    element:  <Navbar />,
    errorElement: <ErrorPage />,
  },
 

]);

export default routes;
   /* 
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
    element: <Timeline />,
    
  },
  {
    path: '/foro',
    element: <Foro />,
  
  },
  {
    path: '/mapa',
    element: <Mapa />,
    
  },
  {
    path: '/pregunta',
    element: <Pregunta />,
    
  },
  {
    path: '/calculadora',
    element: <Calculadora />,
    
  },

*/