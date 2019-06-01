const R = require('ramda');

function parseCep(cepData){
  return {
    cep: R.pathOr('', ['cep'], cepData),
    logradouro: R.pathOr('', ['logradouro'], cepData),
    localidade: R.pathOr('', ['localidade'], cepData),
    uf: R.pathOr('', ['uf'], cepData)
  };
}

module.exports = { parseCep };