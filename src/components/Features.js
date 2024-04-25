import React from 'react'
import FeHero from './Features/FeHero';
import 'aos/dist/aos.css'
import AOS from 'aos'
import FeCards from './Features/FeCards';
import FeCheck from './Features/FeCheck';
import FeQuotes from './Features/FeQuotes';
import FeEvaluate from './Features/FeEvaluate';

export default function Features() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, []);
  
  return (
    <div>
      <FeHero />
      <FeCards />
      <FeCheck />
      <FeQuotes />
      <FeEvaluate />
    </div>
  )
}
