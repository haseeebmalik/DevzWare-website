import "./services.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import valueDrivenImg from "../../images/valueDriven/flying land.png";
import blockChainPic from "../../images/services/BLOCK_CHAIN.png"
import { AiFillApple } from "react-icons/ai";
import aiIcon from "../../images/services/icons/AI.png";
import blockchainIcon from "../../images/services/icons/blockchain.png"
import gameIcon from "../../images/services/icons/gameDev.png"
import softwareIcon from "../../images/services/icons/softwareDev.png"
import uiUx from "../../images/services/icons/uiUx.png"
import metaverse from "../../images/services/icons/metaverse.png"






import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

function Services() {
  return (
    <div className="servicesMainDiv">
      <h3 style={{ textAlign: "center" }}>Services</h3>
      <img style={{ position: "absolute", width: "100%" }} src={blockChainPic} />
      <Grid
        className="ContainerGridServive"
        container
        spacing={3}

      >

        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div className="servicesIconDiv">
            <img src={metaverse} />{" "}
          </div>
          <p>MetaVerse Design {"&"} Development</p>
        </Grid>
        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div className="servicesIconDiv">
            <img src={blockchainIcon} />{" "}
          </div>
          <p>BlockChain Development</p>
        </Grid>



        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div className="servicesIconDiv">
            <img src={uiUx} />{" "}
          </div>
          <p>MetaVerse Design {"&"} Development</p>
        </Grid>
        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div className="servicesIconDiv">
            <img src={aiIcon} />{" "}
          </div>
          <p>BlockChain Development</p>
        </Grid>



        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div className="servicesIconDiv">
            <img src={gameIcon} />{" "}
          </div>
          <p>MetaVerse Design {"&"} Development</p>
        </Grid>
        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div className="servicesIconDiv">
            <img src={softwareIcon} />{" "}
          </div>
          <p>BlockChain Development</p>
        </Grid>
      </Grid>

    </div>
  );
}

export default Services;
