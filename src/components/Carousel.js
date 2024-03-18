import React from 'react';
import ips from '../images/ips.png';
import ipn from '../images/ipn.png';
import str from '../images/str.png';
import sms from '../images/sms';
import is from '../images/is.png';
import sss from '../images/sss';
import avs from '../images/avs.png';
import es from '../images/es.png';
function CaseStudiesCarousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card-1">
            <img src={ips} alt="" />
            <div className="card-content">
              <h2>Genpact</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-1">
            <img src={ipn} alt="" />
            <div className="card-content">
              <h2>BIAL</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-1">
            <img src={str} alt="" />
            <div className="card-content">
              <h2>ITC Hotels</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-1">
            <img src={sms} alt="" />
            <div className="card-content">
              <h2>Card Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-1">
            <img src={is} alt="" />
            <div className="card-content">
              <h2>Card Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-1">
            <img src={sss} alt="" />
            <div className="card-content">
              <h2>Card Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-1">
            <img src={avs} alt="" />
            <div className="card-content">
              <h2>Card Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-1">
            <img src={es} alt="" />
            <div className="card-content">
              <h2>Card Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <a href="" className='readmore'>Read More</a>

            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default CaseStudiesCarousel;
