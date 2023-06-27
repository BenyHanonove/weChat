import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {moveToSettingsPage ,moveToChatPage} from "../../functions/url.js";
import "./BottomNavbar.css";

function BottomNavbar() {
  return (
    <Navbar fixed="bottom" bg="light" className="justify-content-center">
      <Nav className="mr-auto">
        
        <Nav.Link onClick={moveToSettingsPage} className='bottom-navbar'>
          <span className="nav-link-content">⚙️</span>Settings
        </Nav.Link>

        <Nav.Link  id="up" className='bottom-navbar'>
          <span className="nav-link-content">➕</span>Add User
        </Nav.Link>

        <Nav.Link onClick={moveToChatPage} className='bottom-navbar'>
        <span className="nav-link-content">💬</span>Chats
          </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default BottomNavbar;
