import React from 'react';
import {Button, Container ,Row} from "react-bootstrap"; 
import startLottie from "../../assets/statLottie.json";
import LottieAnimation from '../LottieAnimation/LottieAnimation.js';
import {moveToSigninPage} from "../../functions/url.js";
import "./Start.css";

function Start() {
  const slogan = "WeChat: Chatting Redefined, Connecting the World";
  const ad = "Chat with your friends free";

  return (
    <Container fluid className='start'>
      
      <Row className='start-first'>
        <LottieAnimation animationData={startLottie} />
      </Row>

      <Row className='start-second'>
        <h3 className='slogan-header'>{slogan}</h3>
        <h6 className='ad-text'>{ad}</h6>
        <Button className='start-btn' onClick={moveToSigninPage}>Get Start</Button>
      </Row>

    </Container>
  )
}

export default Start;