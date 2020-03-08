import React from "react";
import { Router } from "@reach/router";

import { Basic, RootMargin } from "./pages";
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
        <Basic path="/" />
        <RootMargin path="/root-margin" />
      </Router>
    </div>
  );
}

export default App;
