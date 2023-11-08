import './NavbarStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {

  return (

      <div className='Navbar'>
      <ul className='rrr'>
      <li><Link className='navrr' to= "/">Inicio</Link></li>
      <li><Link className='navrr' to= "/pregunta">¿Que son?</Link></li>
      <li><Link className='navrr' to= "/timeline">Timeline</Link></li>
      <li><Link className='navrr' to= "/calculadora">Calculadora</Link></li>
      <li><Link className='navrr' to= "/mapa">Mapa</Link></li>
      <li><Link className='navrr' to= "/foro">Foro</Link></li>
      <li><Link className='navrr' to= "/login">Login</Link></li>
      <li><Link className='navrr' to= "/signup">Signup</Link></li>
         
      </ul>
    
    </div>
  );
}

export default Navbar;
