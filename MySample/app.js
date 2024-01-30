import React from "react";
import ReactDOM from "react-dom/client";

const header = <div className="top">
<div className="Title"> <h1> Welcome to My Blog </h1> 
<div class="topnav">
<a class="active" href="#home">Home</a>
<a href="#news">News</a>
<a href="#contact">Contact</a>
<a href="#about">About</a>

</div>
</div>
</div>


const body = <div className="body">
    <div className="bodyleft">

    


   <div className="img">
<h2 className="madhu" > Hi I'm Madhumitha</h2>

    <p className="para"> Madhumitha Nagarajan (born 2000)[2] is an American artist whose work consists primarily of photographic self-portraits, depicting herself in many different contexts and as various imagined characters.

Her breakthrough work is often considered to be the collected Untitled Film Stills, a series of 70 black-and-white photographs of herself evoking typical female roles in performance media (especially arthouse films and popular B-movies). In the 1980s, she used color film and large prints, and focused more on costume, lighting and facial expression.
</p>
<p className="para2">
"One of the reasons I started photographing myself was that supposedly in the spring one of my teachers would take the class out to a place near Buffalo where there were waterfalls and everybody romps around without clothes on and takes pictures of each other. I thought, ‘Oh, I don't want to do this. But if we're going to have to go to the woods I better deal with it early.’ Luckily we never had to do that."
 </p>
   </div>
</div>
</div>


const footer= <div className="footer">
<h5> © 2024 by Turning Heads. Powered and secured by Md</h5>

</div>



const Maincontainer = () => (
    <div>
    {header}  
    {body} 
    {footer}
    </div>
    
);
    



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Maincontainer /> );