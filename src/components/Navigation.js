import React from 'react';
import styles from '../styles/Navigation.module.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import AOS from 'aos'
import IntelLogo from '../svgFiles/intelLogo';
import LinkedInLogo from '../svgFiles/linkedInLogo';
import TwitterLogo from '../svgFiles/twitterLogo';
import YouTubeLogo from '../svgFiles/youTubeLogo';


export default function Navigation() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);

  return (
    <nav className={styles.navWrapper}>
            <div className={styles.menu} data-aos="fade-down">
                <div className={styles.heading}><IntelLogo />Intellirecruit</div>
                <div className={styles.menuList}>
                    <ul className={styles.menuItemList}>
                        <li>
                        <Link className={styles.linkStyle} to="/">Home</Link>
                        </li>
                        <li>
                        <Link className={styles.linkStyle} to="/features">Features</Link>
                        </li>
                        <li>
                        <Link className={styles.linkStyle} to="/product">Product</Link>
                        </li>
                        
                    </ul>
                    <ul className={styles.menuItemListIcon}>
                      <li>
                      <Link className={styles.linkStyle} to="/facebook"><LinkedInLogo /></Link>
                      </li>
                      <li>
                      <Link className={styles.linkStyle} to="/youtube"><TwitterLogo /></Link>
                      </li>
                      <li>
                      <Link className={styles.linkStyle} to="/instagram"><YouTubeLogo /></Link>
                      </li>
                    </ul>
                    
                    
                </div>
            </div>    
    </nav>
  )
}
