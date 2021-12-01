import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../../library/constants/About';
import Login from '../../library/constants/Login';
import MyPage from '../../library/constants/MyPage';
import Choice from '../../library/constants/Choice';
import Main from '../../library/constants/Main';

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
        <li>
          <Link to="/MyPage">MyPage</Link>
        </li>
      </ul>
    </nav>
    <main style={styles.container}>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/MyPage">
        <MyPage />
      </Route>
      <Route path="/Choice">
        <Choice />
      </Route>
      <Route path="/Main">
        <Main />
      </Route>
    </main>
  </Router>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    height: '50%',
    position: 'relative',
    display: 'flex',
    top: '20px',
    justifyContent: 'center',
  },
  in_div: {
    width: 70,
    height: 100,
  },
} as const;

export default Root;
