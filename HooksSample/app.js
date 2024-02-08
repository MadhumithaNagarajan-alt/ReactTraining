import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";




const App = () =>{
    const [num, setNum] = useState(1);
    const onClick = () => {
        setNum(num+1);
    };
   const Products = (props)=>{
    return (
        <div>
          <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
        </div>
      );
   };
       
    
return(
<div>
<h1> {num}</h1>
<button onClick={onClick}>Add</button>
<Products 
name="Cyxus"
description ="Non-Slip Fitness Leisure Running Sneakers"
price="$29"
/>
</div>

    );
};






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
 