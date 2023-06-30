import React, { useState } from 'react';
import Start from "../components/Start/Start.js";
import ChatPage from './ChatPage.js';

function IndexPage() {

  const [connectedUser ,SetConnectedUser] = useState(false);

  return (
    <div> 
      {!connectedUser ? <ChatPage/> :<Start/>} 
    </div>
  )
}

export default IndexPage;