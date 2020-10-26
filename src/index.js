import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Landing from "./screens/Landing/index";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import JobDetails from "./screens/JobDetails";

const AppWithRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/job/:id" component={JobDetails}></Route>
        {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>
  <AppWithRoutes />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
