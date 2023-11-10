import imagen from '../assets/OIP3.jpg';
import imagen1 from '../assets/OIP2.jpg';
import imagen4 from '../assets/images.jpg';
import imagen3 from '../assets/img3.webp';
import fondo from '../assets/IMG-20231102-WA0015.jpg';
import './seccionStyle.css';
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom';


const Seccion = () => {
  return (
    <div className='container1'>
    <div>
    <Navbar />
     <img src={fondo} className='img-fluidhhh ' alt='' />
     
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
                <h5 className='card-title  '> Energía Eólica </h5>
                <p className='card-text justificar'>
                La energía eólica, dicho de otra forma, es un tipo de energía renovable,
                 la cual hace uso de los vientos para la generación de energía. 
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
                <h5 className='card-title ajustar '>Energia Solar</h5>
                <p className='card-text justificar '>
                Es la energía generada por el Sol.
                 Dicha energía, emitida en forma de radiación electromagnética,
                  constituye la principal fuente de luz y calor de la Tierra.
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
            <img src={imagen4} className='tamaño img-fluidhh img4' alt='' />
          </div>

          <div className='col-6 text-center p-4'>
            <h2>
              
              <strong> Energía asequible y no contaminante</strong>
            </h2>
            <p className='justificara'>
              La energía es fundamental en todos los desafíos y oportunidades a
              los que hace frente el mundo hoy. Toda actividad en la sociedad
              moderna actual requiere energía para operar. Sin embargo, el uso
              de combustibles fósiles ha impactado de forma negativa en el medio
              ambiente, por lo que es necesario transformar nuestro sistema
              energético para que sea renovable y sostenible. La energía
              sostenible es una oportunidad que transforma vidas, economías y el
              planeta.
            </p>
            
              <Link to='/timeline' className='ms-2'>
              <button className='text-center border border-warning titu'><h4>Ver mas</h4></button>  
              </Link>
             
              
           
          </div>
        </div>
      </section>

      <section className='bajo p-3'>
        <hr className='rayas' />
        <div className='row'>
          <div className='col-6 centrar'>
            <h1 className='text-center'>
              <strong>Evolución Histórica</strong>
            </h1>
            <p className='justificar'>
            En la actualidad, el desarrollo sostenible y la preocupación
             por el medio ambiente han llevado a un creciente interés en 
             las energías renovables. Estas fuentes de energía son aquellas
              que se obtienen de fuentes naturales y se regeneran de forma 
              continua, como la energía solar, eólica, hidroeléctrica, geotérmica 
              y biomasa. Sin embargo, este enfoque no es algo nuevo, ya que a lo
               largo de la historia, la humanidad ha utilizado diversas
             formas de energías renovables para satisfacer sus necesidades energéticas.
            </p>
           
              <div>
             <Link to='/timeline' >
              <button className='text-center border border-warning titu1'><h4>Ver mas</h4></button>  
              </Link> 
              </div>
               
          </div>
          <div className='col-6 p-4 '>
            <img src={imagen3} className='tamaño img-fluidhh img3' alt='' />
          </div>
          
        </div>
      </section>
    </div>
  );
};
export default Seccion;
