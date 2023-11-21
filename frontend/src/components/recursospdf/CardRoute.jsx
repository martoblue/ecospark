import '../recursospdf/card-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardExample from './CardPdf';
import NavBar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Documents() {
  const cardData = [
    {
      title: 'Diseño y construcción de un generador Eólico',
      text: 'En este pdf encontrarás información acerca de como se construye un generador eólico de energía electrica continua. (Esta información fue tomada de pagínas externas).',
      imageSrc:
        'https://www.traxco.es/blog/wp-content/uploads/2014/10/generador-eolico.jpg',
      pdfUrl: 'http://localhost:5173/file_pdf.pdf',
    },
    {
      title: 'Componentes de una instalación fotovoltaica',
      text: 'En este pdf encontrarás información acerca de los componentes de una instalación fotovoltaica, y también su función (Esta información fue tomada de pagínas externas).',
      imageSrc:
        'https://cdn.daa.net/images/placas-solares/instalacion-fotovoltaica-aislada.jpg', // Cambia la URL de la imagen
      pdfUrl: 'http://localhost:5173/file2_pdf.pdf',
    },
    {
      title: 'Amigos y amigas de la energía',
      text: 'En este pdf encontrarás información educativa e interactiva para niños 5to y 6to año básico (Esta información fue tomada de pagínas externas).',
      imageSrc:
        'https://repositorio.minedu.gob.pe/bitstream/handle/20.500.12799/6317/amigas2.png?sequence=3&isAllowed=y', // Cambia la URL de la imagen
      pdfUrl: 'http://localhost:5173/file3_pdf.pdf',
    },
    {
      title:
        '¿Por qué la energía solar es un recurso indispensable para el desarrollo de la vida?',
      text: 'En este pdf encontrarás información educativa para niños de 6to año básico para la enseñanza sobre la energía solar (Esta información fue tomada de pagínas externas).',
      imageSrc:
        'https://todoagricola.es/energia/wp-content/uploads/2021/10/paneles-agricultura.jpg', // Cambia la URL de la imagen
      pdfUrl: 'http://localhost:5173/file4_pdf.pdf',
    },
    {
      title:
        '¿Cómo influye la energía solar en los seres vivos, el aire, el agua y el suelo?',
      text: 'En este pdf encontrarás información educativa e interactiva para niños más pequeños, para que sepan desde temprana edad como aprovechar los recursos naturales que tenemos (Esta información fue tomada de pagínas externas).',
      imageSrc: 'https://i.ytimg.com/vi/KJuianCof2Y/maxresdefault.jpg', // Cambia la URL de la imagen
      pdfUrl: 'http://localhost:5173/file5_pdf.pdf',
    },
    {
      title: '¡HAGAMOS UN MOLINO DE VIENTO!',
      text: 'En este pdf encontrarás información para hacer con los más pequeños de la casa un molino de viento. (Esta información fue tomada de pagínas externas)',
      imageSrc:
        'https://www.wikihow.com/images_en/thumb/7/70/Use-an-Anemometer-Step-8.jpg/v4-460px-Use-an-Anemometer-Step-8.jpg.webp', // Cambia la URL de la imagen
      pdfUrl: 'http://localhost:5173/file6_pdf.pdf',
    },
  ];

  return (
    <>
      <NavBar />
      <div className='card-container card-container-margin'>
        <div className='top-row'>
          {cardData.slice(0, 3).map((card, index) => (
            <CardExample key={index} {...card} />
          ))}
        </div>
        <div className='bottom-row'>
          {cardData.slice(3, 6).map((card, index) => (
            <CardExample key={index} {...card} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Documents;
