import { LOGO_URL } from "../utils/Constants";

const Logo = () => (
<a href="/">
<img className="Logo" src={LOGO_URL} alt="Food Logo" />
</a>
);

const Title = () => (
<h1>Food App </h1>
);


const Header = () => {
    return(
        <div className="Header">
  <Logo />
  <Title />
 
  <div className="navItems">
   <ul>
    <li>Home</li>
    <li>Contact</li>
    <li>About US</li>
   </ul>
</div>
</div>
  );
};

export default Header;