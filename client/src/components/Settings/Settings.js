import React ,{useState} from 'react';
import {Row ,Col ,Container} from "react-bootstrap";
import Popup from '../Popup/Popup';
import {moveToIndexPage} from "../../functions/url.js";
import {optionsMap} from "../../functions/consts.js"
import "./Settings.css";

function Settings({expanded}) {

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData ,setPopupData] = useState(null);

  const openPopup = (val ,key) => {

    if(key === "logout"){
     moveToIndexPage(); 
     return;
    }

    setPopupData(val)
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPopupData(null);
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
                <h5 className='setting-item-header' onClick={()=>openPopup(value ,key)}>{value.label}</h5>
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
        onOpen = {openPopup}
        data={popupData}
        />}

    </Container>
  )
}

export default Settings;