import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import is1 from '../../images/Services/Sliders/is1.png'
import is2 from '../../images/Services/Sliders/is2.png'

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const sliderStyle = {
    width: '30%',
    margin: '0 auto'
  };

  return (
    <div className="slider-container" style={sliderStyle}>
      <Slider {...settings}>
        <div>
          <img style={{ width: '100%' }} src={is1} alt="" />
        </div>
        <div>
          <img style={{ width: '100%' }} src={is2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
