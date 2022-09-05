import "./footer.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../images/footer/SMALL_LOGO.png";
import fb from "../../images/footer/SOCIAL MEDIA ICON/facebook.png";
import discord from "../../images/footer/SOCIAL MEDIA ICON/discord.png";
import insta from "../../images/footer/SOCIAL MEDIA ICON/Instagram.png";
import linkedIn from "../../images/footer/SOCIAL MEDIA ICON/LinkedIn.png";
import twitter from "../../images/footer/SOCIAL MEDIA ICON/twitter.png";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";

import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
const styles = {
  root: {
    background: "black",
  },
  input: {
    color: "#2EFF22",
  },
};
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

function Footer(props) {
  const { classes } = props;

  return (
    <div className="footerMainDiv">
      <Grid className="ContainerGridfooter" container spacing={3}>
        <Grid className="itemGridfooter" item xs={12} sm={6} lg={3}>
          <img src={logo} />
          <p style={{ textAlign: "center" }}>
            Become the best, with these recommendations.
          </p>
          <p>Reference site above.</p>
          <p>&copy; 2022 Devzware. All rights reserved</p>
          <div className="socialMediaIconsDiv">
            <img src={fb} />
            <img src={insta} />
            <img src={linkedIn} />
            <img src={twitter} />
            <img src={discord} />
          </div>
        </Grid>
        <Grid className="itemGridfooter" item xs={12} sm={6} lg={3}>
          <p>Support</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Blog</p>
        </Grid>
        <Grid className="itemGridfooter" item xs={12} sm={6} lg={3}>
          <p>Achivement</p>
          <p>Contact Us</p>
        </Grid>
        <Grid className="itemGridfooter" item xs={12} sm={6} lg={3}>
          <p>Stay up to date on the latest from devzware</p>

          {/* <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                       
                        
                        autoFocus
                    /> */}

          <TextField
            label="Email"
            variant="filled"
            color="success"
            focused
            InputProps={{ inputProps: { style: { color: "#fff" } } }}
          />

          <ColorButton
            style={{ marginTop: "3vw" }}
            variant="contained"
            color="primary"
            // className={classes.margin}
          >
            Get Started Now
          </ColorButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
