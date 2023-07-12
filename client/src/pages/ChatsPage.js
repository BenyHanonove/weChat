import React, { useState ,useEffect} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Chats from '../components/Chats/Chats';

function ChatsPage() {

  const [mobileView ,setMobileView] = useState(false);

  useEffect(()=>{
    eventResize();
  },[]);

  const eventResize = () =>{
      if(window.innerWidth<992){
        setMobileView(false);
      }else{
        setMobileView(true);
      }
    };

  return (
    <div>
      <Navigation expanded={mobileView} handelResize={eventResize}/>
      <Chats expanded={mobileView}/>
    </div>
  )
}

export default ChatsPage;