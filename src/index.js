import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import "./assets/styles/reset.css";
import App from "./containers/App";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
