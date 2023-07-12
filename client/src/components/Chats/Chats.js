import React from 'react';
import {Col ,Row ,Form, Container } from "react-bootstrap";
import "./Chats.css";
import Chat from '../Chat/Chat';

function Chats({expanded}) {

  const emptyImage = "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png";
  const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <Container className={!expanded ? "chats-mobile" : "chats-web"}>

        <Col className='chats-search'>

          <h3 className='text-center'>Chats</h3>

          <Row className='chats-search'>          
            <Form.Control className='chats-search-input' 
            placeholder='Enter username...' 
            />
          </Row>          
        

          <Container className='scroll-chats'>
            {
              num.map((item)=>(
                <Chat key={item}/>
              ))
            }
          </Container>

        </Col>

    </Container>
  )
}

export default Chats;