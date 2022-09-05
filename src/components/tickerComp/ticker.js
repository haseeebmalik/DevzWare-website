import "./ticker.css"
import IGlogo from "../../images/Ticker/IGlogo.png"
import ignite from "../../images/Ticker/ignite.png"
import lavax from "../../images/Ticker/lavax-labs.png"
import NG from "../../images/Ticker/NG-PAY.png"
import Walahala from "../../images/Ticker/Walahala.png"
// import IGlogo from "../../images/Ticker/IGlogo.png"
import Marquee from "react-fast-marquee";
function Ticker(){
   return(
    <Marquee className="tickerMainDiv" pauseOnHover="true">
     <img src={IGlogo}/>
  </Marquee>
   ) 
}
export default Ticker 