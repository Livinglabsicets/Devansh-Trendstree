import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './screen1.css';
import backgroundVideo from '../../Asserts/Background-video-s1s2.mp4';

const Screen1 = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
    }
  }, []);

  const handleClick = () => {
    navigate('/industry');
  };

  return (
    <div className="video-container">
      <video 
        ref={videoRef}
        className="video-background" 
        autoPlay 
        loop 
        controls
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="text-box">
          <h1 className="heading-logo">
            <span >The</span>
            <span className="heading2">Immersive Trends</span>
            <span className='heading3'>Experience</span>
          </h1>
        </div>
        <div className="button-container">
          <button onClick={handleClick}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Screen1;