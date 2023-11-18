// Noticias.jsx
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Noticia from './Noticia';

class Noticias extends Component {
    render() {
      // Utilizamos un filtro para eliminar noticias duplicadas basadas en el título
      const noticiasFiltradas = this.props.noticias.filter((noticia, index, self) =>
        index === self.findIndex((t) => t.title === noticia.title)
      );
  
      return (
        <div className="row">
          {Array.isArray(noticiasFiltradas) &&
            noticiasFiltradas.map((noticia) => (
              <Noticia key={noticia.url} noticia={noticia} />
            ))}
        </div>
      );
    }
  }
  
  export default Noticias;