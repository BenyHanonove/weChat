import React, { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import BackButton from "../components/BackButton/BackButton.js"

function ChatPage() {

  const [mobileView ,setMobileView] = useState(false);

  const eventResize = () =>{
    if(window.innerWidth<992){
      setMobileView(false);
    }else{
      setMobileView(true)
    }
  };

  return (
    <div>
      <Navigation expanded={mobileView} handelResize={eventResize}/>
      <BackButton btnText="Chat" showLogo={false} expanded={mobileView}/>
    </div>
  )
}

export default ChatPage;