import React from 'react';
import ReactLazy from 'react-laz-y';

import logo from './logo.svg';
import './App.css';

const AntdCard = React.lazy(() => import('./comp'));

function App() {
  return (
    <>
      <div className="App" style={{ height: 1400 }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
      <div id="lazy-wrapper">
        <ReactLazy>
          <div id="lazy-yo">
            <AntdCard />
          </div>
        </ReactLazy>
      </div>
    </>
  );
}

export default App;
