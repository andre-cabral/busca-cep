import React, { Component } from 'react';
import './busca-cep-style.scss';
import Button from '../button/button-component';
import Input from '../input/input-component';

class BuscaCep extends Component {
  render() {
    const { cepInput, cep, uf, localidade, logradouro } = this.props;
    const changeCepInput = (e) => {
      this.props.changeCepInput(e.target.value)
    };
    const cepRequest = (e) => {
      e.preventDefault();
      this.props.cepRequest(cepInput);
    };

    return(
      <article className="cep">
        <form className="cep__form" onSubmit={cepRequest}>
          <Input classes="input--light" id="input-cep" onChange={changeCepInput} />
          <Button classes="button--dark" text="Buscar CEP" />
        </form>
        <section className="cep__data">
          {/*
          Utilizada a tag <p> ao invés da tag <address> pois
          se trata de um endereço que não é informação de contato.
          De acordo com a especificação da MDN encontrada em:
          https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address#Usage_notes 
          */}
          <p className="cep__text">
            <span className="cep__text--label">CEP: </span>
            <span className="cep__text--value">{cep}</span>
          </p>
          <p className="cep__text">
            <span className="cep__text--label">Estado: </span>
            <span className="cep__text--value">{uf}</span>
          </p>
          <p className="cep__text">
            <span className="cep__text--label">Cidade: </span>
            <span className="cep__text--value">{localidade}</span>
          </p>
          <p className="cep__text">
            <span className="cep__text--label">Logradouro: </span>
            <span className="cep__text--value">{logradouro}</span>
          </p>
        </section>
      </article>
    );
  }
}

export default BuscaCep;
