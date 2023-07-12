import React, { useEffect, useState } from 'react';
import {Container ,Row ,Col ,Form, Button ,Image} from "react-bootstrap";
import "./FriendsManger.css";


function FriendsManger({expanded}) {

    const names = ["david cohen" , "moshe levi" ,"oren mazi" ,"dima bonz" ,"david molik" ,"eden drori" ,"levi mark" ,"eden attias" ,"beny hanonve"];
    const emptyImage = "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png";
    const data = ["david12" , "xxx_moshe_levi" ,"oren_mazi1" ,"dima_dmz" ,"david_bad_boy" ,"edenx13i" ,"leviXmark" ,"eden_attias" ,"benyx15"];

    const [foundUsers ,setFoundUsers] = useState(null);
    const [userInput ,setUserInput] = useState(null);

   
    //function that hadels the search
    const handelSearch =()=>{

      //set empty array for finding users
      var arr = [];

      //if the input empty retrun nothing
      if(userInput === ""){
        setFoundUsers("");
        return;
      }

      //search if the users has substring inside there username 
      data.forEach(element => {
        if(element.indexOf(userInput) !== -1){
            arr.push(element);
        }
      });

      //set the found array to the new arr we create
      setFoundUsers(arr);
    };

    useEffect(()=>{
      handelSearch();
    },[userInput]);



  return (
    <Container className={expanded ? 'friends-web' : 'friends-mobile'}>

      <Row className='friends'>

        <Col className='friends-search' xs={12} md={6} lg={6}>

          <h3 className='text-center'>Search</h3>

          <Row className='friends-search'>          
            <Form.Control className='friends-search-input' 
            placeholder='Enter username...' 
            onChange={(event)=>{{
              setUserInput(event.target.value);
            }}}/>
          </Row>          
        
          {!foundUsers ? null :
          <Container className='scroll-view-search'>
            {
              foundUsers.map((item ,index)=>(
                <Row className='new-friend' key={index}>
                  <p className='new-friend-text'>{`@${item}`}</p>
                  <Button className='new-friend-btn'>Add</Button>
                </Row>
              ))
            }  
          </Container>
          }


        </Col>

        {!expanded ? null :                
        <Col className='my-friends' xs={12} md={6} lg={6}>
          <h3 className='text-center'>My Friends</h3>

          <Row className='my-friends'>
            {

              names.map((item ,index)=>(
                <Col className='my-friend' key={index} xs={6} md={6} lg={4}>
                  <p className='my-friend-header'>{item}</p>
                  <Image className='my-friend' src ={emptyImage} fluid/>
                </Col>
              ))
            }

              <Button>See all</Button>
          </Row>

        </Col>}

      </Row>
    </Container>
  )
}

export default FriendsManger;