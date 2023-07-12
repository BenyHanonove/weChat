import 'bootstrap/dist/css/bootstrap.css';
import {Route ,Routes ,BrowserRouter} from "react-router-dom";
import IndexPage from "./pages/IndexPage.js";
import SigninPage from './pages/SigninPage.js';
import SignupPage from './pages/SignupPage.js';
import ChatsPage from './pages/ChatsPage.js';
import SettingsPage from './pages/SettingsPage.js';
import FriendsPage from './pages/FriendsPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path='/login' element={<SigninPage/>}/>
        <Route path='/register' element={<SignupPage/>}/>
        <Route path='/chats' element={<ChatsPage/>} />
        <Route path='/settings' element ={<SettingsPage/>}/>
        <Route path='/friends' element ={<FriendsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
