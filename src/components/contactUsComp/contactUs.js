import { useState } from "react";
import "./contactUs.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import ContactUsModel from "./contactUsModel";
import { AiOutlineArrowRight } from "react-icons/ai";
import contactUsImg from "../../images/contactUsImg/contactUsImg.png";

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
function ContactUs() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="contactUsMainDiv" id="Contact Us">
      <img
        style={{
          position: "absolute",
          left: "19%",

          height: "34vh",
          width: "53%",
        }}
        src={contactUsImg}
      />
      <Grid className="ContainerGridContactUs" container spacing={3}>
        <Grid className="itemGridContactUs" item xs={10} sm={5} lg={5}>
          <h2>Want to know more, Contact us and Start Your Project</h2>
          <p>
            Let us Know your requirements and our representative will be in in
            contact within 24 hours. We care about your privacy and agree to
            have upmost professionalism.This site is protected by reCAPTCHA and
            the Google Privacy Policy and Terms of Service apply.
          </p>
          <ColorButton
            onClick={handleOpen}
            style={{ marginTop: "3vw" }}
            variant="contained"
            color="primary"
            // className={classes.margin}
            endIcon={<AiOutlineArrowRight />}
          >
            Get Started Now
          </ColorButton>
        </Grid>
      </Grid>

      {
        <ContactUsModel
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
      }
    </div>
  );
}

export default ContactUs;
