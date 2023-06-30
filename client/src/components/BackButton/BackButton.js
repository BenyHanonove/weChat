import React, { useState } from 'react';
import leftCustomIcon from '../../assets/Arrow left_custom_icon.json';
import './BackButton.css';
import Lottie from 'react-lottie';

function BackButton({btnText ,showLogo }) {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const lottieOptions = {
    loop: true,
    autoplay: false, 
    animationData: leftCustomIcon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='back-btn'>

    {!showLogo ? null :
    (
      <div className="lottie-container"
        onMouseEnter={()=>{setIsAnimationPlaying(true)}}
        onMouseLeave={()=>{setIsAnimationPlaying(false)}}
      >

        <Lottie  
            className="back-icon"
            options={lottieOptions}
            isPaused={!isAnimationPlaying}
            isStopped={!isAnimationPlaying} 
        />
      
      </div>

    )
    }

        <h1 className='back-header'>{btnText}</h1>
    
    </div>
  );
}

export default BackButton;
