import "./ensuringFuture.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import valueDrivenImg from "../../images/valueDriven/flying land.png"
import { AiOutlineArrowRight } from 'react-icons/ai';
import blockChainChain from "../../images/ensuringFuture/BLOCK_CHAIN CHAIN.png"
import dImg from "../../images/ensuringFuture/D.png"

import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);
function ValueDriven() {
  return (
    <div className="valueDrivenMainDiv">
      <img style={{ width: "100%", position: "absolute" }} src={blockChainChain} />



      <div className="insuringFutureInnerDiv" >
        <Grid className="ensuringFutureInnerDiv2" container spacing={3} >

          <Grid className=" " item xs={8} sm={5} >
            <div >
            <h3 style={{fontSize:"50px", marginTop:"35px",marginBottom:"5px"}}>Ensuring Future</h3>
              <h2 style={{fontSize:"50px",color:"#bf186e"}}>Vision Driven </h2>
              <h2 style={{fontSize:"15px"}}>ENTERPRISE / CUSTOMER / IDEAS / START UP</h2>
              <h2 style={{fontSize:"15px"}}>BASED SOLUTIONS</h2>
              <p style={{ width: "57%" }}>
                Providing Expert Solutions Around The world
                Collaborate With Expets In Ai, Blockchain,
                CyberSpace And Metaverse..
              </p>
              <ColorButton
                variant="contained"
                color="#661c9b"
                endIcon={<AiOutlineArrowRight />}
                className="ensuringFutureButton"

              >
                Get Started Now

              </ColorButton>
            </div>
          </Grid>
          <Grid item xs={8} sm={5} >
            <img style={{width:"80%",height:"30%"}} src={dImg} />
          </Grid>
        </Grid>
      </div>



    </div>
  );
}

export default ValueDriven;
