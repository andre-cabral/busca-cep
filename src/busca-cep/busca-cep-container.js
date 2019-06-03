import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { cepRequest, changeCepInput } from './busca-cep-actions';
import BuscaCep from './busca-cep-component';

const mapStateToProps = (state) => ({
  cepInput: state.buscaCep.cepInput,
  cep: state.buscaCep.cep,
  logradouro: state.buscaCep.logradouro,
  localidade: state.buscaCep.localidade,
  uf: state.buscaCep.uf,
  error: state.buscaCep.error
});

const mapDispatchToProps = (dispatch) => 
bindActionCreators({ cepRequest, changeCepInput }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuscaCep);