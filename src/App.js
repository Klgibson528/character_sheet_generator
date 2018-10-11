import React, { Component } from "react";
import "./App.css";
import SearchAppBar from "./components/NavBar";
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAppBar />
        <Home/>
      </div>
    );
  }
}

export default App;
