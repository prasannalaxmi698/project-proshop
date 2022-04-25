import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <div className="container-slider">
            <div className="productInfo">
              <p>iPhone 11 Pro 256GB Memory ($599.99)</p>
            </div>
            <div className="slider-productInfo">
              <img src="./images/airpods.jpg" alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-slider">
            <div className="productInfo">
              <p>Airpods Wireless Bluetooth Headphones ($89.99)</p>
            </div>
            <div className="slider-productInfo">
              <img src="../images/phone.jpg" alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-slider">
            <div className="productInfo">
              <p>Cannon EOS 80D DSLR Camera ($929.99)</p>
            </div>
            <div className="slider-productInfo">
              <img src="../images/camera.jpg" alt="" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
