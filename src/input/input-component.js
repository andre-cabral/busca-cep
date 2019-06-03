import React, { Component } from 'react';
import './input-style.scss';
import { getInputType } from './input-helpers'

class Input extends Component {
  render() {
    const { id, classes = '', typeName = 'text', onChange = (e) => {} } = this.props;

    return(
      <input className={`input${classes !== '' ? ` ${classes}` : ''}`} id={id} type={getInputType(typeName)} onChange={onChange}></input>
    );
  }
}

export default Input;
