import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./components/Card";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Card />
  </StrictMode>,
  rootElement
);
