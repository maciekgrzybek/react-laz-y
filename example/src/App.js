import React from "react";
import { Link, Router, Route } from "@reach/router";

import Basic from "./components/Basic";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div style={{ height: 1400 }}>
        <header>
          <img src={logo} className="logo" alt="logo" />
          <Link to="basic">Basic example</Link>
        </header>
      </div>
      <Router>
        <Basic path="basic" />
        {/*<div id="lazy-wrapper">*/}
        {/*  <ReactLazy>*/}
        {/*    <div id="lazy-inner-wrapper">*/}
        {/*      <Card />*/}
        {/*    </div>*/}
        {/*  </ReactLazy>*/}
        {/*</div>*/}

        {/*<Home path="/" />*/}
        {/*<Dash path="dashboard" />*/}
      </Router>
    </div>
  );
}

export default App;
