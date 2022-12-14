import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Router>
); // Strict mode renders components twice on dev server
