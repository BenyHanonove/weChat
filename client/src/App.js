import 'bootstrap/dist/css/bootstrap.css';
import {Route ,Routes ,BrowserRouter} from "react-router-dom";
import IndexPage from "./pages/IndexPage.js";
import SigninPage from './pages/SigninPage.js';
import SignupPage from './pages/SignupPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
