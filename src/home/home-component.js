import React, { Component } from 'react';
import BuscaCep from '../busca-cep/busca-cep-container';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <BuscaCep />
      </div>
    );
  }
}

export default Home;
