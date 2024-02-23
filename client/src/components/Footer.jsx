import './Footer.css';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Footer = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [newSubscriberEmail, setNewSubscriberEmail] = useState('');
  const [categories, setCategories] = useState([]);

  const handleAddSubscriber = async () => {
    try {
      const res = await axios.post('/api/newsletters/emails/add', { email: newSubscriberEmail });
      if (res.status === 201) {
        setNewsletters([...newsletters, res.data]); 
        setNewSubscriberEmail('');
      }
    } catch (error) {
      console.error("Error adding subscriber:", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/api/categories/getcategories');
        if (res.status === 200) {
          setCategories(res.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className='allfoot'>
      <div className='footercontainer'>
        <div className='containerfooter'>
          <div className='description'>
            <div className='elementdes'><h3>MINDSPAN</h3></div>
            <div className='des'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  </p></div>
            <div className='newsletter'>
              <input type='email' placeholder='write your email' value={newSubscriberEmail} onChange={(e) => setNewSubscriberEmail(e.target.value)} />
              <button onClick={handleAddSubscriber}>send</button>
            </div>
            <div className='containersocial'>
              <div><img src='insta.png' alt="Instagram" /></div>
              <div><img src='insta.png' alt="Instagram" /></div>
              <div><img src='insta.png' alt="Instagram" /></div>
            </div>
          </div>

          <div className='container-categories'>
            <div className='titlecateg'>
              <h3>Événements</h3>
            </div>
            {categories.map((category, index) => (
              category.catego.toLowerCase() === 'événements' &&
              <div className='boxcateg' key={index}>
                <IonIcon icon={chevronForwardOutline} id='iconcart' />
                <span>{category.name}</span>
              </div>
            ))}
          </div>

          <div className='container-categories'>
            <div className='titlecateg'>
              <h3>Parent et enfants</h3>
            </div>
            {categories.map((category, index) => (
              category.catego.toLowerCase() === 'parent et enfants' &&
              <div className='boxcateg' key={index}>
                <IonIcon icon={chevronForwardOutline} id='iconcart' />
                <span>{category.name}</span>
              </div>
            ))}
          </div>

          <div className='container-categories'>
            <div className='titlecateg'>
              <h3>Santé et Mentale</h3>
            </div>
            {categories.map((category, index) => (
              category.catego.toLowerCase() === 'santé et mentale' &&
              <div className='boxcateg' key={index}>
                <IonIcon icon={chevronForwardOutline} id='iconcart' />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='cpoyrights'>
  <div className='ecje'><span>&copy; ENETCom Junior Entreprise</span></div>
  <div className='moreinfo'>
    <span>contactez-nous</span>
    <span>à propos de nous</span>
    <Link to="/policy">
      <span>politique de confidentialité</span>
    </Link>
  </div>
</div>

      </div>
    </div>
  );
}

export default Footer;
