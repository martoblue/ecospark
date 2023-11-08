import imagen from '../assets/OIP3.jpg';
import imagen1 from '../assets/OIP2.jpg';
import imagen4 from '../assets/images.jpg';
import imagen3 from '../assets/img3.webp';
import Button from '../button/button';
import fondo from '../assets/IMG-20231102-WA0015.jpg';
import './seccionStyle.css';
import Navbar from '../navbar/Navbar'


const Seccion = () => {
  return (
    <div className='container1'>
    <div>
    <Navbar />
     <img src={fondo} className='img-fluid ' alt='' />
     
   </div>
   

      <section className='alta'>
        <hr className='rayas' />
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className='col '>
            <div className='card'>
              <div className='text-center titu'>
                <h1>Juntos    </h1>
              </div>
              <img
                src={imagen}
                className='card-img-top medir  '
                alt='...'
              />
              <div className='card-body text-center'>
                <h5 className='card-title  '>Card title</h5>
                <p className='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className='col '>
            <div className='card'>
              <div className='text-center titu'>
                <h1>Conocer</h1>
              </div>
              <img
                src={imagen1}
                className='card-img-top medir1 '
                alt='...'
              />
              <div className='card-body text-center'>
                <h5 className='card-title ajustar '>Card title</h5>
                <p className='card-text '>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='rayas' />
      </section>

      <section>
        <div className='row seccion2'>
          <div className='col-6 p-4 '>
            <img src={imagen4} className='tamaño img-fluid img4' alt='' />
          </div>

          <div className='col-6 text-center p-4 '>
            <h2>
              {' '}
              <strong> Energía asequible y no contaminante</strong>
            </h2>
            <p>
              La energía es fundamental en todos los desafíos y oportunidades a
              los que hace frente el mundo hoy. Toda actividad en la sociedad
              moderna actual requiere energía para operar. Sin embargo, el uso
              de combustibles fósiles ha impactado de forma negativa en el medio
              ambiente, por lo que es necesario transformar nuestro sistema
              energético para que sea renovable y sostenible. La energía
              sostenible es una oportunidad que transforma vidas, economías y el
              planeta.
            </p>

            <Button />
          </div>
        </div>
      </section>

      <section className='bajo p-3'>
        <hr className='rayas' />
        <div className='row'>
          <div className='col-6 centrar'>
            <h1 className='text-center'>
              <strong>¿Qué son las Energías Renovables?</strong>
            </h1>
            <p>
              Son aquellas que provienen de fuentes consideradas inagotables, y
              que se caracterizan porque en sus procesos de transformación y
              aprovechamiento no se consumen a escala humana, ya sea por la
              inmensa cantidad de energía que contienen o porque son capaces de
              regenerarse en el tiempo
            </p>
            <Button />
          </div>
          <div className='col-6 p-4 '>
            <img src={imagen3} className='tamaño img-fluid img3' alt='' />
          </div>
          <hr className='rayas' />
        </div>
      </section>
    </div>
  );
};
export default Seccion;
