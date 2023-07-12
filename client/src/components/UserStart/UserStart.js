import React, { useState } from 'react';
import {Button ,Col ,Row} from "react-bootstrap";
import LottieAnimation from '../LottieAnimation/LottieAnimation.js';
import HomePageLottie from "../../assets/HomePageLottie.json";
import Popup from "../Popup/Popup.js";
import {moveToChatsPage} from "../../functions/url.js";
import {optionsMap} from "../../functions/consts.js";
import "./UserStart.css";

function UserStart({expanded}) {

    const slogan = "It's great to see you again! We hope you had a fantastic break. How can we help you today in our chat app?";
    const [popupOpen ,setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
      };

    

  return (
    <div>
        
        <Row className= {expanded ? 'user-start-web': 'user-start-mobile' }>
            
            <Col className='Lottie-user' xs={12}>
                <LottieAnimation animationData={HomePageLottie} />
            </Col>

            <Col className='header' xs={12}>
                <h5>{slogan}</h5>
            </Col>
        
            <Col className='btns' xs={12}>
                <Button className='btn-user-start-left' onClick={moveToChatsPage}>Chat now</Button>
                <Button className='btn-user-start-right' onClick={openPopup}>Invite friend</Button>
            </Col>

        </Row>

        {!popupOpen  ? 
        null 
        : 
        <Popup
        expanded={expanded} 
        isOpen={popupOpen} 
        onClose={closePopup} 
        onOpen = {openPopup}
        data={optionsMap["invite"]}
        />}

    </div>
  )
}

export default UserStart;