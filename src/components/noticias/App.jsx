import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Componentes Propios //
import Header from './components/Header';
import Noticias from './components/Noticias';
import Navbar from '@components/navbar/navbar';

class App extends Component {
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
      <div>
        <Header />
        <Navbar />
        <div className="container">
          {/* Corrige la propiedad 'Noticias' a 'noticias' */}
          <Noticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;