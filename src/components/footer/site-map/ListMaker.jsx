import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ListMaker({ name, ruta }) {
  return (
    <li>
      <Link
        to={`${ruta}`}
        key={name}
        className='anchor-footer'
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        {name}
      </Link>
    </li>
  );
}
ListMaker.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  ruta: PropTypes.string,
};
export default ListMaker;
