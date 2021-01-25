import "react-app-polyfill/ie9"
import "react-app-polyfill/stable";
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Product from "./Product";

ReactDOM.render(
  <Product />,
  document.getElementById('root')
);
