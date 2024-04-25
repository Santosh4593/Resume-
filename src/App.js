import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from './components/Features';
import Product from './components/Product';
import Footer from './components/Footer';
import Video from './Video/IntroVideo.mp4';


function App() {
  
  const [videoPlayed, setVideoPlayed] = useState(true);

  const handleVideoEnd = () => {
    setVideoPlayed(false);
  }
  return (
    <div className="appContainer">
    {/* {videoPlayed ? (
      <div className={`videoPlayer ${videoPlayed ? '' : 'hidden'}`}>
        <video 
        src={Video}
        muted
        autoPlay
        onEnded={handleVideoEnd} 
        className="actualVideo"
        />
      </div>
    ) : */}
    {/* ( */}
      <Router className={`routerContent ${videoPlayed ? 'visible' : ''}`}>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/features" element={<Features />} /> 
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
    </Router>
    {/* )} */}
    </div>
    );
}

export default App;
