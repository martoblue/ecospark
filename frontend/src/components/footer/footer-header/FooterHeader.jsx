import DropdownResources from './DropdownResources.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FooterHeader = () => {
  const userLoggin = localStorage.getItem('user');

  let userData = null;

  if (localStorage.getItem('user') !== null) {
    userData = JSON.parse(userLoggin);
  }

  const [userName, setUserName] = useState(userData ? userData.name : '');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

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

        {localStorage.getItem('user') !== null ? (
          <>
            <div className='content-right content-footer'>
              <span className='session-footer'>Bienvenido(a) {userName}</span>

              <button
                type='button'
                className='buttonSesion'
                onClick={handleLogout}
              >
                Desconectar
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='content-right content-footer'>
              <Link to={'/signup'}>
                <button className='buttonSesion'>Registrarse</button>
              </Link>
              <Link to={'/login'}>
                <button className='buttonSesion'>Iniciar Sesión</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FooterHeader;
