import CardMaker from './card/CardMaker';
import IconMaker from './card/IconMaker';
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
      <div className='row' style={{ width: '100em', padding: '40px 20px' }}>
        <div className='card-col'>
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
      <div className='row' style={{ width: '100em', padding: '0px 20px' }}>
        <div className='icons-rrss container'>
          <IconMaker />
          <IconMaker />
          <IconMaker />
          <IconMaker />
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
