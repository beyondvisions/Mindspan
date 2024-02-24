import React, { useState, useEffect } from 'react';
import './Dropdown.css';

const Dropdownn = ({ categories, lab, lab1, lab2, lab3 }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [governorates, setGovernorates] = useState([
    { name: 'Ariana' }, 
    { name: 'Beja' }, 
    { name: 'Ben Arous' }, 
    { name: 'Bizerte' }, 
    { name: 'Gabes' }, 
    { name: 'Gafsa' }, 
    { name: 'Jendouba' }, 
    { name: 'Kairouan' }, 
    { name: 'Kasserine' }, 
    { name: 'Kebili' }, 
    { name: 'Le Kef' }, 
    { name: 'Mahdia' }, 
    { name: 'Manouba' }, 
    { name: 'Medenine' }, 
    { name: 'Monastir' }, 
    { name: 'Nabeul' }, 
    { name: 'Sfax' }, 
    { name: 'Sidi Bouzid' }, 
    { name: 'Siliana' }, 
    { name: 'Sousse' },
    { name: 'Tataouine' }, 
    { name: 'Tozeur' }, 
    { name: 'Tunis' }, 
    { name: 'Zaghouan' }
  ]);

  const handleHover = (label) => {
    setActiveDropdown(label);
  };

  const handleLeave = () => {
    setActiveDropdown(null);
  };

  const [numVisibleItems, setNumVisibleItems] = useState(calculateNumVisibleItems());

  useEffect(() => {
    function handleResize() {
      setNumVisibleItems(calculateNumVisibleItems());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateNumVisibleItems() {
    const containerWidth = window.innerWidth;
    // Adjust this value according to your layout
    const liWidth = 80;
    return Math.floor(containerWidth / liWidth);
  }

  let filteredCategories;
  if (activeDropdown === 'Cabinet') {
    filteredCategories = governorates.slice(0, numVisibleItems);
  } else {
    filteredCategories = categories
      .filter((category) => category.catego.toLowerCase() === activeDropdown)
      .slice(0, numVisibleItems);
  }

  return (
    <div className='containerdropdown'
    onMouseLeave={handleLeave}
    >
      <div className='containerdropdowncateg'>
        {lab && (
          <span
            onMouseEnter={() => handleHover(lab)}
          >
            {lab}
          </span>
        )}
        {lab1 && (
          <span
            onMouseEnter={() => handleHover(lab1)}
          >
            {lab1}
          </span>
        )}
        {lab2 && (
          <span
            onMouseEnter={() => handleHover(lab2)}
          >
            {lab2}
          </span>
        )}
        
        <span
          onMouseEnter={() => handleHover(lab3)}
        >
          {lab3}
        </span>
      </div>
      <div
        className={`containerdropdownsubcateg ${
          activeDropdown ? 'active' : ''
        }`}
      >
        <div className='containerulcateg'>
          <ul>
            {filteredCategories.map((category, index) => (
              <li key={index}>{category.name}</li>
            ))}
            {categories.length > numVisibleItems && <li>see more</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdownn;
