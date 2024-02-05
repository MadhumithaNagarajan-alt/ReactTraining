import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Body from "./Body";
import Footer from "./Footer";




const Applayout = () => (
<div className="Applayout">
<Header />
<Body />
<Footer />
</div>
);






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);



/* Header
>logo, top nav bars
Body
> some card
Footer
>contact, link, address*/