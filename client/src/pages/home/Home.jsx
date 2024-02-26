import { useRef, useState } from 'react'
import styles from './HomeComponent.module.css'
import { FaHeart } from 'react-icons/fa';
import { FaStreetView } from "react-icons/fa";
import { FaBook} from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from '../../components/musicplayer/AudioPLayer';
import aud from './scp.mp3'
import { Button } from 'flowbite-react';
import RecentPost from '../RecentPost';
export default function Home() {
    const [clickedFilterIndex, setClickedFilterIndex] = useState(0);
  const [newsletters, setNewsletters] = useState([]);
  const [newSubscriberEmail, setNewSubscriberEmail] = useState('');
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

const [titles, setTitles] = useState([ 
  {
    titre:'Strengthen Mental Resilience',
    description:'We will help you to improve your mental health'
  },
  {
    titre:'Cultivating Mental Toughness',
    description:'Our support will aid in enhancing your mental well-being.'
  },
  {
    titre:'Developing Mental Fortitude',
    description:'Together, we will work on strengthening your mental well-being'
  }
])

const [currentTitleIndex, setCurrentTitleIndex] = useState(0);



useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
}, [titles]);
const [totalPosts, setTotalPosts] = useState(0);
const [totalCategories, setTotalCategories] = useState(0);
const [totalCabinets,setTotalCabinets] = useState(0);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`/api/post/getposts?`);
      if (res.status === 200) {
        const data = res.data;
        setTotalPosts(data.totalPosts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/categories/getcategories');
      if (res.status === 200) {
        setTotalCategories(res.data.length);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchCabinets = async () => {
    try {
        const res = await axios.get(`/api/cabinet/getCabinets`);
        if (res.status === 200) {
            const data = res.data; // Extract data from the response
            setTotalCabinets(data.totalCabinets); // Set total number of cabinets
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching cabinets:', error);
    }
};




  fetchCabinets();
  fetchCategories();
  fetchPosts();
}, []);
console.log(totalCabinets);



  return (
    <div>
<div>
            <div className={styles.hero}>
                <div className={styles.background_image}>
                    <img src='home_bg.jpg' alt="" style={{ width: '100%', height: '82vh', objectFit: 'cover' }} />
                    {titles.map((item, index) => (
                    <div key={index} className={styles.hero_content_area}>
                           <h1>{titles[currentTitleIndex].titre}</h1>
                        <h3>{titles[currentTitleIndex].description}</h3>
            <Link to='/search'>
            <Button  style={{ backgroundColor: '#D294BB' }} 
                          className="focus:border-custom-color focus:ring-custom-color dark:focus:border-custom-color dark:focus:ring-custom-color"

            >
Discover more            </Button>
          </Link>                    </div>
                     ))}

                </div>
            </div>
            <div className={styles.containerdestination}>
             <div className={styles.conimgpurp}><img src='femme.jpg'></img> </div>
            <div className={styles.destinations}>
                <h3 className={styles.newtit}>You deserve to be mentaly health</h3>
                <p className={styles.newpurpp} >Dedicated to your well-being, our mission is to provide you with the knowledge and tools essential for fortifying your mental health.
                    We are committed to ools essential for fortifying your mental health.
                    to your well-being, our mission is to provide you with the knowledge and tools essential for fortifying your mental health.
                    We are committed to ools essential for fortifying your mental health.
                    We are committed to empowering you with valuable insights and capabilities, ensuring your journey towards enhanced well-being is supported and guided every step of the way.</p>
                <p className={styles.respp} >Dedicated to your well-being, our mission is to provide you with the knowledge and tools essential for fortifying your mental health.
                    We are committed to empowering you with valuable insights and capabilities,</p>

                <div className={styles.congetget}>
            <Link to='/sign-up'>
            <Button  style={{ backgroundColor: '#D294BB' }} 
                          className="focus:border-custom-color focus:ring-custom-color dark:focus:border-custom-color dark:focus:ring-custom-color"

            >
Get started            </Button>
          </Link>                  </div>
           
            </div>
            </div>
         <div className={styles.containcomptourpromax}>
         <div className={styles.containcomptour}>
              <div className={styles.titcomptour}>
                <h1>Empowering you with our<Link to='./cabinet'><span className={styles.terapist}> therapists </span></Link>throught <Link to='MentalHelath'><span className={styles.mheal}> mental health </span> </Link> awarness</h1>
                <p>We are in a mission to provide comprhensivemental health support. our passionate team ofprofessionals is dedicated to fostering your well-being and mental health..</p>
              </div> 
              <div className={styles.containlescomptour}>
                <div className={styles.comptourwahda}><img src='expertise.png'></img><span >{totalCategories}+</span><p>Catégories</p></div>
                <div className={styles.comptourwahda} ><img src='expertise.png'></img><span>{totalPosts}+</span><p>Articles</p></div>
                <div className={styles.comptourwahda}><img src='expertise.png'></img><span>{totalCabinets}+</span><p>articles</p></div>
              </div>
            </div>
         </div>

            <div className={styles.packages}>
                <h3 className={styles.title}>Transparent Health Authority</h3>
                <p style={{paddingBottom:'30px'}}>We take pride in being recognized as a reliable nonprofit provider of quality health information..</p>
                <div className={styles.grid}>
                    <li className='shadowcarta'>
                      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaExchangeAlt style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   
                        <h4>Trustworthy Guidance</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, i </p>
                    </li>
                    <li>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaStreetView  style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   
                        <h4>Cultivate Life Skills</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, itaque</p>
                    </li>
                    <li>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaBook style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   
                        <h4>Feel-Better Strategies</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, itaque q</p>
                    </li>
                    <li>
                        
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FaHeart  style={{fontSize:'3rem',textAlign:'center'}}/>
                        </div>   

                        <h4>
                            Dependable Support</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque officia laboriosam beatae voluptatem aliquid nihil, itaque qu </p>
                    </li>
                </div>
                <hr />
            </div>

            <div className={styles.containhelptoday} >
                <h3 className={styles.title}>Find the help you need today</h3>
                <div className={styles.subscribe}>
               <h2 className={styles.subscribe__title}>Pick a topic below that you’d like to explore:</h2>
        
               <div className="flex justify-center lg:justify-evenly flex-col lg:flex-row w-full">               
                 <div >
            <div >
            <h3 style={{ color: '#873260', padding: '10px', textAlign: 'center', fontSize: '2rem' }}>
                Evénement</h3>
            </div>
          {categories
            .filter(category => category.catego.toLowerCase() === 'événements')
            .slice(0, 5) 
            .map((category, index) => (
          <Link
            key={index}
            to={`/Evenement?searchTerm=&sort=desc&category=événements&subcategory=${category.name.replace(/ /g, '+')}`}
          >
            <div
              style={{
                backgroundColor: clickedFilterIndex === index ? '#D294BB' : 'white',
                borderColor: clickedFilterIndex === index ? '#D294BB' : 'black',
                color: clickedFilterIndex === index ? 'white' : '#D294BB',
              }}
              className={`onefilter ${clickedFilterIndex === index ? 'clicked' : ''}`}
              onClick={() => handleClick(index)}
            >
              <span>{category.name}</span>
              
            </div>
          </Link>
        )
      )}
     
      <Link to='./Evenement'>
         <button className='onefilter'> <span>Se more</span></button>
    </Link>
                
            
            
          </div>
          <div >
            <div >
            <h3 style={{ color: '#873260', padding: '10px', textAlign: 'center', fontSize: '2rem' }}>
                Parent et enfants</h3>
            </div>
         
                {categories
                  .filter(category => category.catego.toLowerCase() === 'parent et enfants')
                  .slice(0, 5) 
                  .map((category, index) => (
                <Link
                  to={`/ParentEtEnfant?searchTerm=&sort=desc&category=ParentEtEnfant&subcategory=${category.name.replace(/ /g, '+')}`}
                  key={index}
                >
                  <div
                    style={{
                      backgroundColor: clickedFilterIndex === index ? '#D294BB' : 'white',
                      borderColor: clickedFilterIndex === index ? '#D294BB' : 'black',
                      color: clickedFilterIndex === index ? 'white' : '#D294BB',
                    }}
                    className={`onefilter ${clickedFilterIndex === index ? 'clicked' : ''}`}
                    onClick={() => handleClick(index)}
                  >
                    <span>{category.name}</span>
                  </div>
                </Link>
              )
             )}

            <Link to='./ParentEtEnfant'>
               <button className='onefilter'> <span>Se more</span></button>
            </Link>
            
          </div>
          <div >
            <div>
            <h3 style={{ color: '#873260', padding: '10px', textAlign: 'center', fontSize: '2rem' }}>
                Santé Mentale</h3>
            </div>
          
            {categories
  .filter(category => category.catego.toLowerCase() === 'santé et mentale')
  .slice(0, 5) 
  .map((category, index) => (
            
               <Link to={`/MentalHelath?searchTerm=&sort=desc&category=événements&subcategory=${category.name.replace(/ /g, '+')}`}>  <div  key={index}
               style={{ backgroundColor: clickedFilterIndex === index ? '#D294BB' : 'white', borderColor: clickedFilterIndex === index ? '#D294BB' : 'black', color: clickedFilterIndex === index ? 'white' : '#D294BB' }}
               className={`onefilter ${clickedFilterIndex === index ? 'clicked' : ''}`}
               onClick={() => handleClick(index)}
 
               >
                 <span>{category.name}</span>
               </div>
               </Link>
            ))}
            <Link to='./MentalHelath'>
               <button className='onefilter'> <span>Se more</span></button>
            </Link>
            
          </div>
        
          </div>
                  
            </div>
        </div>

            <div>
                <h3 className={styles.title}>Featured</h3>
                <div className={styles.subscribe}>
                    <h2 className={styles.subscribe__title}>Articles</h2>
                   <RecentPost category='événements' subcategory=''/>
                </div>
            </div>

<div className='containersound'>
            <div className='sound'>
              <div>
            <AudioPlayer audioSrc={aud} label="relaxation"/>
            </div>
            <div>
            <AudioPlayer audioSrc={aud} label="relaxation"/>
            </div>
            <div>
            <AudioPlayer audioSrc={aud} label="relaxation"/>

            </div>
            </div>

            </div>


            <div style={{paddingTop:'100px'}}>
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
