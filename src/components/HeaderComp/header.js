import Grid from "@material-ui/core/Grid";
import "./header.css"
import logo from "../../images/header/LOGO.png"
import LongMenu from "./OnMobileHeaderMenu";
function Header() {
  return (
    <div className="mainHeaderDiv">
      <div className="imgDiv">
        <img src={logo} />
      </div>
      <div className="navButtonsDiv">
        <h4
        
        onClick={() => {
          const element = document.getElementById("Home");
          element.scrollIntoView({ behavior: "smooth" });
        }}>Home</h4>
        <h4 onClick={() => {
          const element = document.getElementById("About Us");
          element.scrollIntoView({ behavior: "smooth" });
        }}>About Us</h4>
        <h4 onClick={() => {
          const element = document.getElementById("Services");
          element.scrollIntoView({ behavior: "smooth" });
        }}>Services</h4>
        <h4
          onClick={() => {
            const element = document.getElementById("Blog");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >Blogs</h4>
        <h4
          onClick={() => {
            const element = document.getElementById("Achievements");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >Achievements</h4>
        <h4
          onClick={() => {
            const element = document.getElementById("Contact Us");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >Contact Us</h4>
      </div>
      <div className="MobileMenuDiv">
        <LongMenu />
      </div>
    </div>
  );
}

export default Header;
