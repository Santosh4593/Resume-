import React from 'react';
import Customization from '../../svgFiles/customization';
import Typos from '../../svgFiles/typos';
import StrongSummary from '../../svgFiles/strongSummary';
import Mesuarable from '../../svgFiles/mesuarable';
import WordChoice from '../../svgFiles/wordChoice';
import Formatting from '../../svgFiles/formatting';
import Custom from '../../images/custom.png';
import Typo from '../../images/typo.png';
import Summary from '../../images/summary.png';
import Results from '../../images/results.png';
import Choice from '../../images/choice.png';
import Format from '../../images/format.png';
import BlackBackground from '../../images/blackBackground.jpeg';
import BackImg from '../../images/backImg.jpg';
import styles from '../../styles/Features/FeCheck.module.css';
import { useState } from 'react';


export default function FeCheck() {

    const [flippedCards, setFlippedCards] = useState([]);

    const handleCardFlip = (index) => {
        if (!flippedCards.includes(index)) {
            setFlippedCards([...flippedCards, index]);
        }
    };

    const data = [
        {
            key:1,
            image: Custom,
            heading: "Customization",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

        },
        {
            key:2,
            image: Typo,
            heading: "Typos",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

        },
        {
            key:3,
            image: Summary,
            heading: "Strong Summary",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

        },
        {
            key:4,
            image: Results,
            heading: "Measurable Results",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

        },
        {
            key:5,
            image: Choice,
            heading: "Word Choice",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

        },
        {
            key:6,
            image: Format,
            heading: "Formatting",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

        }
    ]
  return (
    <div className={styles.checkWrapper}>
        <div className={styles.checkMain}>
            <div className={styles.checkHeading} data-aos="fade-up-right">What we Check::</div>
            <div className={styles.checkSubHeading} data-aos="fade-up-left">Whether you are updating or building a new one Resume Check will help.</div>
            <div className={styles.checkCards} data-aos="flip-right">
            {data.map((item) => (
                <div key={item.key} className={styles.eachCard}>
                <div className={styles.cardFront}>
                    <img className={styles.cardImg} src={item.image} alt={item.heading} />
                    <div className={styles.cardHeading}>{item.heading}</div>
                </div>
                <div className={styles.cardBack}>
                    <p className={styles.cardText}>{item.para}</p>
                </div>
                </div>
      ))}
    </div>

        </div>
    </div>
  )
}
