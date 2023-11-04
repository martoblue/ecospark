import PropTypes from 'prop-types';

function ListMaker({ name }) {
  return (
    <li>
      <a href='#' key={name}>
        {name}
      </a>
    </li>
  );
}
ListMaker.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};
export default ListMaker;
