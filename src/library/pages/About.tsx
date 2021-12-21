import React, { Component } from 'react';
// import Button from './main/Button';
import MediumButton from '../components/main/MediumButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <>
        <Link to="/Login" style={styles.linkstyle}>
          <MediumButton style={styles.button}>Login</MediumButton>
        </Link>
      </>
    );
  }
}

const styles: { [key: string]: React.CSSProperties} = {
  linkstyle:{
    textDecoration: 'none',
  },
  button:{
    cursor: 'pointer'
  }

} as const;

export default About;
