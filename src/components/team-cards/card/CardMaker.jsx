import PropTypes from 'prop-types';

function CardMaker({ name, title, img }) {
  return (
    <div className='team-card'>
      <div className='card-title-team'>{name}</div>
      <img className='card-img-team' src={img} alt={name} />
      <div className='card-main'>
        <div className='card-title-dev'>{title}</div>
      </div>
    </div>
  );
}
CardMaker.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

export default CardMaker;
