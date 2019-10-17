import React, { Component } from "react";

import PortfolioItem from "./components/PortfolioItems";
import TopLinks from "./components/top-links";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <TopLinks />
        <PortfolioItem />
      </div>
    );
  }
}
