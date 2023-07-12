import React ,{useState ,useEffect} from 'react'
import Navigation from '../components/Navigation/Navigation.js';
import Settings from '../components/Settings/Settings.js';

function SettingsPage() {

  const [mobileView ,setMobileView] = useState(false);

  useEffect(()=>{
    eventResize();
  },[]);

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
        <Settings expanded={mobileView}/>
    </div>
  )
}

export default SettingsPage;