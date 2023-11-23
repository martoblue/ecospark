import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import NoticiasFilter from '../../components/noticias/NoticiasFilter';

class Noticias extends Component {
  state = {
    noticias: [],
  };

  componentDidMount() {
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url =
      'https://newsapi.org/v2/everything?q="clean energy"&language=es&apiKey=d91bcb8b659545aba0f7835c966ad93a';

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((noticias) => {
        const noticiasSinAutor = noticias.articles.map((noticia) => {
          const { author, ...restoNoticia } = noticia; // Filtra el campo del autor
          return restoNoticia;
        });

        this.setState({
          noticias: noticiasSinAutor,
        });
      });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='container mt-5'>
          <NoticiasFilter noticias={this.state.noticias} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Noticias;
