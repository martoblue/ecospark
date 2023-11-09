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
            github='https://github.com/Nicolrayen'
            linkedin='https://cl.linkedin.com/in/nicol-aros-aros-782556295'
            mail='nicolaros95@gmail.com'
          />
          <CardMaker
            name={'Luis Martorelli'}
            title={'Software Developer'}
            img={martoImg}
            github='https://github.com/martoblue'
            linkedin='https://cl.linkedin.com/in/luis-martorelli/'
            mail='luismarto8a@gmail.com'
          />
          <CardMaker
            name={'Panqui Acuña'}
            title={'Product Owner'}
            img={panquiImg}
            github='https://github.com/rdhradha'
            linkedin='https://www.linkedin.com/in/panquiam/'
            mail='maeumi.vine@gmail.com'
          />
          <CardMaker
            name={'Jhonson Medina'}
            title={'Software Developer'}
            img={jhonsonImg}
            github='https://github.com/JhonsonMedina'
            linkedin='https://www.linkedin.com/in/jhonson-medina-90140a289/'
            mail='jhonsonamedinah@gmail.com'
          />
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
