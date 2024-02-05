// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="" target="_blank">
          Md
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Swiggy<span>App</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;