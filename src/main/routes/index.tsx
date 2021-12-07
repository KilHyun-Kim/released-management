import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../../library/pages/About';
import Login from '../../library/pages/Login';
import MyPage from '../../library/pages/MyPage';
import Choice from '../../library/pages/Choice';
import Main from '../../library/pages/Main';

import styled, { css } from 'styled-components';

//Router Test Code
const Root: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Choice">Choice</Link>
        </li>
        <li>
          <Link to="/Main">Main</Link>
        </li>
        {/* <li>
          <Link to="/MyPage">MyPage</Link>
        </li> */}
      </ul>
    </nav>
    <main style={styles.container}>
      {/* <main> */}
      <Route path="/About">
        <div style={styles.about}>
          <About />
        </div>
      </Route>
      <Route path="/Login">
        <div style={styles.about}>
          <Login />
        </div>
      </Route>
      <Route path="/MyPage">
        <MyPage />
      </Route>
      <Route path="/Choice">
        <Choice />
      </Route>
      <Route path="/Main">
        <div style={styles.main}>
          <Main />
        </div>
      </Route>
    </main>
  </Router>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    height: '80%',
    position: 'relative',
    display: 'block',
    // top: '20px',
    // marginLeft: '430px'
  },
  about: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    height: '100%',
    display: 'block',
    position: 'relative',
    top: '20px',
    // marginLeft: '35%',
  },
} as const;

export default Root;
