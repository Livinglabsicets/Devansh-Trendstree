import React, {useState} from 'react';

import './screen4.css';
import sunVideo from '../../Asserts/Sun-video.mp4';
import { useNavigate } from 'react-router-dom';
import PlanetVideo from '../../Asserts/Planet2.mp4';
import imageIcon from '../../Asserts/back-icon.png';
 import moonImage from '../../Asserts/Moon-Image.png';
const Screen4 = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  
  const handlePlanetClick = () => {
    setIsClicked(!isClicked);
  };
 
  return (
    <div className="home">
 
      <div className="sun">
           
             <img src={imageIcon} className='imageClass' onClick={() => navigate(`/theme`)}/>
            <video
                 className="sun-video"
                 src={sunVideo}
                 loop
                 muted
                 autoPlay
            />
      </div>

      <div className="planet-moons">
        <div className="planet">
          <div className='planet1-class'>
            <video class="planet1" src={PlanetVideo} loop muted autoplay></video>
            <p className='planet1-name'>Insurance Transformation</p>
          </div>

          <div className='planet2-class'>  
            <video class="planet2" src={PlanetVideo} loop muted autoplay></video>
            <p className='planet2-name'>Customer Experience</p>
          </div>

          <div className='planet3-class'>
            <video class={`planet3 ${isClicked ? 'clicked' : ''}`} src={PlanetVideo} loop muted autoplay onClick={handlePlanetClick}></video>
            <div className='planet3-full-name'>
              <p className='planet3-name'>Sustainable</p>
              <p className='planet3-sub-name'> Insurance</p>
            </div>
          </div>

          <div className='planet4-class'>
            <video class="planet4" src={PlanetVideo} loop muted autoplay></video>
            <p className='planet4-name'>Security & Risk Assessment</p>
          </div>

          <div className='planet5-class'>
            <video class="planet5" src={PlanetVideo} loop muted autoplay></video>
            <p className='planet5-name'>Sharing Economy</p>

          </div>
        </div>
        <div className="moons">
          <div className='moon1-class'>
            <img src={moonImage} className='moon1' />
            <div className='moon-name'>
              <p>Green Insurance</p>
              <p className='moon-name-last'>Products</p>
            </div>
          </div>
          <div className='moon2-class'>
            <img src={moonImage} className='moon2' />
            <div className='moon-name'>
              <p>Environment Liability</p>
              <p className='moon-name-last'>Coverage</p>
            </div>
            
          </div>
          <div className='moon3-class'>
            <img src={moonImage} className='moon3' />
            <div className='moon-name'>
              <p>Sustainable</p>
              <p className='moon-name-last'>Investments</p>
            </div>
          </div>
          <div className='moon4-class'>
            <img src={moonImage} className='moon4' />
            <div className='moon-name'>
              <p>Sustainable Supply</p>
              <p className='moon-name-last'>Chain management</p>
            </div>
          </div>

        </div>
        
      </div>
      

      <div className="map">
        <div className="insuranceMap">
            

            
        </div>
      </div>
    </div>
  );
};
 
export default Screen4;