
import { LOGO_URL } from "./Utils/Const";

const Header = () => (
    <div className="Header">
    <div>
    <a href="/">
    <img src = {LOGO_URL} alt="Logo" className="Logo"/> 
    </a>
    </div>
    <h1 className="Title">My React</h1>
    <div className="topnav">
    <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    </div>
    );
    

    export default Header;