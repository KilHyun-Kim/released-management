import React, { Component } from 'react';
import styled from 'styled-components';
class Button extends Component {
  render() {
    return <button>Get Start</button>;
  }
}

// const buttonDiv = styled.button`
//   color: ${(props) => props.theme.fg};
//   border: 2px solid ${(props) => props.theme.fg};
//   background: ${(props) => props.theme.bg};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
// `;

export default Button;
