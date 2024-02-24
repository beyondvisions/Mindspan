import React, { useState, useEffect } from 'react';
import './Dropdown.css';

const Dropcabin = () => {
  const [pays, setPays] = useState([
    'jandouba', 'jandoubaaaaaaaa', 'jandouba', 'jandouba', 'jandouba', 
    'jandouba', 'jandouba', 'jandouba', 'jandouba', 'jandouba', 
    'jandouba', 'jandouba', 'jandouba', 'jandouba', 'jandouba', 
    'jandouba', 'jandouba', 'jandouba', 'jandouba', 'jandouba'
  ]);
  const [numVisibleItems, setNumVisibleItems] = useState(calculateNumVisibleItems());

  useEffect(() => {
    function handleResize() {
      const newNumVisibleItems = calculateNumVisibleItems();
      setNumVisibleItems(newNumVisibleItems);
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

  const displayedPays = pays.slice(0, numVisibleItems);

  return (
    <div className='containerdropdown'>
      <div className='containerdropdowncateg'>
        <span>cabinets</span>
        <div className='containerdropdownsubcateg'>
          <div className='containerulcateg'>
            <ul>
              {displayedPays.map((pay, index) => (
                <li key={index}>{pay}</li>
              ))}
              {pays.length > numVisibleItems && <li>see more</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropcabin;
