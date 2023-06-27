import 'bootstrap/dist/css/bootstrap.css';
import {Route ,Routes ,BrowserRouter} from "react-router-dom";
import IndexPage from "./pages/IndexPage.js";
import SigninPage from './pages/SigninPage.js';
import SignupPage from './pages/SignupPage.js';
import SettingsPage from './pages/SettingsPage.js';
import ChatPage from './pages/ChatPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path='/login' element={<SigninPage/>}/>
        <Route path='/register' element={<SignupPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/chat' element={<ChatPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
