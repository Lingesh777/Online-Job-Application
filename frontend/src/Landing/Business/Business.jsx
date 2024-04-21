import React, { useState, useEffect } from 'react';
import '../Business/Business.css';

const Business = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const businesses = [
    'nnacres',
    'jeevansathi',
    'ng',
    'shiksha',
    'iimjobs',
    'hirist',
    'jobhai',
    'techminis'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % businesses.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="business-carousel">
      {businesses.map((business, index) => (
        <div
          key={index}
          className={`business ${index === currentIndex ? 'active' : ''}`}
        >
          {business}
        </div>
      ))}
    </div>
  );
};

export default Business;
