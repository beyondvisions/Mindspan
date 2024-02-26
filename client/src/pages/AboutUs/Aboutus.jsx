import React, {useState} from 'react'
import './Aboutus.css'
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline,chevronBackOutline } from 'ionicons/icons';
const Aboutus = () => {
    const [datacustomer,setDatacustomer]=useState([
        {
            img:'team.png',
            description:'“Lorem ipsum dolor sit amet consectetur. Volutpat nec ullamcorper id pharetra volutpat sit. Egestas maecenas venenatis risus integer morbi. Sodales volutpat feugiat est cursus lobortis tristique. Fringilla pharetra vitae amet faucibus feugiat adipiscing.Lorem ipsum dolor sit amet consectetur. Volutpat nec ullamcorper id pharetra volutpat sit. Egestas maecenas venenatis risus integer morb"',
            name:'Houssem mehrez'
        },
        {
            img:'team.png',
            description:'“Lorem ipsum dolor sit amet consectetur. Volutpat nec ullamcorper id pharetra volutpat sit. Egestas maecenas venenatis risus integer morbi. Sodales volutpat feugiat est cursus lobortis tristique. Fringilla pharetra vitae amet faucibus feugiat adipiscing.Lorem ipsum dolor sit amet consectetur. Volutpat nec ullamcorper id pharetra volutpat sit. Egestas maecenas venenatis risus integer morb"',
            name:'Houssem mehrez'
        },
        {
            img:'team.png',
            description:'“Lorem ipsum dolor sit amet consectetur. Volutpat nec ullamcorper id pharetra volutpat sit. Egestas maecenas venenatis risus integer morbi. Sodales volutpat feugiat est cursus lobortis tristique. Fringilla pharetra vitae amet faucibus feugiat adipiscing.Lorem ipsum dolor sit amet consectetur. Volutpat nec ullamcorper id pharetra volutpat sit. Egestas maecenas venenatis risus integer morb"',
            name:'Houssem mehrez'
        },
    ])
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === datacustomer.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? datacustomer.length - 1 : prevIndex - 1));
    };
    
  return (
    <div>
        <div className='discover'>
            <div className='discovimg'><img src='team.png'></img></div>
            <div className='desdiscover'>
                <h1 id='titled' ><b>Mindspan </b></h1>
                <p>Mindspan est un projet créé par des enthousiastes de la santé mentale qui vise à guider les parents dans l'éducation de leurs enfants en fournissant des outils pratiques pour créer un environnement sain et épanouissant. Mindspan propose aussi un espace d'échange où des professionnels en psychiatrie partagent des conseils avisés et des informations à propos de la santé mentale.
                </p>    
            </div>
        </div>
        <div className='containerwhy' >
            <h1 ><b>Why Our Mental Health Consultants are the best Choice</b></h1>
           <div className='containercardinfopromax'>
           <div className='containercardinfo'>
                <div className='cardinfo' id='card11'>
                    <div className='cardinfoimg'><img src='expertise.png'></img></div>
                    <h2>Expertise Team</h2>
                    <div className='containp'><p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.</p></div>
                </div>
                <div className='cardinfo' id='cardinfo1'>
                    <div className='cardinfoimg'><img src='expertise.png'></img></div>
                    <h2>Expertise Team</h2>
                    <div className='containp'><p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.</p></div>
                </div>
                <div className='cardinfo' id='card12'>
                <div className='cardinfoimg' ><img src='expertise.png'></img></div>
                    <h2>Expertise Team</h2>
                    <div className='containp'><p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.</p></div>
                </div>
            </div>
           </div>
        </div>
        
        <div className='containcustomer'>
            <div className='arroww' ><IonIcon icon={chevronBackOutline} className='iconcart' onClick={prevSlide} /></div>
            {datacustomer.map((item, index) => (
                <div key={index} className={index === currentIndex ? 'customertalk active' : 'customertalk'}>
                    <div className='profilimgcontain'><img src={item.img} alt="customer-img" /></div>
                    <p>{item.description}</p>
                    <ul><li id='customer'>#{item.name}</li></ul>
                </div>
            ))}
            <div className='arroww' ><IonIcon icon={chevronForwardOutline} className='iconcart' onClick={nextSlide}/></div>
        </div>
    </div>
  )
}

export default Aboutus