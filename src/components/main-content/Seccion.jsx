import imagen from '../assets/OIP3.jpg';
import imagen1 from '../assets/OIP2.jpg';
import imagen4 from '../assets/img/solar/rrrr.webp';
import imagen5 from '../assets/img/solar/Historia-paneles-solares.jpg';
import imagen3 from '../assets/img3.webp';
import fondo from '../assets/background-main.png';
import './seccionStyle.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import LogoEcoPark from '../../Logo.svg';

const Seccion = () => {
  return (
    <div className='main-container'>
      <Navbar text='main-navbar' />
      <div className='container-fluid main-div'>
        <img src={fondo} className='img-fondo col-xl-12' alt='' />
        <img src={LogoEcoPark} className='logo-ecopark' alt='Logo Eco Park' />
      </div>
      <section className='alta'>
        <hr className='rayas' />
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className='col-md-6'>
            <div className='card-section-about '>
              <div className='text-center'>
                <h2 className='juntos'> Juntos </h2>
              </div>
              <div className='box-img'>
                <img src={imagen} className='medir' alt='...' />
              </div>
              <p className='card-text text-start text-jc'>
                Hagamos de nuestro hogar un mejor lugar para vivir. Cuidemos
                nuestro planeta utilizando energías asequibles y no
                contaminantes.
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card-section-about'>
              <div className='text-center'>
                <h2>Conocer</h2>
              </div>
              <div className='box-img'>
                <img src={imagen1} className='medir' alt='...' />
              </div>
              <p className='card-text text-start text-jc'>
                Infórmate sobre las ventajas de la energía solar y energía
                eólica, sus usos y como contribuyen de buena manera a cuidar el
                medio ambiente.
              </p>
            </div>
          </div>
        </div>
        <hr className='rayas' />
      </section>

      <section>
        <div className='row seccion2'>
          <div className='col-md-6 p-4 '>
            <div className='box-img'>
              <img src={imagen4} className='medir' alt='' />
            </div>
          </div>

          <div className='col-md-6 text-center p-4 energias-div'>
            <h2>
              <strong> Energía asequible y no contaminante</strong>
            </h2>
            <p className='justificar text-end'>
              La energía es fundamental en todos los desafíos y oportunidades a
              los que hace frente el mundo hoy. Toda actividad en la sociedad
              moderna actual requiere energía para operar. Sin embargo, el uso
              de combustibles fósiles ha impactado de forma negativa en el medio
              ambiente, por lo que es necesario transformar nuestro sistema
              energético para que sea renovable y sostenible. La energía
              sostenible es una oportunidad que transforma vidas, economías y el
              planeta.
            </p>
            <div className='row botones-energias-main'>
              <Link
                to='/energia-solar'
                className='ms-2 link-energias-boton'
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <button className='text-center border border-warning titu'>
                  <h4 className='m-0'>Enegía Solar</h4>
                </button>
              </Link>
              <Link
                to='/energia-eolica'
                className='ms-2 link-energias-boton'
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <button className='text-center border border-warning titu'>
                  <h4 className='m-0'>Energía Eólica</h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='bajo p-3'>
        <hr className='rayas' />
        <div className='row'>
          <div className='col-md-6 centrar'>
            <h2 className='text-center'>
              <strong>Evolución Histórica</strong>
            </h2>
            <p className='justificar'>
              En la actualidad, el desarrollo sostenible y la preocupación por
              el medio ambiente han llevado a un creciente interés en las
              energías renovables. Estas fuentes de energía son aquellas que se
              obtienen de fuentes naturales y se regeneran de forma continua,
              como la energía solar, eólica, hidroeléctrica, geotérmica y
              biomasa. Sin embargo, este enfoque no es algo nuevo, ya que a lo
              largo de la historia, la humanidad ha utilizado diversas formas de
              energías renovables para satisfacer sus necesidades energéticas.
            </p>

            <div>
              <Link
                to='/timeline'
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <button className='text-center border border-warning titu1'>
                  <h4 className='m-0'>Ver mas</h4>
                </button>
              </Link>
            </div>
          </div>
          <div className='col-md-6 p-4 '>
            <img
              src={imagen3}
              className='medir tamaño-responsive-none'
              alt=''
            />
            <img
              src={imagen5}
              className='tamaño-responsive'
              alt='energia-historia'
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Seccion;
