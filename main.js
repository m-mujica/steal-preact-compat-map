import React from "react";
import { render } from "react-dom";

const App = props =>
  <div>
    <h1>{props.value}</h1>
    <p>This is the {props.value} component.</p>
    <input value={props.value} onChange={props.onChange} />
  </div>;

render(<App value="Home" />, document.getElementById("app"));
