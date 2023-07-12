import React, { useState } from 'react';
import Start from "../components/Start/Start.js";
import HomePage from './HomePage.js';

function IndexPage() {

  const [connectedUser ,SetConnectedUser] = useState(true);

  return (
    <div> 
      {connectedUser ? <HomePage/> :<Start/>} 
    </div>
  )
}

export default IndexPage;