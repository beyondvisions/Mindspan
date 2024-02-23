import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Footer.css';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { logoFacebook, logoInstagram, logoLinkedin } from 'ionicons/icons';
const Footer = () => {
    const [categories, setCategories] = useState([]);

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
        
        <div className='footercontainer' >
      
            <div className='containerfooter'>
                <div className='description'>
                    <div className='elementdes'><h3 style={{fontSize:'1.4rem'}}><b style={{color:'black'}}>Mind</b>span</h3></div>
                    <div className='des'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  </p></div>
                    
                    <div className='containersocial'> 
                        <div> <IonIcon icon={logoFacebook}style={{ fontSize: '25px', margin: '0 10px' }} /></div>
                        <div>      <IonIcon icon={logoInstagram} style={{ fontSize: '25px', margin: '0 10px' }}/></div>
                        <div>      <IonIcon icon={logoLinkedin} style={{ fontSize: '25px', margin: '0 10px' }}/></div>
                    </div>
                </div>
                <div className='conatinercategories'>
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

          <div className='conatinercategories'>
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

          <div className='conatinercategories'>
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
          <div className='conatinercategories'>
            <div className='titlecateg'>
              <h3>cabinets</h3>
            </div>
            <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>Tunis</span></div>
            <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>Bizerte</span></div>
            <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>Sousse</span></div>
            <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>Mahdia</span></div>
          


          </div> 
                <div className='containercategres'>
                    <div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>santé mentale</span></div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>parent et enfant</span></div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>evenements</span></div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>cabinets</span></div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>Home</span></div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>FAQ</span></div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>About us</span></div>
                    <div className='boxcateg'><IonIcon icon={chevronForwardOutline} id='iconcart' /><span>ContactUs</span></div>

                    </div>
                </div>
               
                
            </div>
            <div className='cpoyrights'> 
                <div className='ecje'><span>&copy; Rights ENETCom Junior Entreprise</span></div>
                <div className='moreinfo'>
                    <div>
                    <span>contactez-nous</span>
                    <span>a propos nous</span>
                    <span>politique de cinfidentialité</span>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Footer