import React from 'react';
import '../App.css';

const boxes = [
  { title: 'Pooja', image: '/images/agarbati.png' },
  { title: 'Detergent', image: '/images/detergent.png' },
  { title: 'Air Freshner ', image: '/images/odonil.png' },
   { title: 'Napkins', image: '/images/napkin.png' },
    
  
];

const ShopSection = () => {
  return (
    <div className="shop-section">
      <h1 className="shop-heading">Everyday Home Needs, Special Offers</h1>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div className={`box box${index + 1}`} key={index}>
            <div className="box-content">
              <h2>{box.title}</h2>
              <img src={box.image} className="img-fluid" alt={box.title} />
              <p>See more</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
