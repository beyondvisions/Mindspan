import React, { useState } from 'react';
import './Dropdown.css';

const Dropdownn = ({ categories, lab }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const eventCategories = categories.filter(category => category.catego.toLowerCase() === lab);

  const handleClick = () => {
    setActiveDropdown(prev => (prev === lab ? null : lab));
  };

  return (
    <div className='containerdropdown'>
      <div className='containerdropdowncateg'>
        <span>{lab}</span>
        <div className={`containerdropdownsubcateg ${activeDropdown === lab ? 'active' : ''}`} onClick={handleClick}>
          <div className='containerulcateg'>
            <ul>
              {eventCategories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdownn;

