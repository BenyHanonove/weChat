import React from 'react';
import {Row ,Col ,Container} from "react-bootstrap";
import "./Settings.css";

function Settings({expanded}) {

  const options = ["✏️ Edit Profile", "🤝 Invite a Friend", "🔒 Privacy", "❓ Help & Support", "ℹ️ About Us", "🚪 Log Out"];
  const descriptions = [
    "Updates user profile information",
    "Sends a friend invitation",
    "Manages privacy preferences",
    "Provides assistance and support",
    "Displays information about the company or organization",
    "Logs the user out of the current session",
  ];

  return (
    <Container className={expanded ? 'settings-web' :'settings-mobile'}>

        <Row className={expanded ? 'settings-header-web' : 'settings-header-mobile'}>
            <h1>Settings</h1>
        </Row>    
    
        <Row className='settings-menu'>
          {
            options.map((item, index)=>(
              <Col className='setting-item' key={index} xs={12} md={6} lg={4}>
                <h5 className='setting-item-header'>{item}</h5>
                <p>{descriptions[index]}</p>
              </Col>
            ))
          }
        </Row>

          <Row className='delete-account'>
            <Col xs={12}>
              <h5  className={expanded ? 'text-center setting-item-header' : 'setting-item-header'}>🗑️ Delete Account</h5>
              <p className={ expanded ? 'text-center' : null}>Removes the user account permanently</p>
            </Col>
          </Row>


    </Container>
  )
}

export default Settings;