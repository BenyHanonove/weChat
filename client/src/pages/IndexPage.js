import React, { useState } from 'react';
import Start from "../components/Start/Start.js";
import BottomNavbar from '../components/BottomNavbar/BottomNavbar.js';

function IndexPage() {

  const [connectedUser ,SetConnectedUser] = useState(true);

  return (
    <div> 
      {!connectedUser ? <BottomNavbar/> :<Start/>} 
    </div>
  )
}

export default IndexPage;