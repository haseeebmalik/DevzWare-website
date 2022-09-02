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
              <h2>Value Driven </h2>
              <h2>SOFTWARE DEVELOPMENT :</h2>
              <p style={{ width: "57%" }}>
                BlockChain solutions and Enterprise Service Providers, We are the
                market-leading industry providing you with the best possible
                technology solutions.
              </p>
              <ColorButton
                variant="contained"
                color="primary"
                // className={classes.margin}
                endIcon={<AiOutlineArrowRight />}
                className="ensuringFutureButton"

              >
                Get Started Now

              </ColorButton>
            </div>
          </Grid>
          <Grid item xs={8} sm={5} >
            <img style={{width:"58%",height:"30%"}} src={dImg} />
          </Grid>
        </Grid>
      </div>



    </div>
  );
}

export default ValueDriven;
