import React from 'react';
import ReactDOM from 'react-dom';
import BuscaCep from './busca-cep-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BuscaCep />, div);
  ReactDOM.unmountComponentAtNode(div);
});
