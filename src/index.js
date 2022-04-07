import React from "react";
import ReactDOM from "react-dom";
import { ArwesThemeProvider} from "@arwes/core";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
    <ArwesThemeProvider>
        <App />
    </ArwesThemeProvider>
  </>,
  rootElement
);