import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Componentes Propios //
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import NoticiasFilter from '../../components/noticias/NoticiasFilter';
import { Component } from 'react';

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
        console.log(noticias);
        this.setState({
          noticias: noticias.articles,
        });
      });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='container mt-5'>
          {/* Corrige la propiedad 'Noticias' a 'noticias' */}
          <NoticiasFilter noticias={this.state.noticias} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Noticias;
