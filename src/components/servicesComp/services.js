import "./services.css";
import Grid from "@material-ui/core/Grid";
import { green, purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import valueDrivenImg from "../../images/valueDriven/flying land.png";
import blockChainPic from "../../images/services/BLOCK_CHAIN.png";
import { AiFillApple } from "react-icons/ai";
import aiIcon from "../../images/services/icons/AI.png";
import blockchainIcon from "../../images/services/icons/blockchain.png";
import gameIcon from "../../images/services/icons/gameDev.png";
import softwareIcon from "../../images/services/icons/softwareDev.png";
import uiUx from "../../images/services/icons/uiUx.png";
import metaverse from "../../images/services/icons/metaverse.png";
import { Typography, Box, IconButton } from "@mui/material";
import { useTheme } from "@material-ui/core";
function Services() {
  const theme = useTheme();
  return (
    <Box className="services_wrapper" id="Services">
      <h2 className="service_title">Services</h2>
      <h2 className="service_sub_title">WHAT SERVICE WE OFFER</h2>
      <p className="services_des">
        We are leading the tech industry in software development, we offer
        solutions in Blockchain, Robotics, Artificial Intelligence, Big data,
        Cloud Computing, IoT, AR (Augmented Reality), and Extended Reality.
      </p>
      <Grid className="services_container" container spacing={3}>
        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={metaverse} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              MetaVerse Design {"&"} Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={blockchainIcon} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              BlockChain Development
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={softwareIcon} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              Artificial Intelligence
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={softwareIcon} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              Game Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={softwareIcon} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              Software Development
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={uiUx} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              Mobile Applications
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={aiIcon} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              Augmented / virtual reality development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className="itemGridService">
          <Box className="services_container_item">
            <IconButton className="servicesIconDiv">
              <img src={gameIcon} alt="" />
            </IconButton>
            <Typography variant="h5" color="#fff">
              UX / UI Design
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
