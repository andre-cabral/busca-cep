import React, { Component } from 'react';
import axios from 'axios';
import { pathOr } from 'ramda';
import logo from '../images/logo.svg';
import './Home.scss';

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cep: '',
      logradouro: '',
      localidade: '',
      uf: ''
    };
  }

  componentWillMount() {
    axios.get('/api/cep')
      .then( (response) => {
        this.setState((state, props) => {
          return {
            cep: pathOr('', ['data', 'cep'], response),
            logradouro: pathOr('', ['data', 'logradouro'], response),
            localidade: pathOr('', ['data', 'localidade'], response),
            uf: pathOr('', ['data', 'uf'], response)
          };
        });
      })
      .catch( (error) => {
        this.setState((state, props) => {
          return {message: error};
        });
        console.log(error);
      });
  }

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
          <p>CEP: {this.state.cep}</p>
          <p>Estado: {this.state.uf}</p>
          <p>Cidade: {this.state.localidade}</p>
          <p>Logradouro: {this.state.logradouro}</p>
        </header>
      </div>
    );
  }
}

export default Home;
