import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import HomeworkTracker from "./HomeworkTracker.jsx";

// Render React's HomeworkTracker into the root div
ReactDOM.createRoot(document.querySelector("#app")).render(
    <React.StrictMode>
        <HomeworkTracker />
    </React.StrictMode>
);
