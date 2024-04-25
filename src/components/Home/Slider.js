import React from 'react';
import Carousel from "nuka-carousel";
import styles from '../../styles/Home/Slider.module.css';
import Priya from '../../images/Priya.png';
import Vikram from '../../images/Vikram.png';
import Rajesh from '../../images/Rajesh.png';
import Neha from '../../images/Neha.png';
import Arjun from '../../images/Arjun.png';
import Discord from '../../images/discordLogo.png'

export default function Slider() {
  const data = [
    {key:1,
    image:Priya,
    content:"Using this AI powered ATS  was a game-changer for our hiring process, significantly saving time and improving candidate matches. Its intuitive interface and accurate algorithms make it a must-have tool for any organization seeking efficient recruitment solutions.",
    name:"Priya Patel",
    position:"Media Executive, Human Resource",
    },
    {key:2,
    image:Vikram,
    content:"As an HR Manager, I found it incredibly helpful in streamlining our hiring process. It drastically reduced the time spent on manual screening and improved the quality of candidates we brought in for interviews.",
    name:"Vikram Sharma",
    position:"HR Manager, Recruiter",
    },
    {key:3,
    image:Rajesh,
    content:"As a recent graduate entering the job market, its intuitive interface made it easy to upload my resume and apply for multiple positions. I received prompt responses from companies and secured a job aligned with my skills and interests",
    name:"Rajesh Gupta",
    position:"Engineering Student, Recent Graduate",
    },
    {key:4,
    image:Neha,
    content:"As an experienced professional looking for new opportunities, I-Recruiter ATS provided a seamless job application process. Its AI-driven matching system ensured I was connected with roles that matched my expertise, saving me time and effort. ",
    name:"Neha Desai",
    position:"Sales Manager, Professional Job Seeker",
    },
    {key:5,
    image:Arjun,
    content:"Being responsible for campus recruitment, I-Recruiter ATS has been a lifesaver. It simplifies the process of sifting through numerous resumes from fresh graduates, ensuring we don't miss out on potential talent. ",
    name:"Arjun Singh",
    position:"TnP Manager, Campus Recruiter",
    }
    
  ]
  return (
    <div className={styles.sliderWrapper}>
      <div data-aos="flip-down">
      <Carousel
       className={styles.sliderMain}
      autoplay={true}  // Enable autoplay
      autoplayInterval={3000} // Set autoplay interval to 3 seconds (3000 milliseconds)
      wrapAround={true} // Enable wrap around so the carousel loops infinitely
      slidesToShow={1}
      cellSpacing={1}
      renderCenterLeftControls={null} // Hide previous button
      renderCenterRightControls={null} 
      renderBottomCenterControls={null}
      >
        {
          data.map((item)=> (
            <div className={styles.sliderCarousel}
            >
              <div 
              key={item.key}
              className={styles.sliderImgSection}>
                <div className={styles.sliderImg}   
                style={{ backgroundImage: `url(${item.image})`}}></div>
              </div>
              <div className={styles.sliderText}>
                <div className={styles.sliderContent}>{item.content}</div>
                <div className={styles.sliderName}>{item.name}</div>
                <div className={styles.sliderPosition}>{item.position}</div>
                <div className={styles.sliderDiscord}
                style={{ backgroundImage: `url(${Discord})`}}>
                  
                </div>
              </div>

            </div>
          ))
        }
      </Carousel>

      </div>
      
      
    </div>
  )
}
