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
import PostJob from "./screens/PostJob";
import client from "./api";
import { ApolloProvider } from "react-apollo";

//import { ApolloProvider } from "@apollo/react-hooks";
const AppWithRoutes = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/job/:id" component={JobDetails}></Route>
          <Route exact path="/postJob/" component={PostJob}></Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
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
