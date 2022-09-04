import "./aboutUs.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import circleRight from "../../images/aboutUs/CIRCLERIGHT.png"
import circleLeft from "../../images/aboutUs/CIRCLELEFT.png"
import DANDZ from "../../images/aboutUs/DANDZ.png"
import { AiOutlineArrowRight } from 'react-icons/ai';

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
function AboutUs() {
  return (
    <div className="aboutUsMainDiv">
      <img src={circleLeft} style={{ float: "left" }} />
      <div className="gridAboutUS">
        <Grid className="grid1AboutUs" container spacing={3} >

          <Grid item xs={8} sm={5} >

            <h2 style={{ fontSize: "50px", color: "#bf186e" }}>About Us </h2>

            <p style={{ width: "70%" }}>
              We deliver high-quality, innovative, and cost-effective solutions for our clients worldwide. Our portfolio consists of top world startups that have grossed millions of dollars ranging in AI, Blockchain and Metaverse.

            </p>
            <p style={{ width: "70%" }}>
              Operating and booming with an excellent record of hundreds of local and international clients.
              Client satisfaction is our prime concern and to achieve this we use the latest generation technology and smart development skills to ensure in-time delivery

            </p>
            <p style={{ width: "70%" }}>
              Client satisfaction is our prime concern and to achieve this we use the latest generation technology and smart development skills to ensure in-time delivery

            </p>
            <ColorButton
              variant="contained"
              color="#661c9b"
              // className={classes.button}
              endIcon={<AiOutlineArrowRight />}
            >
              Read More
            </ColorButton>
            <img className="DZ_IMG" style={{ position: "relative", zIndex: "111" }} src={DANDZ} />


          </Grid>

        </Grid>
      </div>
      <img src={circleRight} style={{ float: "right", top: "-315px" }} />
    </div>
  );
}

export default AboutUs;
