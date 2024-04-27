import React,{useEffect} from 'react';
import img1 from '../images/Home/ITC-Limited.svg'
import img2 from '../images/Home/aditya-birla.svg'
import img3 from '../images/Home/AEQUS.svg'
import img4 from '../images/Home/Ampath.svg'
import img5 from '../images/Home/Bharat-electronics.svg'
import img6 from '../images/Home/gm.svg'
import img7 from '../images/Home/AFiO.svg'
import img8 from '../images/Home/AKN.svg'
import img9 from '../images/Home/Allergen.svg'
import img10 from '../images/Home/Brigade.svg'
import img11 from '../images/Home/gd-waldener.svg'
import img12 from '../images/Home/gsl-steel-limited.svg'
import img13 from '../images/Home/heidelbergCement.svg'
import img14 from '../images/Home/indigo.svg'
import img15 from '../images/Home/Zuari-cement.svg'
import img16 from '../images/Home/KempegodwaIA.svg'
import img17 from '../images/Home/CAIRN.svg'
import img18 from '../images/Home/Brigade.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Clientele() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);
  return (
    <>
      <h1 className='clientele' >Clientele</h1>
      <div className="trusted">
        <div className="trustedtext">

          <p data-aos='fade-right'>
          Our most invaluable resource lies within our people, and it is collaboration that sparks the best ideas into life.
          </p>
        </div>

        <section id="slideshow" data-aos='fade-left'>
          <div class="entire-content">
            <div class="content-carrousel">
              <figure class="shadow"><img src={img1} /></figure>
              <figure class="shadow"><img src={img2} /></figure>
              <figure class="shadow"><img src={img3} /></figure>
              <figure class="shadow"><img src={img4} /></figure>
              <figure class="shadow"><img src={img5} /></figure>
              <figure class="shadow"><img src={img6} /></figure>
              <figure class="shadow"><img src={img7} /></figure>
              <figure class="shadow"><img src={img8} /></figure>
              <figure class="shadow"><img src={img9} /></figure>
              <figure class="shadow"><img src={img10} /></figure>
              <figure class="shadow"><img src={img11} /></figure>
              <figure class="shadow"><img src={img12} /></figure>
              <figure class="shadow"><img src={img13} /></figure>
              <figure class="shadow"><img src={img14} /></figure>
              <figure class="shadow"><img src={img15} /></figure>
              <figure class="shadow"><img src={img16} /></figure>
              <figure class="shadow"><img src={img17} /></figure>
              <figure class="shadow"><img src={img18} /></figure>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
