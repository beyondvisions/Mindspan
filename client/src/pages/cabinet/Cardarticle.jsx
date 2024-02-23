import React from 'react';
import './cardarticle.css';

const Cardarticle = ({ Data }) => {
  return (
    <div>
      {Data.length === 0 ? (
        <p style={{textAlign:'center',color:'#ff00a2', fontSize:'2.5rem'}}>No data available</p>
      ) : (
        <div className='cabinetcontainer'>
          {Data.map((item, index) => (
            <div key={index} className='cabinetarticle'>
              <img src={item.image} alt={item.name} id='cabinetimg' />
              <div className='layoutcardcabinet'>
                <div className='titlecabinet'>{item.name}</div>
                <div className='subcategoriecabinet' dangerouslySetInnerHTML={{ __html: item.description }} />
                <div className='subcategoriecabinet'><span><b>Email :</b> {item.email}</span></div>
                <div className='subcategoriecabinet'><span><b>Phone Number : </b>{item.phoneNumber}</span></div>
                <div className='more1'>
                  <span><small>#{item.address}</small></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cardarticle;
