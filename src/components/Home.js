import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import AOS from 'aos'
import About from './Home/About';
import Screener from './Home/Screener';
import Slider from './Home/Slider';
import Brand from './Home/Brand';
import Hero from './Home/Hero';
import Contact from './Home/Contact';
// import img1 from '../images/homeresumeImg.png';
// import img2 from '../images/homepcImg.png';
// import styles from '../styles/Home.module.css';

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, []);
  
  return (
    // <div className={styles.homeWrapper}>
    //     <div className={styles.homeMain}>
    //         <div className={styles.homeRowOne}>
    //             <div className={styles.homeRowOneLeft}>
    //                 <div className={styles.homeRowOneLeftHeading}>ATS Resume Checker: Review & Score Your Resume Online</div>
    //                 <div className={styles.homeRowOneLeftContent}>Get instant grade and feedback on how to improve your resume to be as effective as possible. Free addition to your Zety account.</div>
    //                 <Link to="/product" className={styles.homeRowOneLeftButton} >Check Your Resume</Link>
    //             </div>
    //             <div className={styles.homeRowOneRight}>
    //                 <img src={img1} />
    //             </div>
    //         </div>
    //         <div className={styles.homeRowTwo}>  
    //             <div className={styles.homeRowTwoLeft}>
    //                 <img src={img2} />
    //             </div>
    //             <div className={styles.homeRowTwoRight}>
    //                 <div className={styles.homeRowTwoRightContent}>
    //                 Our Resume Checker will automatically scan your resume for errors and mistakes.
    //                 And you’ll get tips for what skills and keywords to mention to get through the resume screening software.
    //                 <ul>
    //                     <li>
    //                     Upload or <Link to="/" >create your resume</Link> from scratch using our <Link  to="/" >professional resume templates.</Link></li>
    //                     <li>Score your resume against others in our database.</li>
    //                     <li> Fix your resume following our recommendations.</li>
    //                 </ul>
    //                 </div>
    //                 <Link  to="/product" className={styles.homeRowTwoRightButton} >Revive my Resume</Link>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div>
      <Hero />
      <About />
      <Slider />
      <Screener />
      <Contact />
      <Brand />

    </div>
  )
}
