import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./components/layouts/Header";
import Dashboard from "./components/leads/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
