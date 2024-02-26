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
    
   

          


            <div >
                <h3 className={styles.title} style={{padding:'40px 0px'}}>GET OUR NEWSLETTER</h3>
                <div className={styles.subscribe}>
                    <h2 className={styles.subscribe__title}>Let's keep in touch</h2>
                    <p className={styles.subscribe__copy}>Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
                    <div className={styles.form}>
                        <input type="email" style={{borderRadius:"10px 0px 0px 10px"}} className={styles.form__email} placeholder="Enter your email address"
                         onChange={(e) => setNewSubscriberEmail(e.target.value)}
                        />
                        <button className={styles.form__button} onClick={handleAddSubscriber}>Send</button>
                    </div>
                </div>
            </div>
        </div >
  );
}
