export const getInputType = (typeName) => {
  switch (typeName){
    case 'cep' :
      return 'text';
    default :
      return 'text';
  };
}

export const getInputMask = (typeName) => {
  switch (typeName){
    case 'cep' :
      return {mask: '99999999', maskChar:' ', placeholder:'00000-000'};
    default :
      return {};
  };
}