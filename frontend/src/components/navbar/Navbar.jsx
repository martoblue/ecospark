import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DropdownEnergies from './DropdownEnergies';
import { useState } from 'react';

function Navbar({ text }) {
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

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('navbar').style.backgroundColor = '#ff6b00';
    } else {
      document.getElementById('navbar').style.backgroundColor = 'transparent';
    }
  }
  return (
    <div
      id={text ? 'navbar' : text}
      className={text ? `Navbar ${text}` : 'Navbar section-navbar'}
    >
      <ul className='main-navbar-list'>
        <li>
          <Link className='anchor-navbar' to='/'>
            Inicio
          </Link>
        </li>
        <DropdownEnergies />
        <li>
          <Link className='anchor-navbar' to='/timeline'>
            Timeline
          </Link>
        </li>
        <li>
          <Link className='anchor-navbar' to='/noticias'>
            Noticias
          </Link>
        </li>
        {localStorage.getItem('user') !== null ? (
          <>
            <li>
              <a className='anchor-navbar'>Hola {userName}!</a>
            </li>
            <li>
              <a type='button' className='anchor-navbar' onClick={handleLogout}>
                Desconectar
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className='anchor-navbar' to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link className='anchor-navbar' to='/signup'>
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  text: PropTypes.string,
};

export default Navbar;
