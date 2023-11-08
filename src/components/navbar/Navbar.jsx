import './NavbarStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {

  return (

      <div className='Navbar'>
      <ul>
      <li><Link className='nav' to= "/">Inicio</Link></li>
      <li><Link className='nav' to= "/pregunta">¿Que son?</Link></li>
      <li><Link className='nav' to= "/timeline">Timeline</Link></li>
      <li><Link className='nav' to= "/calculadora">Calculadora</Link></li>
      <li><Link className='nav' to= "/mapa">Mapa</Link></li>
      <li><Link className='nav' to= "/foro">Foro</Link></li>
      <li><Link className='nav' to= "/login">Login</Link></li>
      <li><Link className='nav' to= "/signup">Signup</Link></li>
         
      </ul>
    
    </div>
  );
}

export default Navbar;
