import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object =>HTMLElement(render)

const heading = React.createElement("h1",{id: "heading"}, "React");


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);