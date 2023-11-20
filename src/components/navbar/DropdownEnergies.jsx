import { Link } from 'react-router-dom';

function DropdownEnergies() {
  return (
    <>
      <li className='dropdown-navbar'>
        <div className='anchor-navbar  '>
          Energías <i className='fa fa-caret-down'></i>
        </div>
        <div className='dropdown-content-energias'>
          <Link
            to='/energia-solar'
            className='anchor-dropdown'
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Energía Solar
          </Link>
          <Link
            to='/energia-eolica'
            className='anchor-dropdown'
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Energía Eólica
          </Link>
        </div>
      </li>
    </>
  );
}

export default DropdownEnergies;
