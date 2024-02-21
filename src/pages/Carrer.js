import React from "react";
import career from '../images/careerimage.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import invite from '../images/invite.png'
import { FaAnglesRight } from "react-icons/fa6";

const DomainCard = ({ imgSrc, title, description }) => (
  <div className="d-flex justify-content-center mb-3">
    <div className="p-2">
      <img style={{width: '80%'}} src={imgSrc} alt="" />
    </div>
    <div className="p-2 text-start">
      <h4 >{title}</h4>
      <p style={{}}>{description}</p>
    </div>
  </div>
);
export const CareersPage = () => {
  return (
    <div className="careers-page">
      <div className="career-start">
        <div className="career-image">

          <img src={career} style={{ maxWidth: '100%' }} alt="" />
          <div className="image-text"></div>
          <div className="career-text1">
            Empower your <br/>aspirations at SVNT Infotech!
          </div>
          <div className="career-text2">
            We believe in your Ideas, We believe in You
          </div>
        </div>
        <div className="domain">
          <h1 className="domain-head mt-5 fw-bold">Shape our Future Together!</h1>
          <p className="domain-text mt-3">With over 32 locations, SVNT presents limitless prospects while fostering growth,<br/> leadership, innovation, and showing appreciation for its dedicated workforce.</p>
          <div className="d-flex" style={{marginTop:'50px', marginLeft: '200px', marginRight: '200px'}}>
            <DomainCard imgSrc={img1} title="Continuous Learning" description="We empower our dedicated experts to craft their own success journeys." />
            <DomainCard imgSrc={img2} title="Diverse Domain Experience" description="As a tech leader, our diverse teams foster learning from industry experts." />
          </div>
          <div className="d-flex" style={{marginLeft: '200px', marginRight: '200px'}}>
            <DomainCard imgSrc={img3} title="Rewards and Recognition" description="We acknowledge and reward our employees' exceptional dedication and performance." />
            <DomainCard imgSrc={img4} title="Global Careers" description="Our global customer base offers diverse career growth opportunities worldwide." />
          </div>
          <div className="d-flex" style={{marginLeft: '200px', marginRight: '200px'}}>
            <DomainCard imgSrc={img5} title="Diversity and Inclusion" description="We celebrate diversity of thought, cultures, backgrounds, and perspectives, strengthening us." />
            <DomainCard imgSrc={img6} title="Health and Wellness" description="We prioritize employees' health with comprehensive medical plans and benefits." />
          </div>
        </div>
        <div className="jobs">
          <div className="jobs1 justify-content-center d-flex flex-row mb-5" style={{ gap: '50px' }}>
            {[1, 2, 3].map((index) => (
              <div key={index} className="card card1">
                <div className="card-body">
                  <h5 className="card-title">564 - Senior Software Engineer</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Pune (On Site)</h6>
                  <a href="*/" className="card-link">Apply Now &rarr;</a>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-content-center d-flex flex-row" style={{ gap: '50px' }}>
            {[4, 5, 6].map((index) => (
              <div key={index} className="card card1">
                <div className="card-body">
                  <p className="card-title">564 - Senior Software Engineer</p>
                  <p className="card-subtitle mb-2 text-body-secondary">Pune (On Site)</p>
                  <a href="*/" className="card-link">Apply Now &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex flex-row invite">
          <div>
            <img style={{ maxWidth: '100%' }} src={invite} alt="" />
          </div>
          <div>
            <h1 style={{ color: '#0F2F64', fontWeight: '600' }}>We invite you to join us.</h1>
            <p>If you have innovative ideas and a genuine passion to<br /> execute them at an organization that will provide you with<br /> boundless, diverse, and profound experiences.</p>
            <button className="view-jobs d-flex justify-content-center">VIEW JOBS <span><FaAnglesRight /></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};
