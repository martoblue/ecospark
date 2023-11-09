import CardMaker from './card/CardMaker';
import martoImg from '../assets/img/marto.webp';
import nicolImg from '../assets/img/nicol.webp';
import panquiImg from '../assets/img/panqui.webp';
import jhonsonImg from '../assets/img/jhonson.webp';
import './TeamCards.css';

function TeamCards() {
  return (
    <div className='team-container container-fluid'>
      <div className='row' style={{ padding: '40px 20px' }}>
        <div className='container header-team'>
          <h1>Nuestro Equipo</h1>
        </div>
      </div>
      <div className='row' style={{ width: '100%', padding: '40px 20px' }}>
        <div className='card-col row'>
          <CardMaker
            name={'Nicol Aros'}
            title={'Scrum Master'}
            img={nicolImg}
          />
          <CardMaker
            name={'Luis Martorelli'}
            title={'Software Developer'}
            img={martoImg}
          />
          <CardMaker
            name={'Panqui Acuña'}
            title={'Product Owner'}
            img={panquiImg}
          />
          <CardMaker
            name={'Jhonson Medina'}
            title={'Software Developer'}
            img={jhonsonImg}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
