// const header = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     abc: "abc",
//   },
//   "App js file"
// );

/* <div id="parent">
  <div id="child1">
    <h1>I am H1 Tag</h1>
    <h2>I am H2 Tag</h2>
  </div>
  <div id="child2">
    <h1>I am H1 Tag</h1>
    <h2>I am H2 Tag</h2>
  </div>
</div>; */

// ReactElement(object) --> HTML(browser understand)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
]);

console.log("Header :: ", parent); // object

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
