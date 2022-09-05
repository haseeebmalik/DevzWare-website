import "./aboutUs.css";
import { purple } from "@material-ui/core/colors";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import circleRight from "../../images/aboutUs/CIRCLERIGHT.png";
import circleLeft from "../../images/aboutUs/CIRCLELEFT.png";
import bggif from "../../images/aboutUs/about-us-section-image.gif";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReadMoreAboutUs from "./aboutUsReadMorePopUp";
import {useState} from "react"
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);
export default function AboutUs() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="aboutUsMainDiv" id={"About Us"}>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={circleLeft}
          style={{
            position: "absolute",
            top: "-132px",
            left: "29px",
            zIndex: "12",
            opacity: "0.5",
          }}
        />
        <Card
          sx={{
            width: "85%",
            position: "relative",
            backgroundColor: "transparent",
            borderRadius: "27px",
          }}
        >
          <CardMedia
            height="600px"
            src={bggif}
            component="img"
            sx={{ borderRadius: "25px", border: "none" }}
          />
          <div className="overly-content">
            <CardContent className="overlay_content_inner">
              <Typography
                variant="h3"
                color="#bf186e"
                sx={{ pb: 2, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                About Us
              </Typography>
              <p className="overlay_paragraph">
                We deliver high-quality, innovative, and cost-effective
                solutions for our clients worldwide. Our portfolio consists of
                top world startups that have grossed millions of dollars ranging
                in AI, Blockchain and Metaverse. Operating and booming with an
                excellent record of hundreds of local and international clients.
                Client satisfaction is our prime concern and to achieve this we
                use the latest generation technology and smart development
                skills to ensure in-time delivery.Client satisfaction is our
                prime concern and to achieve this we use the latest generation
                technology and smart development skills to ensure in-time
                delivery
              </p>

              <ColorButton
                variant="contained"
                color="#661c9b"
                endIcon={<AiOutlineArrowRight />}
                onClick={handleOpen}
              >
                Read More
              </ColorButton>
            </CardContent>
          </div>
        </Card>
        <img
          src={circleRight}
          style={{
            position: "absolute",
            bottom: "-137px",
            right: "18px",
            zIndex: "12",
            opacity: "0.5",
          }}
        />
      </Grid>
      {
                <ReadMoreAboutUs handleOpen={handleOpen} handleClose={handleClose} open={open} />
            }
    </div>
  );
}
