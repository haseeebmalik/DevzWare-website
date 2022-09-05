import  React,{useState} from 'react';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./OnMobileHeaderMenu.css"
import { GiHamburgerMenu } from 'react-icons/gi';





export default function LongMenu() {
  const [showMenu,hideMunu]=useState(false)

    return (
        <div style={{color:"white"}}>
          <GiHamburgerMenu style={{color:"white"}} onClick={()=>{
             hideMunu(!showMenu)
          }}/>

          <div className={showMenu!==true?"hide":"hamburgerInnerDiv"}>
            <p className="hamburgerListItem"
               onClick={() => {
                const element = document.getElementById("Home");
                element.scrollIntoView({ behavior: "smooth" });
                hideMunu(false)
              }}
            >Home</p>
            <p className="hamburgerListItem"
            onClick={() => {
          const element = document.getElementById("About Us");
          element.scrollIntoView({ behavior: "smooth" });
          hideMunu(false)
        }}>About Us</p>
            <p className="hamburgerListItem"
            onClick={() => {
          const element = document.getElementById("Services");
          element.scrollIntoView({ behavior: "smooth" });
          hideMunu(false)
        }}>Services</p>
            <p className="hamburgerListItem"
            onClick={() => {
            const element = document.getElementById("Blog");
            element.scrollIntoView({ behavior: "smooth" });
            hideMunu(false)
          }}>Blogs</p>
            <p className="hamburgerListItem"
            onClick={() => {
            const element = document.getElementById("Achievements");
            element.scrollIntoView({ behavior: "smooth" });
            hideMunu(false)
          }}>Achievements</p>
            <p  className="hamburgerListItem"
            onClick={() => {
            const element = document.getElementById("Contact Us");
            element.scrollIntoView({ behavior: "smooth" });
            hideMunu(false)
          }}>Contact Us</p>
          

          </div>



        </div>
    );
}