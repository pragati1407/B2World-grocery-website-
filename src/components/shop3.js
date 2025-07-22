import React from 'react';
import '../App.css';

const boxes = [
  { title: 'VitaminC', image: '/images/vitaminc.png' },
  { title: 'Calcium', image: '/images/calcium.png' },
  { title: 'ChiaSeeds ', image: '/images/chia.png' },
   { title: 'Medicine', image: '/images/medicine.png' },
    
  
];

const ShopSection = () => {
  return (
    <div className="shop-section">
      <h1 className="shop-heading">Wellness & Medicines at Best Prices</h1>
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
