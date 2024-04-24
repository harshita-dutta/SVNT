import React from 'react';
import adityabirla from '../images/Home/aditya-birla.jpg';
import vedanta from '../images/Home/vedanta.jpg';
import '../css/about.css';
import ITC from '../images/Home/itc.png';
import gm from '../images/Home/gm.png';
import ceo from '../images/AboutUs/ceo-image.png';
import '../css/slider.css';
import Managers from '../components/Managers';
import aboutbg from '../images/AboutUs/about-bg.jpg'
import TimeLine from '../components/Timeline'


export const About = () => {
  return (
    <div className="about-us-page">

      <div className="about-us-head">
        <img className='about-img' src={aboutbg} style={{ height: '100%', width: '100vw', objectFit: 'scale-down', marginTop: '1rem' }} alt="" />
        <p className="about-us-head-name">
          Integrated Solutions,
          <br /> Empowered Choices
        </p>
        <p className="about-us-head-name1">We are the Blueprint</p>
      </div>
      <div className="svnt-info">
        Established in 2003, SVNT Infotech Pvt Ltd set out on a mission to revolutionize IT infrastructure solutions.
        Our philosophy is to combine international technology with local expertise to tailor solutions to clients needs. Driven by excellence, we aim to lead the global market in networking and communication solutions.
      </div>

      {/* <div className="company-timeline">
        <h1>Company Timeline</h1>

        <svg className='divider' width="1455" height="60" viewBox="0 0 1455 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" transform="rotate(-90 30 30)" fill="#251741" />
          <circle cx="495" cy="30" r="30" transform="rotate(-90 495 30)" fill="#251741" />
          <circle cx="960" cy="30" r="30" transform="rotate(-90 960 30)" fill="#251741" />
          <circle cx="1425" cy="30" r="30" transform="rotate(-90 1425 30)" fill="#251741" />
          <line x1="60" y1="30" x2="465" y2="30" stroke="#251741" stroke-width="2" />
          <line x1="525" y1="30" x2="945" y2="30" stroke="#251741" stroke-width="2" />
          <line x1="990" y1="30" x2="1420" y2="30" stroke="#251741" stroke-width="2" />
        </svg>

        <div className='d-flex divider'>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="d-flex timeline-1">
          <div className="d-flex flex-column p-4">
            <div>
              <span style={{ fontSize: '38px' }}>2000 - 2003</span>
              <br />
              <span style={{ fontSize: '32px' }}>Company Spinout</span>
              <br />
              <span style={{ fontSize: '22px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
            <div></div>
          </div>

          <div className="d-flex flex-column p-4">
            <div style={{ paddingTop: '20rem' }}></div>
            <div>
              <span style={{ fontSize: '38px' }}>2000 - 2003</span>
              <br />
              <span style={{ fontSize: '32px' }}>Company Spinout</span>
              <br />
              <span style={{ fontSize: '22px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
          </div>
          <div className="d-flex flex-column p-4">
            <div>
              <span style={{ fontSize: '38px' }}>2000 - 2003</span>
              <br />
              <span style={{ fontSize: '32px' }}>Company Spinout</span>
              <br />
              <span style={{ fontSize: '22px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <TimeLine/>

      <div className="ceo d-flex">
        <div className="ceo-text">
          <h1 className="fs-1 ceo-text-head">Meet Our Managing Director </h1>
          <p className="ceo-text-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. nisi ut aliquip exmmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
          </p>
        </div>
        <div className="ceo-photo">
          <img className='ceo-photo-1' src={ceo} alt="" />
        </div>
      </div>

      <Managers />
      <div className="slides">
        <div class="slider">
          <div class="slide-track">
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={adityabirla} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
          </div>
        </div>
        {/* <br />
        <br />
        <br /> */}
        <div class="slider">
          <div class="slide-track">
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={ITC} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};