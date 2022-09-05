import  React,{useState} from 'react';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./OnMobileHeaderMenu.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect } from 'react';





export default function LongMenu() {

  const [showMenu,hideMenu]=useState(false)
  //This use effect is for if we click outside the menu ,the menu will disappear like a popup
useEffect(()=>{

  document.addEventListener('click', function handleClickOutsideBox(event) {
   
    
  
    const box = document.getElementById('longMenuMainDivId');
  
    if (!box.contains(event.target)) {
      hideMenu(false)
    }
  });
},[])
    return (
        <div id="longMenuMainDivId" className='longMenuMainDiv' style={{color:"white"}}>
          <GiHamburgerMenu style={{color:"white"}} onClick={()=>{
             hideMenu(!showMenu)
          }}/>

          <div id="hamburgerInnerId" className={showMenu!==true?"hide":"hamburgerInnerDiv"}>
            <p className="hamburgerListItem"
               onClick={() => {
                const element = document.getElementById("Home");
                element.scrollIntoView({ behavior: "smooth" });
                hideMenu(false)
              }}
            >Home</p>
            <p className="hamburgerListItem"
            onClick={() => {
          const element = document.getElementById("About Us");
          element.scrollIntoView({ behavior: "smooth" });
          hideMenu(false)
        }}>About Us</p>
            <p className="hamburgerListItem"
            onClick={() => {
          const element = document.getElementById("Services");
          element.scrollIntoView({ behavior: "smooth" });
          hideMenu(false)
        }}>Services</p>
            <p className="hamburgerListItem"
            onClick={() => {
            const element = document.getElementById("Blog");
            element.scrollIntoView({ behavior: "smooth" });
            hideMenu(false)
          }}>Blogs</p>
            <p className="hamburgerListItem"
            onClick={() => {
            const element = document.getElementById("Achievements");
            element.scrollIntoView({ behavior: "smooth" });
            hideMenu(false)
          }}>Achievements</p>
            <p  className="hamburgerListItem"
            onClick={() => {
            const element = document.getElementById("Contact Us");
            element.scrollIntoView({ behavior: "smooth" });
            hideMenu(false)
          }}>Contact Us</p>
          

          </div>



        </div>
    );
}