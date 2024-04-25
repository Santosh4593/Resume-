import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import contactImg from '../../images/contactImg.png';
import styles from '../../styles/Home/Contact.module.css';
import Arrow from '../../svgFiles/arrow';
export default function Contact() {
    const [state, handleSubmit] = useForm("mvoewrdz");
  
  return (
    <div className={styles.contactWrapper}>
        <div className={styles.contactMain} data-aos="flip-up">
           <div className={styles.contactImgSection}>
            <img className={styles.contactImg} src={contactImg} />
            </div> 
            <div className={styles.contactFormSection}>
                <div className={styles.formHeading}>
                Transform Your Hiring Experience
                </div>
                {state.succeeded ? (
                        <p className={styles.successMessage}>
                            Thank you for reaching out! 
                            We appreciate your interest and 
                            will respond to your message as soon as possible.
                        </p>
                    ) : 
                (
                    <form onSubmit={handleSubmit}
                    className={styles.contactForm}>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Enter your work email"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <input type="hidden" 
                        name="_subject" 
                        value="New connection request" />
                        <input type="hidden" 
                        name="_gotcha" 
                        style={{ display: 'none' }} />
                        
                    <button type="submit" disabled={state.submitting}>
                        Get in Touch <Arrow />
                    </button>
                    </form>
                )}
            </div>
            
        </div>
    </div>
  )
}
