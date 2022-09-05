import Grid from "@material-ui/core/Grid";
import "./header.css"
import logo from "../../images/header/LOGO.png"
import LongMenu from "./OnMobileHeaderMenu";
function Header() {
  return (
    <div className="mainHeaderDiv">
      <div className="imgDiv">
        <img src={logo}/>
      </div>
      <div className="navButtonsDiv">
        <h4>Home</h4>
        <h4>About Us</h4>
        <h4>Services</h4>
        <h4>Blog</h4>
        <h4>Achievements</h4>
        <h4>Contact Us</h4>
      </div>
      <div className="MobileMenuDiv">
      <LongMenu  />
      </div>
    </div>
  );
}

export default Header;
