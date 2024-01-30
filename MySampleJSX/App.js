import React from "react";
import ReactDOM from "react-dom";

const jsx = <h1 className="header"> Welcome to swiggy </h1>

const Title = () => (
    <div className="food">
     {jsx}   
    <h2> Choose your food</h2>
    <ul>
    <li>Pizza</li>
    <li>Idly</li>
    <li>Briyani</li>
  </ul>
  
    </div>
    
);



const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Title />);