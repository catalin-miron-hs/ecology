/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import Ecology from "../src/index";
import * as docgen from "react-docgen";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          source={docgen.parse(require("!!raw!./sample"))}
          scope={{React, ReactDOM, SampleClass: require("./sample")}}/>
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
