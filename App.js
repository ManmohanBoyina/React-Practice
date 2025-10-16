import React from "react";
import {createRoot} from "react-dom/client";
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I'm h1 tag")
  )
);

/* 
<div id="parent">
    <div id"child>
        <h1 id"heading"> I'm h1 tag </h1>
    </div>
</div>
*/

const parent=React.createElement("div",{id:"root"},
    [React.createElement("h1",{id:"head1", key:"h1"},"h1 tag"),React.createElement("h2",{id:"head2",key:"h2"},"h2 tag"),React.createElement("h2",{id:"head3",key:"h3"},"h4 tag")]
) // creates Javascript Object

/* 
<div id="root">
<h1 id"head1>h1 tag</h1>
<h2 id="head2">h2 tag</h2>
</div>
*/
const root = createRoot(document.getElementById("root"));
root.render(parent); 