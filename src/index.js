import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/css/now-ui-kit.min.css";
import "./assets/css/now-ui-kit.css.map";
import "./assets/demo/demo.css";




import App from "./App";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

