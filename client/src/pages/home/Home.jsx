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
    <div >
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
              <div className={styles.title}>
                <h1 style={{padding:'20px 0px'}}>Empowering you with our<Link to='./cabinet'><span className={styles.terapist}> therapists </span></Link>throught <Link to='MentalHelath'><span style={{color:"#873260"}}> mental health </span> </Link> awarness</h1>
                <p style={{padding:'10px 0px'}}>We are in a mission to provide comprhensivemental health support. our passionate team ofprofessionals is dedicated to fostering your well-being and mental health..</p>
              </div> 
         <div className={styles.containcomptour}>
             
              <div className={styles.containlescomptour}>
              <div style={{textAlign:'center'}}>

                <div className={styles.comptourwahda}>
                <img src='expertise.png'></img>
                <span style={{color:'#873260'}} >{totalCategories}+</span>
                <span>Catégories</span></div>
                </div>
                <div style={{textAlign:'center'}}>
                <div className={styles.comptourwahda} ><img src='expertise.png' alt='test' ></img>
                <span style={{color:'#873260'}} >{totalPosts}+</span><span>Articles</span></div>
                </div>
                <div style={{textAlign:'center'}}>
                <div className={styles.comptourwahda}><img src='expertise.png'></img><span style={{color:'#873260'}} >{totalCabinets}+</span><span>articles</span></div>
                </div>
              </div>
            </div>
         </div>

         <div className={styles.packages}>
                <h3 className={styles.title} style={{padding:'30px 0px'}}>Transparent Health Authority</h3>
                <p style={{ padding:'10px 10px'}}>We take pride in being recognized as a reliable nonprofit provider of quality health information..</p>
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


            <div >
                <h3 className={styles.title} style={{padding:'40px 0px'}}>GET OUR NEWSLETTER</h3>
                <div className={styles.subscribe}>
                    <h2 className={styles.subscribe__title}>Let's keep in touch</h2>
                    <p className={styles.subscribe__copy}>Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
                    <div className={styles.form}>
                        <input type="email" style={{borderRadius:"10px 0px 0px 10px"}} className={styles.form__email} placeholder="example@gmail.com"
                         onChange={(e) => setNewSubscriberEmail(e.target.value)}
                        />
                        <button className={styles.form__button} onClick={handleAddSubscriber}>Send</button>
                    </div>
                </div>
            </div>
        </div >
  );
}
