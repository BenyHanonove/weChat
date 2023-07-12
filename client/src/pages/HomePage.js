import React ,{useEffect, useState} from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import UserStart from '../components/UserStart/UserStart.js';

function HomePage() {
    
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
        <UserStart expanded={mobileView}/>
    </div>
  )
}

export default HomePage;