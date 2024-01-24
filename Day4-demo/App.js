import React from "react";
import ReactDOM from "react-dom/client";

// React Element : just like DOM Elements
// React.CreateElement creates an object => when we render it on DOM, then it becomes an HTML element
// what ever happen in react will happen inside root

// JSX- React Element
const jsxHeading = (
  <h1 className="head" id="heading">
    Hi jsx
  </h1>
);

const HeadingComponentFunc = function () {
  return (
    <h1 className="head" id="heading">
      Hey madhu!
    </h1>
  );
};

// React Functional Component
const HeadingComponent = () => {
  return (
    <h1 className="head" id="heading">
      React using jsx 1
    </h1>
  );
};

const Title = () => <h1>Title</h1>;

const title2 = <h1>Title 2</h1>;

const HeadingComponent2 = () => (
  <div className="component">
    {2 + 6}
    {title2}
    {jsxHeading}
    <Title />
    <HeadingComponentFunc />
    <HeadingComponent />
    <h1 className="head" id="heading">
      React using jsx
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); 

 