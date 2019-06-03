export const getInputType = (typeName) => {
  switch (typeName){
    case 'cep' :
      return 'number';
    default :
      return 'text';
  };
}