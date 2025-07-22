import React from 'react';
import '../App.css';

const boxes = [
  { title: 'Shampoo', image: '/images/shampoo.png' },
  { title: 'Oral Care', image: '/images/oralcare.png' },
  { title: 'Women Napkins ', image: '/images/pad.png' },
   { title: 'Men Product ', image: '/images/nivea.png' },
    
  
];

const ShopSection = () => {
  return (
    <div className="shop-section">
      <h1 className="shop-heading">Personal Care Discount Hub</h1>
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
