import React, { Component } from 'react';
import InputBox from './main/InputBox';
import Circle from './main/Circle';

class Choice extends Component {
  render() {
    return (
      <>
        <InputBox placeholder="Search Input" />
        <div>
          <Circle />
        </div>
      </>
    );
  }
}

export default Choice;
