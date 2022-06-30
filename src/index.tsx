import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.scss";
import { App } from "./app";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
