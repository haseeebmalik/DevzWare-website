import "./aboutUs.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import valueDrivenImg from "../../images/valueDriven/flying land.png"

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
      <Grid container spacing={3} style={{width:"100%"}}>
        
        <Grid className="grid1AboutUs" item xs={12} sm={6} >
          <h2>About Us </h2>
          
          <p style={{ width: "57%"}}>
            BlockChain solutions and Enterprise Service Providers, We are the
            market-leading industry providing you with the best possible
            technology solutions.
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
        endIcon={<AiOutlineArrowRight/>}
      >
        Read More
      </Button>
        </Grid>
        <Grid className="grid2AboutUs" item xs={12} sm={6} >
            <img src={valueDrivenImg}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;