import axios from 'axios';
import { pathOr } from 'ramda';

export const changeCepInput = (cepInput) => {
  return (dispatch) => {
    dispatch(cepInputAction(cepInput));
  }
};

const cepInputAction = (cepInput) => {
  return {
    type: 'CHANGE_CEP_INPUT',
    payload: cepInput
  };
};

export const cepRequest = (cepInput) => {
  return (dispatch) => {
    if(cepInput.length === 8){
      dispatch(cepRequestAction());
      axios.get(`/api/cep?cep=${cepInput}`)
        .then(
          (response) => {
            if(pathOr('', ['data', 'cep'], response) !== '') {
              return dispatch(cepSuccessAction({
                cep: pathOr('', ['data', 'cep'], response),
                logradouro: pathOr('', ['data', 'logradouro'], response),
                localidade: pathOr('', ['data', 'localidade'], response),
                uf: pathOr('', ['data', 'uf'], response)
              }));
            } else {
              return dispatch(cepErrorAction('Digite um CEP válido!'));
            }
          }
        )
        .catch( (error) => dispatch(cepErrorAction('Digite um CEP válido!')));
      } else {
        return dispatch(cepErrorAction('Digite um CEP válido!'));
      }
  };
};

const cepRequestAction = () => {
  return {
    type: 'FETCH_CEP_REQUEST'
  };
};

const cepSuccessAction = (cepData) => {
  return {
    type: 'FETCH_CEP_SUCCESS',
    payload: cepData
  };
};

const cepErrorAction = (error) => {
  return {
    type: 'FETCH_CEP_ERROR',
    payload: error
  };
};