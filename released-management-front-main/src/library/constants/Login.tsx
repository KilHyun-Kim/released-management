import React, { Component } from 'react';
import LargeButton from '../components/main/LargeButton';

class Login extends Component {
  render() {
    return (
      <div style={styles.container}>
        <LargeButton>구글로 시작하기</LargeButton>
        <LargeButton>+a 시작하기</LargeButton>
      </div>
    );
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative',
    display: 'block',
    // top: 20,
  },
} as const;

export default Login;
