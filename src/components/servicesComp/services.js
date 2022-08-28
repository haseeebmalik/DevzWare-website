import "./services.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import valueDrivenImg from "../../images/valueDriven/flying land.png";

import { AiFillApple } from "react-icons/ai";

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
      <Grid
      className="ContainerGridServive"
        container
        spacing={3}
       
      >
        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div>
            <AiFillApple />{" "}
          </div>
          <p>MetaVerse Design {"&"} Development</p>
        </Grid>
        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div>
            <AiFillApple />{" "}
          </div>
          <p>BlockChain Development</p>
        </Grid>



        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div>
            <AiFillApple />{" "}
          </div>
          <p>MetaVerse Design {"&"} Development</p>
        </Grid>
        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div>
            <AiFillApple />{" "}
          </div>
          <p>BlockChain Development</p>
        </Grid>



        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div>
            <AiFillApple />{" "}
          </div>
          <p>MetaVerse Design {"&"} Development</p>
        </Grid>
        <Grid className="itemGridService" item xs={10} sm={5} lg={5}>
          <div>
            <AiFillApple />{" "}
          </div>
          <p>BlockChain Development</p>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Services;
