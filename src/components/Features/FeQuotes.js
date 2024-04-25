import React from 'react';
import styles from '../../styles/Features/FeQuotes.module.css';
import ReviewImg from '../../images/reviewImg.png';
import { Link } from 'react-router-dom';
import Img1 from '../../images/quoteImg1.jpeg';
import Img2 from '../../images/quoteImg2.jpg';
import Img3 from '../../images/quoteImg3.jpg';
import {useState, useEffect} from 'react';

export default function FeQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      setIndex((prevIndex)=> (prevIndex === data.length -1 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      id: 1,
      image: Img1,
      content: 'Enhance Executive has changed my life: Oneweek & four interviews later, I will be making 150% more doing the job I choose.',
      name: 'JENICA',
      post: 'SOLUTION ENGINEER',
    },
    {
      id: 2,
      image: Img2,
      content: 'Enhance Executive has changed my life: Oneweek & four interviews later, I will be making 150% more doing the job I choose.',
      name: 'JENICA',
      post: 'SOLUTION ENGINEER',
    },
    {
      id: 3,
      image: Img3,
      content: 'Enhance Executive has changed my life: Oneweek & four interviews later, I will be making 150% more doing the job I choose.',
      name: 'JENICA',
      post: 'SOLUTION ENGINEER',
    },
  ];
  
  return (
    <div className={styles.quoteWrapper}>
        <div className={styles.quoteMain}>
            <div className={styles.quoteContainer} data-aos="flip-up">
                <div className={styles.quoteCarousel}>
                  <div className={styles.slides}>
                    {data.map((item, idx)=> (
                      <div
                      key={item.id}
                      className={idx === index ? styles.slideActive : styles.slide}>
                        <img  className={styles.slideImg} src={item.image} />
                        <div className={styles.slideContent}>{item.content}</div>
                        <div className={styles.slideName}>{item.name}</div>
                        <div className={styles.slidePost}>{item.post}</div>
                        <div className={styles.slideLine}></div>
                        <div className={styles.slideUdemy}>Udemy</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.carouselIndicator}>
                  {data.map((_, i) => (
                    <div
                      key={i}
                      className={i === index ? styles.indicatorActive : styles.indicator}
                    />
                  ))}
                  </div>
                </div>
                <div className={styles.quoteText}>
                    <div className={styles.quoteHeading}>Your resume is an extension of yourself -make one that’s truly you</div>
                    <Link className={styles.quoteButton}>Know more</Link>
                    <img className={styles.quoteReview} src={ReviewImg} alt="review Img" />
                </div>
            </div>
        </div>
    </div>
  )
}
