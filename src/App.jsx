import React, { Component } from "react";
import Header from "./components/Header";
import './App.css';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />

        {/* {localStorage.getItem("token") != null ? <h1>{localStorage.getItem("token")}</h1> : <p>no</p>} */}
        <Main />
      </div >
    );
  }
}

export default App;
