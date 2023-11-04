import React from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <ul id='navbar'>
            <li>
              <a className='active' href='/'>
                Inicio
              </a>{' '}
            </li>
            <li>
              <a href='/'>¿Qué son?</a>{' '}
            </li>
            <li>
              <a href='/'>Timeline</a>{' '}
            </li>
            <li>
              <a href='/'>Calculadora</a>{' '}
            </li>
            <li>
              <a href='/'>Mapa</a>{' '}
            </li>
            <li>
              <a href='/'>Foro</a>{' '}
            </li>
            <li>
              <Link to={'/login'}>Ingresar</Link>
            </li>
            <li>
              <Link to={'/signup'}>Registrarse</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
