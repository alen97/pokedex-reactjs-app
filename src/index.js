import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      {/* <Redirect
        from="/"
        to="/home" /> */}
      <Switch>
        <Route
          exact
          path="/"
          component={App} />
        <Route
          exact
          path="/pokemon/1"
          render={() =>

            <h1>POKEMON 1</h1>

          } />

        <Route render={() =>
          <div>
            <h1 style={{ color: "black", textAlign: "center" }}>404 – Page Not Found.</h1>
            <h2 style={{ color: "black", textAlign: "center" }}>No pudimos encontrar la página que estás buscando.</h2>
          </div>
        } />
      </Switch>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
