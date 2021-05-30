import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BankMap from './BankMap';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function NavMenu() {
  return (
  <>
  <Link to="/val" className="links">
  Курс валют
  </Link>
  <Link to="/bank" className="links">
  Отделения банка
  </Link>
  </>
  );
 }

ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
<div>
  <NavMenu/>
        <Switch>
          <Route exact path="/val" component={App} />
          <Route path="/bank" component={BankMap} />
        </Switch>
        </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
