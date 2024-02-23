import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import './FAQ.css'; // Import your CSS file

const FAQ = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ['faq1.png', 'faq2.png', 'faq4.png']; // Replace with your image filenames

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);

    const [Faq, setFaq] = useState([
        {
            question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
            answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
        },
        {
          question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
          answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
      },
      {
        question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
        answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
    },
    {
      question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
      answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
  }, {
    question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
    answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
},
, {
  question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
  answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
},, {
  question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
  answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
},, {
  question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
  answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
},, {
  question: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
  answer: 'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
},
    ]);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="containerfaqpro">
            
            <div className="containerfaqimg">
                <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
            </div>
            <div className="containerfaq">
                <div className="titlefaq">
                    <h2 id="faqtitre">FREQUENTLY ASKED QUESTIONS</h2>
                    <p id="desfaq">loremlormeloremlormelomroloremlormelormelromelormeleor</p>
                </div>
                <div className="minicontainerfaq">
                    {Faq.map((item, index) => (
                        <div key={index} className="containerqa">
                            <div className="questioncontainer">
                                <div className="question">
                                    <div className="ques">
                                        <h2 className="titleq" onClick={() => toggleActive(index)}>
                                            {item.question}
                                            {activeIndex === index ? (
                                              <IonIcon icon={chevronUpOutline}  />
                                            ) : (
                                                <IonIcon icon={chevronDownOutline} className="arrowdown" />
                                            )}
                                        </h2>
                                    </div>
                                    {activeIndex === index && (
                                    <div className="rep">
                                            <p>{item.answer}</p>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
