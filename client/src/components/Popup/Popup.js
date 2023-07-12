import React from 'react';
import { Container } from 'react-bootstrap';
import "./Popup.css";

function Popup({expanded ,onClose ,header ,content}) {
  return (
    <div className='all-screen' onClick={onClose}>
      <Container className={expanded ? 'popup-web' : 'popup-mobile'}>
        <h2 className='popup-header text-center'>{header}</h2>
        <p className='popup-content text-center'>{content}</p>
      </Container>
    </div>
  )
}

export default Popup;