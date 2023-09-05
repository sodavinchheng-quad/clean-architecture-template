import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./ducks/store";
import { userActions } from "./ducks/user";

const App = () => {
  useEffect(() => {
    store.dispatch(
      userActions.getAllUsers.started({
        onSuccess: (res) => console.log("Res: ", res),
        onError: (err) => console.log("Err: ", err),
      })
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
};

export default App;
