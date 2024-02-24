import { useRef, useState } from 'react'
import CardComponent from './card/CardComponent.jsx'
import styles from './HomeComponent.module.css'
import { FaHeart } from 'react-icons/fa';
import { FaStreetView } from "react-icons/fa";
import { FaBook} from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import axios from 'axios';
import React, { useEffect } from 'react';

export default function Home() {
    const [clickedFilterIndex, setClickedFilterIndex] = useState(0);
  const [newsletters, setNewsletters] = useState([]);
  const [newSubscriberEmail, setNewSubscriberEmail] = useState('');
//add new email 
const handleAddSubscriber = async () => {
    try {
      const res = await axios.post('/api/newsletters/emails/add', { email: newSubscriberEmail });
      if (res.status === 201) {
        setNewsletters([...newsletters, res.data]); 
         setNewSubscriberEmail('');
      alert(`Your email ${newSubscriberEmail} subscription was successful!`);
      }
    } catch (error) {
      console.error("Error adding subscriber:", error);
      alert('Failed to subscribe. Please try again later.');
    }
  };
  
  

  //get categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/api/categories/getcategories');
        if (res.status === 200) {
          setCategories(res.data);
        }
      } catch (error) {
        alert("an error happened")
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  const handleClick = (index) => {
    setClickedFilterIndex(index);

};
  return (
    <div>
<div>
            <div className={styles.hero}>
                <div className={styles.background_image}>
                    <img src='home_bg.jpg' alt="" style={{ width: '100%', height: '81vh', objectFit: 'cover' }} />
                    <div className={styles.hero_content_area}>
                        <h1>Strengthen Mental Resilience</h1>
                        <h3>We will help you to improve your mental health</h3>
                        <a href="#" className={styles.btn}>Discover More</a>
                    </div>
                </div>
            </div>
            <div className={styles.destinations}>
                <h3 className={styles.title}>Our purpose:</h3>
                <p>Dedicated to your well-being, our mission is to provide you with the knowledge and tools essential for fortifying your mental health.
                    We are committed to empowering you with valuable insights and capabilities, ensuring your journey towards enhanced well-being is supported and guided every step of the way.</p>
                <hr />
            </div>

            <div className={styles.packages}>
                <h3 className={styles.title}>Transparent Health Authority</h3>
                <p>We take pride in being recognized as a reliable nonprofit provider of quality health information. Our commitment to transparency ensures that individuals can trust the accuracy and credibility of the health information we deliver. With a focus on integrity and trustworthiness, we strive to empower individuals with knowledge that enables informed decisions and fosters a healthier community.</p>
                <ul className={styles.grid}>
                    <li>
                      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaExchangeAlt style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   
                        <h4>Trustworthy Guidance</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, itaque quos, deserunt amet nisi odio cupiditate voluptate repudiandae inventore assumenda non soluta facilis. Voluptatem.</p>
                    </li>
                    <li>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaStreetView  style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   
                        <h4>Cultivate Life Skills</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, itaque quos, deserunt amet nisi odio cupiditate voluptate repudiandae inventore assumenda non soluta facilis. Voluptatem.</p>
                    </li>
                    <li>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaBook style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   
                        <h4>Feel-Better Strategies</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, itaque quos, deserunt amet nisi odio cupiditate voluptate repudiandae inventore assumenda non soluta facilis. Voluptatem.</p>
                    </li>
                    <li>
                        
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaHeart  style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   

                        <h4>
                            Dependable Support</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, itaque quos, deserunt amet nisi odio cupiditate voluptate repudiandae inventore assumenda non soluta facilis. Voluptatem.</p>
                    </li>
                </ul>
                <hr />
            </div>

            <div>
                <h3 className={styles.title}>Find the help you need today</h3>
                <div className={styles.subscribe}>
               <h2 className={styles.subscribe__title}>Pick a topic below that you’d like to explore:</h2>
        
               <div className="flex justify-center lg:justify-evenly flex-col lg:flex-row w-full">               
                 <div >
            <div >
            <h3 style={{ color: '#873260', padding: '10px', textAlign: 'center', fontSize: '2rem' }}>
                Evénement</h3>
            </div>
            {categories.map((category, index) => (
              category.catego.toLowerCase() === 'événements' &&
              <div  key={index}
              style={{ backgroundColor: clickedFilterIndex === index ? '#D294BB' : 'white', borderColor: clickedFilterIndex === index ? '#D294BB' : 'black', color: clickedFilterIndex === index ? 'white' : '#D294BB' }}
              className={`onefilter ${clickedFilterIndex === index ? 'clicked' : ''}`}
              onClick={() => handleClick(index)}

              >
                <span>{category.name}</span>
              </div>
            ))}
            
          </div>
          <div >
            <div >
            <h3 style={{ color: '#873260', padding: '10px', textAlign: 'center', fontSize: '2rem' }}>
                Parent et enfants</h3>
            </div>
            {categories.map((category, index) => (
              category.catego.toLowerCase() === 'parent et enfants' &&
              <div  key={index}
              style={{ backgroundColor: clickedFilterIndex === index ? '#D294BB' : 'white', borderColor: clickedFilterIndex === index ? '#D294BB' : 'black', color: clickedFilterIndex === index ? 'white' : '#D294BB' }}
              className={`onefilter ${clickedFilterIndex === index ? 'clicked' : ''}`}
              onClick={() => handleClick(index)}

              >
                <span>{category.name}</span>
              </div>
            ))}
            
          </div>
          <div >
            <div>
            <h3 style={{ color: '#873260', padding: '10px', textAlign: 'center', fontSize: '2rem' }}>
                Santé Mentale</h3>
            </div>
            {categories.map((category, index) => (
              category.catego.toLowerCase() === 'santé et mentale' &&
              <div  key={index}
              style={{ backgroundColor: clickedFilterIndex === index ? '#D294BB' : 'white', borderColor: clickedFilterIndex === index ? '#D294BB' : 'black', color: clickedFilterIndex === index ? 'white' : '#D294BB' }}
              className={`onefilter ${clickedFilterIndex === index ? 'clicked' : ''}`}
              onClick={() => handleClick(index)}

              >
                <span>{category.name}</span>
              </div>
            ))}
            
          </div>
        
          </div>
                  
            </div>
        </div>





            <div>
                <h3 className={styles.title}>Featured</h3>
                <div className={styles.subscribe}>
                    <h2 className={styles.subscribe__title}>Articles</h2>
                    <p className={styles.subscribe__copy}>El articlouweeet wouuh aleeyaa wouuuuuhhh
                        El articlouweeet wouuh aleeyaa wouuuuuhhh
                        El articlouweeet wouuh aleeyaa wouuuuuhhh
                        El articlouweeet wouuh aleeyaa wouuuuuhhh
                        El articlouweeet wouuh aleeyaa wouuuuuhhh
                    </p>
                </div>
            </div>

            <div>
                <div className={styles.slider}>
                    <h3 className={styles.title}><b>Featured</b></h3>
                    <h2 className={styles.subscribe__title}> sawet el battaaa</h2>
                    <div className={styles.swiper}>
                       
                        <div className={styles.swiper_wrapper}>







                        </div>








                    </div>
                </div>


            </div>



            <div>
                <h3 className={styles.title}>GET OUR NEWSLETTER</h3>
                <div className={styles.subscribe}>
                    <h2 className={styles.subscribe__title}>Let's keep in touch</h2>
                    <p className={styles.subscribe__copy}>Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
                    <div className={styles.form}>
                        <input type="email" className={styles.form__email} placeholder="Enter your email address"
                         onChange={(e) => setNewSubscriberEmail(e.target.value)}
                        />
                        <button className={styles.form__button} onClick={handleAddSubscriber}>Send</button>
                    </div>
                </div>
            </div>
        </div >
    </div>
  );
}
