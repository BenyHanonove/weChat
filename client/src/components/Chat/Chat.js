import React from 'react'
import {Container ,Row ,Col ,Image} from 'react-bootstrap';
import "./Chat.css";

function Chat() {

    const userData = {
        username:"benyx13",
        image:"https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png",
        lastMsg:"Ok i will send you the demo",        
    };


  return (
    <Container className='chat'>
        <Row className='chat'>

            <Col className='chat-image' xs={3}>
                <Image fluid className='image-profile' src={userData.image}/>
            </Col>

            <Col className='last-msg' xs={7}>
                <h4>{userData.username.toUpperCase()}</h4>
                <p>{userData.lastMsg}</p>
            </Col>

            <Col className='last-time' xs={2}>
                friday
            </Col>

        </Row>
    </Container>
  )
}

export default Chat;