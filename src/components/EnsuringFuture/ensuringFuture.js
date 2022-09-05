import "./ensuringFuture.css";
import { Grid, Box, Typography } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import valueDrivenImg from "../../images/valueDriven/flying land.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import blockChainChain from "../../images/ensuringFuture/BLOCK_CHAIN CHAIN.png";
import dImg from "../../images/ensuringFuture/D.png";
import { withStyles } from "@material-ui/core/styles";

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
    <Box className="value_driven_container" id="Home">
      <Grid className="value_driven_inner_container" container>
        <Grid item xs={12} sm={12} lg={6}>
          <h2 className="insuring_title">Ensuring Future</h2>
          <h3 className="insuring_vision">Vision Driven</h3>
          <h2 className="insuring_subtitle">
            ENTERPRISE / CUSTOMER / IDEAS / START UP
          </h2>
          <h2 className="insuring_subtitle">BASED SOLUTIONS</h2>
          <p className="insuring_des">
            Providing Expert Solutions Around The world Collaborate With Expets
            In Ai, Blockchain, CyberSpace And Metaverse..
          </p>
          <ColorButton
            variant="contained"
            color="#661c9b"
            endIcon={<AiOutlineArrowRight />}
            className="ensuringFutureButton"
            onClick={()=>{
             let element = document.getElementById("About Us");
          element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started Now
          </ColorButton>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <img className="insuring_d" src={dImg} alt="" />
          {/* style={{ width: "80%", height: "30%" }} */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ValueDriven;
