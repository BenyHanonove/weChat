import React, { useEffect } from 'react';
import {moveToChatsPage ,moveToIndexPage ,moveToSettingsPage ,moveToFriendsPage} from "../../functions/url.js";
import {Container ,Nav ,Navbar ,Image} from "react-bootstrap";
import "./Navigation.css";


function Navigation({expanded ,handelResize}) {

  const navLinks = ["Home" ,"Chats" ,"Friends" ,"Settings"]
  const emptyImage = "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png";
  const navHerf = [moveToIndexPage ,moveToChatsPage ,moveToFriendsPage ,moveToSettingsPage]

  useEffect(()=>{
    window.addEventListener('resize',handelResize);
    return ()=>{
      window.removeEventListener('resize',handelResize);
    };
  });

  return (
    <div>

      {expanded ?
      (
        <Container className='side-bar'>

          <Image className='profile' fluid src={emptyImage}/>

          <Navbar bg="transparent" expand="lg" className="sidebar">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
              
              {navLinks.map((item, index) => (
                <Nav.Link className="nav-text-side-bar" key={index} href={item.href} onClick={navHerf[index]}>
                  {item}
                </Nav.Link>
              ))}

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      )
      :
      (
        <div className='top-bar'>

        <Navbar bg="transparent" expand="lg" className="top-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column">
              
              {navLinks.map((item, index) => (
                <Nav.Link className="nav-text-top-bar" key={index} href={item.href} onClick={navHerf[index]}>
                  {item}
                </Nav.Link>
              ))}
            
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      )
      }

      

    </div>
  )
}

export default Navigation;