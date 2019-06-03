import React, { Component } from 'react';
import { getInputType, getInputMask} from './input-helpers'
import InputMask from 'react-input-mask';

class Input extends Component {
  render() {
    const { id, classes = '', typeName = 'text', onChange = (e) => {} } = this.props;

    const mask = getInputMask(typeName);
    return <InputMask {...mask} className={`input${classes !== '' ? ` ${classes}` : ''}`} id={id} type={getInputType(typeName)} onChange={onChange} />;
  }
}

export default Input;
