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


const body = <div className="blogbody">
<div class="container"> 
<div class="card"><div className="img"  > 
  <div class="card__header">
    
    </div>
    <div class="card__body">
    <span class="tag tag-blue">Photography</span>
    <h4>What's Photography</h4>
    <p>This introductory text provides a brief overview of Photography. Art terms are indicated with an underline and their definition can be viewed by hovering the cursor over the term. They can also be found in the glossary. </p>
  </div>
  </div>
  <div class="card__footer">
    <div class="user">
      
      <div class="user__info">
        <h5>Madhumitha Nagarajan</h5>
        <small>Just Now</small>
      </div>
    </div>
  </div>
</div>
</div>
</div>






const body2 =<div className="blogbody2">
 <div class="container"> 
<div class="card"><div className="img2"  > 
  <div class="card__header">
    
    </div>
    <div class="card__body">
    <span class="tag tag-blue">Travel</span>
    <h4>My travel experience</h4>
    <p>One of my passions is travelling. Travel involves visiting new places and meeting new people and having varied experiences. I come originally from Romania and have travelled to UK and US. I remember the quote by Samuel Johnson: “All travel has its advantages. If the passenger visits better countries, he may learn to improve his own. And if fortune carries him to worse, he may learn to enjoy it”. I have had the luck of visiting better countries and I believe my travel experiences have taught me a lot about human life and helped me expand the way I see things.</p>
  </div>
  </div>
  <div class="card__footer">
    <div class="user">
      
      <div class="user__info">
        <h5>Madhumitha Nagarajan</h5>
        <small>1h ago</small>
      </div>
    </div>
  </div>
</div>
</div>
</div>

const body3 = 
 <div className="blogbody3">
<div class="container"> 
<div class="card"><div className="img3"  > 
  <div class="card__header">
    
    </div>
    <div class="card__body">
    <span class="tag tag-blue">Books Reading</span>
    <h4>Benefits of reading</h4>
    <p>There are so many benefits to reading books.

But let's face it: It can be challenging to motivate ourselves to read a 382-page book when we can watch the movie, listen to the audiobook, or watch a YouTube video summary instead.

Am I right? However, if most of your daily reading consists of social media posts, text messages, and news headlines, you're missing out.

So, what are the benefits of reading books? 

If you're interested in reading more books but need some motivation, this article's for you. After all, when you understand the importance of reading books, you're more likely to do it.</p>
  </div>
  </div>
  <div class="card__footer">
    <div class="user">
      
      <div class="user__info">
        <h5>Madhumitha Nagarajan</h5>
        <small>2days ago</small>
      </div>
    </div>
  </div>
</div>
</div>
</div>


const body4 = <div className="blogbody4">
    <h1>Let Me Know About Yourself!</h1>
<textarea  rows="13" cols="150"></textarea>
<div>
  <button className="button" onClick={showAlert}>Submit</button>
</div>
</div>

const footer= <div className="blogfooter">
<h5> © 2024 by Turning Heads. Powered and secured by Md</h5>

</div>
function showAlert() {
    alert('Your response has been saved!');
  }


const Maincontainer = () => (
    <div className="Maincontainer">
    {header}  
    {body} 
    {body2}
    {body3}
    {body4}
    
    {footer}
    </div>
    
);
    



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Maincontainer /> );