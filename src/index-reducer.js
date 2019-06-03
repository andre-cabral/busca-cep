import { combineReducers } from 'redux'

import BuscaCepReducer from './busca-cep/busca-cep-reducer'

const rootReducer = combineReducers({
  buscaCep: BuscaCepReducer,
});

export default rootReducer;