import DropdownResources from './DropdownResources.jsx';
import { Link } from 'react-router-dom';

const FooterHeader = () => {
  return (
    <>
      <div className='container-footer-header'>
        <div className='content-left content-footer'>
          <p>EcoSpark</p>
        </div>
        <div className='content-center content-footer'>
          <Link
            to={'/'}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Inicio
          </Link>
          <a href='#about-us'>Nosotros</a>
          <Link
            to={'/'}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Foro
          </Link>
          <DropdownResources />
        </div>

        <div className='content-right content-footer'>
          <Link to={'/signup'}>
            <button className='buttonSesion'>Registrarse</button>
          </Link>
          <Link to={'/login'}>
            <button className='buttonSesion'>Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterHeader;
