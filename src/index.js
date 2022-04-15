import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './App'

const MainApp = () => (
 <Router>
   <App/>
 </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>,
  document.getElementById('root')
);
