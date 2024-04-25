// import React from 'react';
import React, { useEffect, useRef } from 'react';
import Airtel from '../../images/airtel.png';
import UBA from '../../images/UBA.png';
import Paga from '../../images/paga.png';
import MTN from '../../images/MTN.png';
import Dangote from '../../images/dangote.png';
import Firstbank from '../../images/firstbank.png';
import Cloud from '../../images/cloud.png';
import Ebay from '../../images/ebay.png';
import Tux from '../../images/tux.png';
import Spotify from '../../images/spotify.png';
import Airbnb from '../../images/airbnb.png';
import Facebook from '../../images/facebook.png';
import Cocacola from '../../images/cocacola.png';
import Zoom from '../../images/zoom.png';
import Creativecloud from '../../images/creativecloud.png';
import Netflix from '../../images/netflix.png';
import Discord from '../../images/discord.png';
import Figma from '../../images/figma.png';
import Paypal from '../../images/paypal.png';
import Adobe from '../../images/adobe.png';
import styles from '../../styles/Home/Brand.module.css';

export default function Brand() {

    const data = [
        { rowOne: [Airtel, UBA, Paga, MTN, Dangote, Firstbank] },
        {rowTwo: [Cloud, Ebay, Tux, Spotify, Airbnb, Facebook, Cocacola] },
        {rowThree: [Zoom, Creativecloud, Netflix, Discord, Figma, Paypal, Adobe] }
    ]
  return (
    <div className={styles.brandWrapper}>
        <div className={styles.brandMain} data-aos="flip-right">
            {data.map((item, index)=> (
                <ul 
                className={styles.brandList}
                key={index}>
                    {Object.values(item)[0].map((image, imageIndex)=> (
                        <li className={styles.brandListItem}>
                            <div className={styles.brandListItemImg}
                            style={{ backgroundImage: `url(${image})`}}></div>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
  )
}
