import React from 'react';
import './Indicator.css';

const Indicator = ({ items = [], counter }) => {
  return (
    <div className='indicators'>
      {items.map((_, index) => (
        <div key={index} className={`indicator ${counter === index ? 'active' : ''}`}></div>
      ))}
    </div>
  );
};

export default Indicator;
