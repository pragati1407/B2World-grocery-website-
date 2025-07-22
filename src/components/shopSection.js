import React from 'react';
import '../App.css';

const boxes = [
  { title: 'FoodGrain, Oil,Ghee', image: '/images/oil.png' },
  { title: 'Cooking Masala Spices', image: '/images/spices.png' },
  { title: 'Organic Rnge of Pulses, flour ', image: '/images/grain.png' },
   { title: 'Organic Rnge of Pulses, flour ', image: '/images/grain.png' },
    
  
];

const ShopSection = () => {
  return (
    <div className="shop-section">
      <h1 className="shop-heading">We Offer Food Zone</h1>
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
