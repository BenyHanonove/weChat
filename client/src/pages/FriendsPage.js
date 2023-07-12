import React , {useEffect ,useState} from 'react';
import Navigation from "../components/Navigation/Navigation.js";
import FriendsManger from '../components/FreindsManger/FriendsManger.js';

function FriendsPage() {

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
        <FriendsManger expanded={mobileView} />
    </div>
  )
}

export default FriendsPage;