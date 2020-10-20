import React from 'react';
import './HomeStyle.css';
import kredi from '../_Image/kredi.jpg';

export default function Home() {
  return (
    <div>
      <img src={kredi} className="kredi" />
      <div className="parallax home_img_one">Ən çox baxılan modellər</div>
      <div className="homecard_list">
          <div className="homecard card1"></div>
          <div className="homecard card2"></div>
          <div className="homecard card3"></div>
          <div className="homecard card4"></div>
      </div>
      <div className="parallax home_img_two"></div>
    </div>
    
  )
}
