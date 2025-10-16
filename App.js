import React from "react";
import ReactDOM from "react-dom/client";
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I'm h1 tag")
  )
); //React Element

/* 
<div id="parent">
    <div id"child>
        <h1 id"heading"> I'm h1 tag </h1>
    </div>
</div>
*/
const parent = React.createElement("div", { id: "root" }, [
  React.createElement("h1", { id: "head1", key: "h1" }, "h1 tag"),
  React.createElement("h2", { id: "head2", key: "h2" }, "h2 tag"),
  React.createElement("h2", { id: "head3", key: "h3" }, "h4 tag"),
]); // creates Javascript Object

/* 
<div id="root">
<h1 id"head1>h1 tag</h1>
<h2 id="head2">h2 tag</h2>
</div>
*/
const heading = React.createElement("h1", { id: "heading" }, "This is React!!");
const HeadingComponent = () => {
  return <h1>Manmohan Boyina</h1>;
}; // can be written as const HeadingComponent = ()=> <h1>Manmohan Boyina</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render element
root.render(<HeadingComponent />); //render a component

const Title = () => <h1>Manmohan Boyina</h1>; //Function component

const number = 100;
const Head = () => (
  <div>
    <HeadingComponent />
    <Title />
    {
      number // any JS code can be written inside curly braces
    }
    <h2>
      {
        number //we can wrap our JS code in HTML tags as well
      }
    </h2>
    {
      parent1 // we can add React element inside component as well
    }
    <h2>Manmohan</h2>
  </div>
); //Component Composition
root.render(heading) //render React element
root.render(<Head />); //render react component
