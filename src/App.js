import React, { Component } from "react";
import Demonym from "./demonymapp/demonym";

export default class App extends Component {
  render() {
    return (
      <div>
        <Demonym name="Dale" country="USA" />
      </div>
    );
  }
}
