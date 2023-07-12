import React from 'react';
import { Button, Container } from 'react-bootstrap';
import {moveToIndexPage} from "../../functions/url.js";
import "./Popup.css";

function Popup({expanded ,onClose ,onOpen ,data}) {

  const handleContainerClick = (event) => {
    if (event.target.classList.contains('all-screen')) {
      onClose();
    }
  };


  return (
    <div className='all-screen' onClick={handleContainerClick}>
      <Container className={expanded ? 'popup-web' : 'popup-mobile'}>
        <h2 className='popup-header text-center'>{data.label}</h2>
        <p className='popup-content text-center'>{data.popText}</p>

        {!data.link ? 
        null 
        :
        <Container className='link'>
          <p className='text-center link'>{data.link}</p>
        </Container>
        }

        {!data.btnText ? 
        null 
        : 
        <Container className='popup-btn'>
          <Button className="btn-danger" onClick={moveToIndexPage}>{data.btnText}</Button>
        </Container>
        } 

      </Container>
    </div>
  )
}

export default Popup;