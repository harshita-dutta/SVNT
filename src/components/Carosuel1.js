import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../css/card.css';
import image1 from '../images/carousel-image1.png';
import image2 from '../images/carousel-image2.png';
import image3 from '../images/carousel-image3.png';
import image4 from '../images/carousel-image4.png';

const cards = [
  {
    id: 1,
    image: image1,
    text: 'To infinity and beyond!One small step for man, One giant leap for mankind Joining forces with ISRO',
  },
  {
    id: 2,
    image: image2,
    text: 'Sky High! See firsthand our collaborative efforts to provide advances surveillance solutions at Kempagowda International Airport',
  },
  { id: 3, image: image3, text: 'Behind the Scenes: Our Role in Safeguarding ITC Royal Bengal' },
  { id: 4, image: image4, text: 'Nestled in the Heart of Hyderabad, where Innovation Meets Culture' },
  {
    id: 5,
    image: image1,
    text: 'To infinity and beyond!One small step for man, One giant leap for mankind Joining forces with ISRO',
  },
  {
    id: 6,
    image: image2,
    text: 'Sky High! See firsthand our collaborative efforts to provide advances surveillance solutions at Kempagowda International Airport',
  },
];

function Carosuel1({ currentImage }) {
  const [selected, setSelected] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="outer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container10">
        <div
          className="carousellll"
          style={{
            transform: `translate(${selected * (-57 / cards.length)}%)`,
          }}
        >
          {cards.map((card, i) => (
            <Card key={card.id} current={i === selected} image={card.image} text={card.text} />
          ))}
        </div>
        {isHovered && (
          <>
            <div
              className="left-button"
              onClick={() => {
                setSelected((s) => {
                  if (s === 0) return cards.length - 1;
                  return s - 1;
                });
              }}
            >
            </div>
            <div
              className="right-button"
              onClick={() => {
                setSelected((s) => (s + 1) % cards.length);
              }}
            >
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carosuel1;
