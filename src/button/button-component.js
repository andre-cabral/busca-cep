import React, { Component } from 'react';
import './button-style.scss';

class Button extends Component {
  render() {
    const { classes = '', text = '', type="submit", onClick = () => {} } = this.props;

    return(
      <button className={`button${classes !== '' ? ` ${classes}` : ''}`} onClick={onClick} type={type}>
          {text}
      </button>
    );
  }
}

export default Button;
