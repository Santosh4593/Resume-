import {React, useState} from 'react';
import IntelLogoHero from '../../svgFiles/intelLogoHero.js';
import styles from '../../styles/Home/Hero.module.css';

export default function Hero() {
    
  return (
    <div className={styles.heroWrapper}>
        <div className={styles.heroMain}  data-aos="flip-up">
            <IntelLogoHero className={styles.heroLogo}/>
            <div className={styles.heroText}>Intellirecruit</div>
        </div>
        
    </div>
  )
}
