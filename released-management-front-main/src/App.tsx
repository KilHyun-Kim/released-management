import React from 'react';
import GlobalStyle from 'styles/global-styles';
import Root from '../src/main/routes/index';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Root />
//     </div>
//   );
// }
const App = () => (
  <div className="App">
    <GlobalStyle />
    <Root />
  </div>
);

export default App;
