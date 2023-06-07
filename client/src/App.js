import 'bootstrap/dist/css/bootstrap.css';
import {Route ,Routes ,BrowserRouter} from "react-router-dom";
import IndexPage from "./pages/IndexPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
