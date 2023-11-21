import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CardNoticia from './CardNoticia';
import { Component } from 'react';

class Noticias extends Component {
  render() {
    // Utilizamos un filtro para eliminar noticias duplicadas basadas en el título
    const noticiasFiltradas = this.props.noticias.filter(
      (noticia, index, self) =>
        index === self.findIndex((t) => t.title === noticia.title),
    );

    return (
      <div className='row pt-4'>
        {Array.isArray(noticiasFiltradas) &&
          noticiasFiltradas.map((noticia) => (
            <CardNoticia key={noticia.url} noticia={noticia} />
          ))}
      </div>
    );
  }
}

export default Noticias;
