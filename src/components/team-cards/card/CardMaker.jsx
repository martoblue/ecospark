import PropTypes from 'prop-types';
import IconMaker from './IconMaker';

function CardMaker({ name, title, img }) {
  return (
    <div className='col-sm-6 col-md-6 col-lg-3'>
      <div className='team-card'>
        <div className='card-title-team mb-3'>{name}</div>
        <img className='card-img-team' src={img} alt={name} />
        <div className='card-main'>
          <div className='card-title-dev pb-4'>{title}</div>
        </div>
      </div>
      <IconMaker />
    </div>
  );
}
CardMaker.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

export default CardMaker;
