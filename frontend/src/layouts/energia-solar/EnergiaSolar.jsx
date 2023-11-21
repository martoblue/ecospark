import imgSolarOne from '../../components/assets/img/solar/solar-img1.png';
import imgHistoryOne from '../../components/assets/img/solar/Historia-paneles-solares.jpg';
import imgSolar2 from '../../components/assets/img/solar/energia_solar2.jpg';
import imgSolar3 from '../../components/assets/img/solar/energia_solar3.jpg';
import Footer from '../../components/footer/Footer';
import './EnergiaSolar.css';
import Navbar from '../../components/navbar/Navbar';

function EnergiaSolar() {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-center p-4 '>
            <h1>ENERGÍA SOLAR</h1>
          </div>
        </div>
        <div className='row p-4 bg-light rounded'>
          <div className='col-md-6 p-4'>
            <h2 id='lista-energia-uno'>¿QUÉ ES Y CÓMO FUNCIONA?</h2>
            <p className='mt-4'>
              La energía solar es una fuente renovable que se deriva de la
              radiación solar, que incluye luz y calor del sol. Puede
              convertirse en electricidad y calor, y desempeña un papel
              fundamental en la transición hacia fuentes de energía más
              respetuosas con el medio ambiente.
            </p>
            <p>
              Se divide en dos tipos principales: energía solar fotovoltaica,
              que convierte directamente la luz solar en electricidad a través
              de células fotovoltaicas, y energía solar térmica, que aprovecha
              el calor solar para diversas aplicaciones, como calefacción y
              electricidad.
            </p>
            <p>
              Ambas formas de energía solar son esenciales para reducir las
              emisiones de gases de efecto invernadero y avanzar hacia un
              sistema energético más sostenible.
            </p>
          </div>
          <div className='col-md-6 p-4 align-self-center d-flex'>
            <img
              src={imgSolarOne}
              alt='imagen solar 1'
              className='img-solar rounded'
            />
          </div>
        </div>
        <div className='row p-4'>
          <div className='col-md-6 p-4 align-self-center d-flex'>
            <img
              src={imgHistoryOne}
              alt='img historia uno'
              className='img-solar rounded'
            />
          </div>
          <div className='col-md-6 p-4'>
            <h2 id='lista-energia-dos'>
              ¿CÓMO HA EVOLUCIONADO DESDE SU INVENCIÓN Y EN QUÉ HA MEJORADO?
            </h2>
            <p className='mt-4'>
              La energía solar ha experimentado una notable evolución y mejora
              desde sus inicios. A continuación, se describen las principales
              etapas de su desarrollo y las mejoras significativas que se han
              logrado a lo largo de los años:
            </p>
            <ol>
              <li>
                Descubrimiento del efecto fotovoltaico (1839): El punto de
                partida en la historia de la energía solar fue el descubrimiento
                del efecto fotovoltaico por parte del físico francés
                Alexandre-Edmond Becquerel en 1839. Este fenómeno involucra la
                generación de electricidad cuando la luz incide en ciertos
                materiales, un proceso fundamental para la energía solar
                fotovoltaica.
              </li>
              <li>
                Primeras células solares (1954): En 1954, Bell Laboratories creó
                la primera célula solar de silicio, que tenía una eficiencia de
                alrededor del 4%. Estas células solares eran caras y se
                utilizaban principalmente en aplicaciones espaciales.
              </li>
              <li>
                Popularización en el espacio (década de 1950 y 1960): La NASA y
                otras agencias espaciales comenzaron a utilizar paneles solares
                en satélites y misiones espaciales. Esto impulsó la
                investigación y el desarrollo en el campo de la energía solar.
              </li>
              <li>
                Mejora de la eficiencia (décadas de 1970 y 1980): Durante estas
                décadas, se realizaron avances significativos en la eficiencia
                de las células solares. La eficiencia de las células solares de
                silicio aumentó considerablemente, lo que las hizo más
                asequibles y prácticas para su uso en la Tierra.
              </li>
              <li>
                Auge de la energía solar a escala comercial (década de 1990 y
                2000): La energía solar comenzó a utilizarse en aplicaciones
                comerciales y residenciales a gran escala. Los incentivos
                gubernamentales y la conciencia ambiental contribuyeron a su
                adopción. Además, se desarrollaron tecnologías como los paneles
                solares de capa fina y las células solares de concentración para
                mejorar la eficiencia y reducir costos.
              </li>
              <li>
                Reducción de costos (década de 2010 en adelante): Uno de los
                avances más notables en la energía solar ha sido la reducción de
                los costos de producción. La tecnología de fabricación ha
                mejorado, y la escala de producción ha aumentado, lo que ha
                llevado a una disminución significativa en el precio de los
                paneles solares y sistemas solares completos.
              </li>
              <li>
                Investigación en células solares avanzadas (continua): La
                investigación en células solares avanzadas, como las células
                solares de perovskita, ha llevado a un aumento en la eficiencia
                y a la exploración de nuevas posibilidades en la captación de
                energía solar.
              </li>
              <li>
                Integración de almacenamiento de energía (continua): La
                integración de sistemas de almacenamiento de energía, como
                baterías, en sistemas solares ha mejorado la disponibilidad de
                energía solar durante la noche y en días nublados, lo que hace
                que la energía solar sea aún más confiable y atractiva.
              </li>
            </ol>
            <p>
              En la actualidad, la energía solar se ha convertido en una fuente
              de energía establecida y crecientemente importante a nivel
              mundial. Los avances en tecnología, la reducción de costos y la
              conciencia ambiental han contribuido a su adopción generalizada en
              hogares, empresas e instalaciones industriales. La evolución
              continua de la energía solar promete un futuro aún más brillante a
              medida que la tecnología avanza hacia la generación de energía más
              eficiente, asequible y sostenible.
            </p>
          </div>
        </div>
        <div className='row bg-light rounded'>
          <div className='col-md-6 p-4'>
            <h2 id='lista-energia-tres'>DESAFÍOS EN EL AVANCE TECNOLÓGICO</h2>
            <p className='mt-4'>
              A pesar de los avances en la tecnología de energía solar, existen
              desafíos clave que deben abordarse:
            </p>
            <ul>
              <li>Mejorar la eficiencia de las células solares. </li>
              <li>
                Desarrollar tecnologías de almacenamiento de energía más
                efectivas.
              </li>
              <li>
                Implementar redes eléctricas inteligentes para gestionar la
                energía solar de manera eficiente.
              </li>
              <li>
                Aumentar la durabilidad y vida útil de los paneles solares.
              </li>
              <li>
                Abordar el reciclaje y la gestión de desechos de paneles solares
                de manera sostenible.
              </li>
              <li>
                Investigar y desarrollar nuevas tecnologías, como las células
                solares de perovskita.
              </li>
              <li>
                Resolver desafíos económicos y políticos, como la falta de
                incentivos y políticas de apoyo.
              </li>
              <li>
                Integrar estéticamente los paneles solares en edificios y
                estructuras.
              </li>
              <li>
                Mejorar la captación de calor solar para aplicaciones de energía
                solar térmica.
              </li>
            </ul>
            <p>
              A pesar de estos desafíos, la energía solar sigue siendo una
              fuente de energía prometedora y en crecimiento. La inversión en
              investigación y desarrollo, junto con la colaboración entre la
              industria, gobiernos y académicos, es esencial para superar estos
              obstáculos y aprovechar al máximo el potencial de la energía solar
              como una fuente de energía limpia, sostenible y asequible.
            </p>
          </div>
          <div className='col-md-6 p-4 align-self-center d-flex'>
            <img
              src={imgSolar2}
              alt='imagen solar'
              className='img-solar rounded'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 p-4 align-self-center d-flex'>
            <img
              src={imgSolar3}
              alt='imagen solar'
              className='img-solar rounded'
            />
          </div>
          <div className='col-md-6 p-4'>
            <h2 id='lista-energia-cuatro'>
              IMPLEMENTACIÓN DE ENERGÍA SOLAR EN EL HOGAR
            </h2>
            <p className='mt-4'>
              La implementación de energía solar en el hogar es una forma
              efectiva de ahorrar en la factura de electricidad y contribuir al
              medio ambiente. Aquí tienes una guía paso a paso:
            </p>
            <ol>
              <li>
                Evalúa la viabilidad considerando la cantidad de luz solar, el
                espacio disponible y los costos.
              </li>
              <li>Diseña el sistema con un profesional en energía solar.</li>
              <li>Obtén cotizaciones y opciones de financiamiento.</li>
              <li>Consigue los permisos necesarios.</li>
              <li>Instala los paneles solares</li>
              <li>Conéctalos a la red eléctrica si es necesario.</li>
              <li>Monitorea y realiza el mantenimiento recomendado.</li>
              <li>
                Disfruta de los beneficios económicos y medioambientales, como
                ahorros en la factura de electricidad y la posibilidad de vender
                exceso de energía a la red.
              </li>
            </ol>
            <p>
              Planifica cuidadosamente y considera consultar a expertos en
              energía solar para una solución óptima.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnergiaSolar;
