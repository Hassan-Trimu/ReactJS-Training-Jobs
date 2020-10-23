import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {JOBS as jobs} from './data';
import ListJobItems from './components/listJobItems/index';


const AppWithRoutes = () => {

  return (
    <Router>
      <Switch>
          <Route path="/">
            <ListJobItems jobs = {jobs} />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>
  );

}

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>
  <AppWithRoutes />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
