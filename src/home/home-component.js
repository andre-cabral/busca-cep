import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './home-style.scss';
import BuscaCep from '../busca-cep/busca-cep-container';

class Home extends Component {
  render() {
    return(
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="app__link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <BuscaCep />
      </div>
    );
  }
}

export default Home;
