import "./achivement.css";
import Grid from "@material-ui/core/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleImageSlider from "react-simple-image-slider";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img from "../../images/achivement/flying_land.png"
import tree from "../../images/achivement/tree.jpg"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Achivement() {
   
   
  return (
    <div className="achivementMainDiv">
      <h3 style={{ textAlign: "center", color:"white"}}>Achivements</h3>
      <Grid
      className="ContainerGridAchivement"
        container
        spacing={3}
       
      >
        <Grid className="itemGridAchivement" item xs={10} sm={5} lg={5}>
       
        <Carousel autoPlay={true}>
                <div>
                    <img src={tree} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={tree} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={tree} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </Grid>
       

      </Grid>
      
    </div>
  );
}

export default Achivement;
