import React from 'react';
import styles from '../../styles/Features/FeHero.module.css';
import { Link } from 'react-router-dom';
import HeroCard from '../../images/FeHeroCard.png';


export default function FeHero() {
    const data = ["Completeness", "Word Choice", "Typos", "Formatting", "Customization"];
  return (
    <div className={styles.feHeroWrapper}>
        <div className={styles.feHeroMain}>
            <div className={styles.feHeroText} data-aos="flip-right">
                <div className={styles.feHeroHeading}>Resume Check </div>
                <div className={styles.feHeroSubHeading}>Instantly check your<br/> Resume for 15+ issues</div>
                <Link  className={styles.feHeroLink} to="/product">Upload your resume</Link>
            </div>

            <img  data-aos="flip-left" src={HeroCard} alt="hero Card" className={styles.feHeroImg}/>
            
        </div>
    </div>
  )
}
