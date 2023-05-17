import React from "react";
import ReactDOM from "react-dom/client";

// functional component
const H1Component = () => {
  return <h1 className="parent">Hello Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<H1Component />);
