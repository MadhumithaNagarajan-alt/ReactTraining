import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Title = () => (
  <a href="/">
    <img style={{    width: "116px"}} className="logo" src={LOGO_URL} alt="Food Fire Logo" />
  </a>
  
  
);


const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="heading" >
        <h1 > <strong>Swiggy</strong></h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;