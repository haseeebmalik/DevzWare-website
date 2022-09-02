import "./ticker.css"
import Marquee from "react-fast-marquee";
function Ticker(){
   return(
    <Marquee className="tickerMainDiv" pauseOnHover="true">
     <p style={{marginRight:"50px", color:"white"}}>jazeera</p>
     <p style={{marginRight:"50px", color:"white"}}>ZONG</p>
     <p style={{marginRight:"50px", color:"white"}}>Telenor</p>
     <p style={{marginRight:"50px", color:"white"}}>Meezan Bank</p>
     <p style={{marginRight:"50px", color:"white"}}>Allied Bank</p>
     <p style={{marginRight:"50px", color:"white"}}>HBL</p>
  </Marquee>
   ) 
}
export default Ticker 