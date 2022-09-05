import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blogImg from "../../images/blog/blogImg.png";
import "./blog.css";

function Blog() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="blogMainDiv">
      <h3 style={{ textAlign: "center", color: "#BF186E", fontSize: "30px" }}>
        Blogs
      </h3>
      <Carousel
        className="courselMainDiv"
        responsive={responsive}
        style={{ height: "49vh}" }}
      >
        <div className="courselItem">
          <img src={blogImg} />
          <div style={{ color: "white" }}>
            BlockChain Technology and economic development
          </div>
        </div>
        <div className="courselItem">
          <img src={blogImg} />
          <div style={{ color: "white" }}>
            BlockChain Technology and economic development
          </div>
        </div>
        <div className="courselItem">
          <img src={blogImg} />
          <div style={{ color: "white" }}>
            BlockChain Technology and economic development
          </div>
        </div>
        <div className="courselItem">
          <img src={blogImg} />
          <div>BlockChain Technology and economic development</div>
        </div>
        <div className="courselItem">
          <img src={blogImg} />
          <div>BlockChain Technology and economic development</div>
        </div>
      </Carousel>
    </div>
  );
}
export default Blog;
