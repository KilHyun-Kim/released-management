import React from 'react';
import GlobalStyle from 'styles/global-styles';
import Root from '../src/main/routes/index';
import './App.css';
import { store } from 'main/store/createStore';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Root />
  </div>
);

export default App;
