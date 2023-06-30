import React, { useEffect } from 'react';
import {Container ,Nav ,Navbar} from "react-bootstrap";
import "./Navigation.css";


function Navigation({expanded ,handelResize}) {

  const navLinks = ["Home","Add new friend","Settings"]


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

          <Navbar bg="transparent" expand="lg" className="sidebar">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
              
              {navLinks.map((item, index) => (
                <Nav.Link className="nav-text-side-bar" key={index} href={item.href}>
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
                <Nav.Link className="nav-text-top-bar" key={index} href={item.href}>
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