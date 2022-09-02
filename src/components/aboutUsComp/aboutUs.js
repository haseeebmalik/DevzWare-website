import "./aboutUs.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import valueDrivenImg from "../../images/valueDriven/flying land.png"
import circle from "../../images/aboutUs/CIRCLE.png"
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
      <Grid container spacing={3} style={{ width: "100%" }}>

        <Grid className="grid1AboutUs" item xs={8} sm={8} >
          <img src={circle} />
          {/* <div className="grid1AboutUsDiv1">

          </div> */}
          <div className="grid1AboutUsDiv2">
            <div className="grid1AboutUsDiv2InnerDiv1">
            <h2>About Us </h2>

            <p style={{ width: "57%" }}>
            We deliver high-quality, innovative, and cost-effective solutions for our clients worldwide. Our portfolio consists of top world startups that have grossed millions of dollars ranging in AI, Blockchain and Metaverse. Operating and booming with an excellent record of hundreds of local and international clients. Client satisfaction is our prime concern and to achieve this we use the latest generation technology and smart development skills to ensure in-time delivery
            </p>
            {/* <ColorButton
            variant="contained"
            color="primary"
            endIcon={ArrowForwardIcon}
            // className={classes.margin}
          >
            Read More 
          </ColorButton> */}
            <Button
              variant="contained"
              color="secondary"
              // className={classes.button}
              endIcon={<AiOutlineArrowRight />}
            >
              Read More
            </Button>
            </div>
            <img className="DZ_IMG" style={{position:"relative", zIndex:"111"}} src={DANDZ}/>
          </div>
          <img src={circle} />

        </Grid>

      </Grid>
    </div>
  );
}

export default AboutUs;