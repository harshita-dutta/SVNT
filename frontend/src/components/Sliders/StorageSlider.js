import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from '../../images/Services/Sliders/s1.png'
import s2 from '../../images/Services/Sliders/s2.png'

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, 
    outline: false
  };

  const sliderStyle = {
    width: '35%', 
    margin: '0 auto',
    float: 'right'
  };

  return (
    <div className="slider-images">
      <Slider {...settings}>
        <div>
          <img src={s1} alt="" />
        </div>
        <div>
        <img src={s2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
