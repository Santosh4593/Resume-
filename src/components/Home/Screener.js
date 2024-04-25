import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/screenerImg.png';
import Arrow from '../../svgFiles/arrow';
import styles from '../../styles/Home/Screener.module.css';

export default function Screener() {
  return (
    <div className={styles.screenWrapper}>
        <div className={styles.screenMain}>
            <div className={styles.screenText} data-aos="fade-up-right">
                <div className={styles.screenMainHead}><b>Transforming </b> Recruitment  Experience.</div>
                <div className={styles.screenSubHead}>Resume Screener</div>
                <div className={styles.screenContent}>Explore an extensive expertise with generative AI</div>
                <div className={styles.screenLine}></div>
                <Link className={styles.screenButton}>Get started<Arrow /></Link>
            </div>
            <div className={styles.screenImg} data-aos="fade-up-left">
                <img src={img}/>
            </div>
        </div>
    </div>
  )
}
