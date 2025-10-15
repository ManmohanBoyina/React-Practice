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
    [React.createElement("h1",{id:"head1"},"h1 tag"),React.createElement("h2",{id:"head2"},"h2 tag")]
) // creates Javascript Object

/* 
<div id="root">
<h1 id"head1>h1 tag</h1>
<h2 id="head2">h2 tag</h2>
</div>
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 