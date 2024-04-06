import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const MainCarousel = () => {
  return (
    <Carousel autoPlay showStatus={false} showIndicators={false}>
      <div>
        <img alt="" src="./hero-1.jpg" width={1440} height={500} />
      </div>
      <div>
        <img alt="" src="./hero-2.png" width={1440} height={500} />
      </div>
      <div>
        <img alt="" src="./hero-3.png" width={1440} height={500} />
      </div>
      <div>
        <img alt="" src="./hero-4.jpg" width={1440} height={500} />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
