import React ,{useState} from 'react';
import {Row ,Col ,Container} from "react-bootstrap";
import "./Settings.css";
import Popup from '../Popup/Popup';

function Settings({expanded}) {

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupHeader, setPopupHeader] = useState('');
  const [popupContent, setPopupContent] = useState('');

  const openPopup = (header, content) => {
    setPopupHeader(header);
    setPopupContent(content);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPopupHeader('');
    setPopupContent('');
  };

  const optionsMap = {
    "editProfile":{
      label:"✏️ Edit Profile",
      description:"Updates user profile information",
      popText:null,
    },
    "invite":{
      label:"🤝 Invite a Friend",
      description:"Sends a friend invitation",
      popText:"here is your link please send this to a new user",
      link:"blah blah", 
    },
    "privacy":{
      label:"🔒 Privacy",
      description:"Manages privacy preferences",
      popText:"At our chat app, we place a paramount emphasis on your privacy."+  
      "We take extensive measures to protect your personal information, employingrobust security" + 
      "protocols to ensure encrypted and secure communication. Rest assured, we never disclose your" + 
      "data to any third parties. Your privacy is our top priority."
    },
    "help":{
      label:"❓ Help & Support",
      description:"Provides assistance and support", 
    },
    "about":{
      label:"ℹ️ About Us",
      description:"Displays information about the company", 
    },
    "logout":{
      label:"🚪 Log Out",
      description:"Logs the user out of the current session", 
    },
    "delete":{
      label:"🗑️ Delete Account",
      description:"Removes the user account permanently", 
    },
  };


  return (
    <Container className={expanded ? 'settings-web' :'settings-mobile'}>

        <Row className={expanded ? 'settings-header-web' : 'settings-header-mobile'}>
            <h1>Settings</h1>
        </Row>    
    
        <Row className='settings-menu'>
          {
            Object.entries(optionsMap).map(([key,value])=>(
              <Col className={expanded ? 'setting-item-web': 'setting-item-mobile'} key={key} xs={12} md={6} lg={4}>
                <h5 className='setting-item-header' onClick={()=>openPopup(value.label ,value.popText)}>{value.label}</h5>
                <p>{value.description}</p>
              
              </Col>
              
            ))
          }
        </Row>
        

        {!popupOpen  ? 
        null 
        : 
        <Popup
        expanded={expanded} 
        isOpen={popupOpen} 
        onClose={closePopup} 
        header={popupHeader} 
        content={popupContent}
        />}

    </Container>
  )
}

export default Settings;