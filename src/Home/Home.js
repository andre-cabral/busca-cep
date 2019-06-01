import React, { Component } from 'react';
import logo from '../images/logo.svg';
import axios from 'axios';
import './Home.scss';

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    axios.get('/api/cep')
      .then( (response) => {
        this.setState((state, props) => {
          return {message: response.data.message};
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
          {this.state.message ? 
            <p>{this.state.message}</p>
            : 
            ''
          }
        </header>
      </div>
    );
  }
}

export default Home;
