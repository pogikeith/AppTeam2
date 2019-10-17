import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import PortfolioItem from "./components/PortfolioItems";
import Profile from "./components/profile";

const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/profile/:username" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Nav />, document.getElementById("root"));
