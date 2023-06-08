import React, { useState } from 'react';
import Start from "../components/Start/Start.js";

function IndexPage() {

  const [connectedUser ,SetConnectedUser] = useState(false);

  return (
    <div> 
      {!connectedUser ? null :<Start/>} 
    </div>
  )
}

export default IndexPage;