import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/svnt-logo-white-full.png';
import '../css/caseStudies.css';
import bghero from '../images/CaseStudies/bg-hero.png';
import CaseStudyCard from '../components/CaseStudyCard';
import comingSoon from '../images/CaseStudies/coming-soon-bg.png'

export default function CaseStudies() {
  return (
    <div className='cs-body'>
      <Link className="logo-brand" to="/">
          <img src={Logo} alt="SVNT Tech" height={30} />
        </Link>
      <div className='cs-hero'>
        <div>
          <img className="cs-hero-bg" src={bghero} alt="" />
          <p className='image-text'>Empower your aspirations <br />at SVNT Infotech!</p>
        </div>
      </div>

      <div className='cs-main'>
        <div className='cs-search-bar'>
          <div><p>Gain a deeper insight into our Case Studies</p></div>
      </div>
        {/* for the entire cs-set section create another component and apply the framer motion code*/}
      <CaseStudyCard />
      </div>
      <div className='coming-soon'>
        <img src={comingSoon} />
      </div>
        
    </div>
  )
}
