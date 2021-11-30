import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../../library/components/About';
import Login from '../../library/components/Login';
import MyPage from '../../library/components/MyPage';
import Choice from '../../library/components/Choice';
import Main from '../../library/components/Main';

//Router Test Code
const Root: React.FC = () => (
  <Router>
    <div>
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
    </div>
  </Router>
);

export default Root;
