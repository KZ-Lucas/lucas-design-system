import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flex } from "./components/Atoms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flex mx={4} py={12}>
          TEST
        </Flex>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
