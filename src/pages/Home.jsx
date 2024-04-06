import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
  return (
    <Carousel autoPlay showStatus={false} showIndicators={false}>
      <div>
        <img alt="" src="./hero-1.jpg" width={1440} height={500} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="./hero-2.png" width={1440} height={500} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="./hero-3.png" width={1440} height={500} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="./hero-4.jpg" width={1440} height={500} />
        <p className="legend">Legend 4</p>
      </div>
    </Carousel>
  );
};

export default Home;
