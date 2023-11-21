import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Noticia = (props) => {
  const { url, author, title, urlToImage, content } = props.noticia;

  const imagenDeRelleno =
    'https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/12/508453.jpg';

  // Estilo para la imagen, establece un tamaño fijo
  const estiloImagen = {
    width: '100%', // Ajusta el ancho según sea necesario
    height: '200px', // Establece una altura fija
    objectFit: 'cover', // Ajusta la imagen para cubrir la caja sin deformarla
  };

  // Manejar errores de carga de la imagen
  const manejarErrorDeImagen = (event) => {
    // Reemplazar con la URL de la imagen de relleno en caso de error 404 u otros errores
    event.target.src = imagenDeRelleno;
  };

  return (
    <div className='col-md-4 mb-3'>
      <div className='card h-100 '>
        <img
          src={urlToImage || imagenDeRelleno} // Usar la URL de relleno si la imagen es vacía
          alt={title}
          className='card-img-top'
          style={estiloImagen}
          onError={manejarErrorDeImagen} // Manejar errores de carga de la imagen
        />

        <div className='card-body card-centered  d-flex flex-column align-items-center justify-content-between'>
          <h5 className='card-title'>{title}</h5>
          <span className='card-subtitle mb-2 text-muted'>{author}</span>
          <p className='card-text'>{content}</p>
          <a href={url} className='btn btn-primary'>
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
