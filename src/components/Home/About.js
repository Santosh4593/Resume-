import React from 'react';
import styles from '../../styles/Home/About.module.css';
import img1 from '../../images/AbtImg1.png';
import img2 from '../../images/abtImg2.png';
import img3 from '../../images/AbtImg3.png';
import arrow from '../../svgFiles/arrow.js';
import { Link } from 'react-router-dom';
import Arrow from '../../svgFiles/arrow.js';

export default function About() {
    const data = [
        {key: 1,
        mainHead: "Gen-AI Powered",
        subHead: "Hiring Solution.",
        content: "Our vision is to revolutionize the way you present your Resume with AI Powered Hiring Solution.",
        button: "Get Started",
        img: img1
        },
        {key: 2,
        mainHead: "Optimize evaluation with ",
        subHead: "real-time Global Connectivity.",
        content: "Experience unprecedented efficiency in your processes with our LLM-optimized solution, leveraging cutting-edge AI technology with Gemini-pro providing Realtime connectivity to data around the globe.",
        button: "Get Started",
        img: img2
        },
        {key: 3,
        mainHead: "Screening with AI Precision",
        subHead: "Find Your Perfect Match Effortlessly.",
        content: "Experience the power of AI-based screening to efficiently identify top candidates with unparalleled accuracy. Transform your hiring process with AI-powered screening, ensuring precise matches between candidates and your job criteria for optimal recruitment outcomes.",
        button: "Get Started",
        img: img3
        },
    ]
  return (
    <div className={styles.abtWrapper}>
        <div className={styles.abtMain}>
            {data.map((item, key)=> (
                <div className={`${styles.abtData} ${key % 2 === 0 ? styles.even : styles.odd}`}>
                    <div className={styles.abtText} data-aos="fade-up-right">
                        <div className={styles.abtMainHead}>{item.mainHead}</div>
                        <div className={styles.abtSubHead}>{item.subHead}</div>
                        <div className={styles.abtContent}>{item.content}</div>
                        <div className={styles.abtLine}></div>
                        <Link className={styles.abtButton}>{item.button}<Arrow /></Link>  
                    </div>
                    <div className={styles.abtImg}
                     data-aos="fade-up-left">
                        <img src={item.img}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
