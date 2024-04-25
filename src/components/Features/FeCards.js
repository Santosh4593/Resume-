import React from 'react'
import styles from '../../styles/Features/FeCards.module.css';
import Eclipse from '../../images/Eclipse.png';
import RightMark from '../../svgFiles/rightMark';

export default function FeCards() {
    const data = [
        {
            key:1, 
            img:"",
            heading:"Format",
            pt1:"File Format and style",
            pt2:"resume length",
            pt3:"long bullet points with suggestions on how to shorten",
        },
        {
            key:2, 
            img:"",
            heading:"Format",
            pt1:"File Format and style",
            pt2:"resume length",
            pt3:"long bullet points with suggestions on how to shorten",
        },
        {
            key:3, 
            img:"",
            heading:"Format",
            pt1:"File Format and style",
            pt2:"resume length",
            pt3:"long bullet points with suggestions on how to shorten",
        },
        {
            key:4, 
            img:"",
            heading:"Format",
            pt1:"File Format and style",
            pt2:"resume length",
            pt3:"long bullet points with suggestions on how to shorten",
        },
        {
            key:5, 
            img:"",
            heading:"Format",
            pt1:"File Format and style",
            pt2:"resume length",
            pt3:"bullet points with suggestions on how to shorten",
        }
    ]
  return (
    <div className={styles.cardsWrapper}>
    <div class={styles.radialOne}></div>
    <div class={styles.radialTwo}></div>
        <div className={styles.cardsMain}>  
            <div className={styles.cardsHeading} data-aos="fade-up-right">Our AI-powered resume checker goes beyond typos and punctuationt</div>
            <div className={styles.cardsSubHeading} data-aos="fade-up-left">We’ve built-in Gemini to help you create a resume that’s tailored to the position you’re applying for. rtt</div>
            <div className={styles.cardsContainer} data-aos="flip-left">
                {data.map((item, index)=> (
                    <div className={styles.eachItem}>
                        <img  className={styles.itemImg} src={Eclipse} alt="profile pic" />
                        <div className={styles.itemHeading}>{item.heading}</div>
                        <ul className={styles.itemList}>
                            <li className={styles.eachItemList}><span className={styles.eachItemIcon}><RightMark /></span><span className={styles.eachItemText}>{item.pt1}</span></li>
                            <li className={styles.eachItemList}><span className={styles.eachItemIcon}><RightMark /></span><span className={styles.eachItemText}>{item.pt2}</span></li>
                            <li className={styles.eachItemList}><span className={styles.eachItemIcon}><RightMark /></span><span className={styles.eachItemText}>{item.pt3}</span></li>
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}
