import React from 'react';
import './HomeStyle.css';
import kredi from '../_Image/kredi.jpg';

export default function Home() {
  return (
    <div>
      <img src={kredi} className="KrediImg" />
      <div className="parallax HomeImgParallaxOne">Ən çox baxılan modellər</div>
      <div className="HomecardImgList">
          <div className="Homecard card1"></div>
          <div className="Homecard card2"></div>
          <div className="Homecard card3"></div>
          <div className="Homecard card4"></div>
      </div>
      <div className="parallax HomeImgParallaxTwo"></div>
    </div>
    
  )
}
