import imgPrincipal from '../../components/assets/img/eolica/parque-eolico.jpg';
import imgHistoryOne from '../../components/assets/img/eolica/historia-eolica.jpg';
import img2 from '../../components/assets/img/eolica/parque-eolico2.jpg';
import img3 from '../../components/assets/img/eolica/parque-eolico3.jpg';
import './EnergiaEolica.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function EnergiaEolica() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-center p-4 '>
            <h1>ENERGÍA EÓLICA</h1>
          </div>
        </div>
        <div className='row p-4 bg-light rounded'>
          <div className='col-md-6 p-4'>
            <h2 id='lista-energia-uno'>¿QUÉ ES Y CÓMO FUNCIONA?</h2>
            <p className='mt-4'>
              La energía eólica aprovecha la fuerza del viento para generar
              electricidad mediante aerogeneradores. Estos dispositivos constan
              de palas que giran, generando una fuerza mecánica que se transmite
              a un generador para producir electricidad. Equipados con sistemas
              de control, los aerogeneradores están montados en torres altas
              para maximizar la captura de energía del viento. La electricidad
              generada se integra en la red eléctrica.
            </p>
            <p>
              A lo largo del tiempo, la tecnología ha evolucionado, produciendo
              aerogeneradores más eficientes y reduciendo costos. Sin embargo,
              el almacenamiento de energía sigue siendo un desafío.
            </p>
            <p>
              La implementación de energía eólica en el hogar implica
              aerogeneradores residenciales que, aunque pueden reducir costos y
              dependencia de fuentes convencionales, dependen de factores como
              la ubicación y regulaciones locales.
            </p>
          </div>
          <div className='col-md-6 p-4 align-self-center d-flex'>
            <img
              src={imgPrincipal}
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
              La energía eólica ha experimentado una notable evolución y mejoras
              desde su invención. A continuación, se detallan algunos de los
              principales avances y cambios a lo largo de su historia:
            </p>
            <ol>
              <li>
                Mejoras en el diseño de las palas: A lo largo del tiempo, se ha
                mejorado el diseño de las palas de los aerogeneradores para
                aumentar su eficiencia en la captura del viento. Las palas son
                ahora más largas y aerodinámicas, lo que les permite aprovechar
                una gama más amplia de velocidades de viento y generar más
                energía.
              </li>
              <li>
                Aumento en la capacidad de generación: Los primeros
                aerogeneradores tenían una capacidad de generación de energía
                relativamente baja. Con el tiempo, se han desarrollado
                aerogeneradores de mayor capacidad que pueden generar más
                electricidad, lo que los hace más rentables.
              </li>
              <li>
                Mayor altura de las torres: Las torres de los aerogeneradores se
                han vuelto más altas para aprovechar vientos más consistentes y
                fuertes que se encuentran a mayores altitudes. Esto ha aumentado
                la eficiencia de la generación de energía eólica.
              </li>
              <li>
                Avances en la tecnología de control: Los sistemas de control de
                los aerogeneradores se han vuelto más sofisticados, lo que les
                permite ajustar la orientación de las palas en tiempo real para
                maximizar la captura de energía y para proteger los equipos en
                condiciones climáticas adversas.
              </li>
              <li>
                Reducción de costos: La fabricación en masa y la mejora en la
                eficiencia de los procesos de producción han reducido
                significativamente los costos de la energía eólica. Esto ha
                hecho que la energía eólica sea más competitiva en comparación
                con fuentes de energía convencionales.
              </li>
              <li>
                Integración de tecnología digital: La tecnología digital se ha
                incorporado en la monitorización y el control de los parques
                eólicos, lo que permite una gestión más eficiente y una mayor
                fiabilidad.
              </li>
              <li>
                Desarrollo de sistemas de almacenamiento: Uno de los desafíos
                clave de la energía eólica es su intermitencia debido a la
                variabilidad del viento. Se han realizado avances en sistemas de
                almacenamiento de energía, como baterías, para mitigar este
                problema y proporcionar energía constante.
              </li>
              <li>
                Mayor eficiencia energética: Los aerogeneradores modernos han
                mejorado su eficiencia en la conversión de la energía cinética
                del viento en electricidad, lo que significa que pueden generar
                más energía con la misma cantidad de viento.
              </li>
            </ol>
            <p>
              La energía eólica ha evolucionado en términos de diseño, capacidad
              de generación, costos, eficiencia y tecnología de control. Estos
              avances han contribuido a hacer de la energía eólica una fuente de
              energía más competitiva y sostenible en todo el mundo.
            </p>
          </div>
        </div>
        <div className='row bg-light rounded'>
          <div className='col-md-6 p-4'>
            <h2 id='lista-energia-tres'>DESAFÍOS EN EL AVANCE TECNOLÓGICO</h2>
            <p className='mt-4'>
              A pesar de los avances significativos en la tecnología de energía
              eólica, aún existen desafíos importantes en su avance continuo.
            </p>
            <ul>
              <li>
                Intermitencia y variabilidad, generando picos y caídas en la
                generación de energía.
              </li>
              <li>
                Almacenamiento de energía, con desafíos técnicos y económicos en
                el desarrollo de sistemas a gran escala.
              </li>
              <li>
                Impacto ambiental y estética debido a los parque eólicos a gran
                escala
              </li>
              <li>
                Costos de mantenimiento, siendo un punto clave para prolongar la
                vida de las instalaciones
              </li>
              <li>
                Integración en la red eléctrica, la integración eficiente en la
                red eléctrica existente se vuelve más compleja. La estabilidad y
                la gestión de la red son desafíos técnicos importantes.
              </li>
              <li>
                Ruido y vibraciones, lo que puede ser una fuente de molestias
                para las comunidades cercanas.
              </li>
              <li>
                Ubicación y recursos eólicos, encontrar ubicaciones adecuadas y
                garantizar un acceso adecuado a los vientos es un desafío.
              </li>
              <li>
                Regulaciones y permisos, acelerar estos procesos es esencial
                para promover el crecimiento de la energía eólica.
              </li>
              <li>
                Desafíos de diseño y logísticos al adoptar tecnologías como
                aerogeneradores offshore y sistemas híbridos.
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
            <img src={img2} alt='imagen solar' className='img-solar rounded' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 p-4 align-self-center d-flex'>
            <img src={img3} alt='imagen solar' className='img-solar rounded' />
          </div>
          <div className='col-md-6 p-4'>
            <h2 id='lista-energia-cuatro'>
              IMPLEMENTACIÓN DE ENERGÍA EÓLICA EN EL HOGAR
            </h2>
            <p className='mt-4'>
              La implementación de energía eólica en el hogar, a una escala
              pequeña o doméstica, generalmente implica la instalación de
              aerogeneradores residenciales para generar electricidad a partir
              del viento. Aquí hay una guía general sobre cómo llevar a cabo la
              implementación de la energía eólica en tu hogar:
            </p>
            <ol>
              <li>
                Evalúa la viabilidad de la energía eólica en tu área. Debes
                considerar la velocidad y la consistencia del viento en tu
                ubicación, las restricciones locales y las regulaciones
                relacionadas con la instalación de aerogeneradores.
              </li>
              <li>
                Determina cuánta energía deseas generar con el aerogenerador y
                selecciona un modelo adecuado según tus necesidades energéticas.
                Los sistemas eólicos residenciales varían en tamaño y capacidad.
              </li>
              <li>
                Es recomendable consultar con un instalador de sistemas eólicos
                profesional. Ellos podrán evaluar tu ubicación y proporcionarte
                orientación sobre el diseño del sistema.
              </li>
              <li>
                Asegúrate de obtener los permisos necesarios y cumplir con todas
                las regulaciones locales y nacionales para la instalación de
                sistemas eólicos en tu propiedad.
              </li>
              <li>Diseño del sistema, Adquisición e instalación</li>
              <li>Conéctalos a la red eléctrica si es necesario.</li>
              <li>Monitorea y realiza el mantenimiento recomendado.</li>
            </ol>
            <p>
              Además, ten en cuenta que los costos iniciales de inversión pueden
              ser significativos, por lo que es importante considerar todos los
              aspectos técnicos y financieros antes de tomar una decisión.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnergiaEolica;
