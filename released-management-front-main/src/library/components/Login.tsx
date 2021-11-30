import React, { Component } from 'react';
import LargeButton from './main/LargeButton';

class Login extends Component {
  render() {
    return (
      <>
        <LargeButton>구글로 시작하기</LargeButton>
        <LargeButton>+a 시작하기</LargeButton>
      </>
    );
  }
}

export default Login;
