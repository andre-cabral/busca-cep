import React, { Component } from 'react';

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
