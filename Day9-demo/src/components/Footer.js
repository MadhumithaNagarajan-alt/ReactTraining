
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer" style={{ textAlign : "center"   }}>
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="" target="_blank">
          Md
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>App</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;