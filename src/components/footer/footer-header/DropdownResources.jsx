import { Link } from 'react-router-dom';

function DropdownResources() {
  return (
    <div className='dropdown'>
      <button className='dropbtn'>
        Recursos <i className='fa fa-caret-down'></i>
      </button>
      <div className='dropdown-content'>
        <a href='#' className='anchor-footer'>
          Proyectos Caseros
        </a>
        <Link
          to='/timeline'
          className='anchor-footer'
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Time Line
        </Link>
        <a href='#' className='anchor-footer'>
          Calculadora EcoS
        </a>
      </div>
    </div>
  );
}

export default DropdownResources;
