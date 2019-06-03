const initialState = {
  cepInput: '',
  cep: '',
  logradouro: '',
  localidade: '',
  uf: '',
  error: ''
}

const BuscaCepReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CEP_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_CEP_SUCCESS':
      return {
        ...state,
        cep: action.payload.cep,
        logradouro: action.payload.logradouro,
        localidade: action.payload.localidade,
        uf: action.payload.uf,
        error: ''
      };
    case 'FETCH_CEP_ERROR':
      return {
        ...state,
        cep: '',
        logradouro: '',
        localidade: '',
        uf: '',
        error: action.payload
      };
      case 'CHANGE_CEP_INPUT':
        return {
          ...state,
          cepInput: action.payload,
        };
    default:
      return state;
  }
}

export default BuscaCepReducer;