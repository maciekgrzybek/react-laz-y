import React from "react";
import ReactLazy from "react-laz-y";

import logo from "./logo.svg";
import "./App.css";

const AntdCard = React.lazy(() => import("./comp"));

function App() {
  return (
    <div className="App" style={{ height: "300vh" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ marginTop: "200vh" }}></div>
        <ReactLazy>
          <div>
            <AntdCard />
          </div>
        </ReactLazy>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
