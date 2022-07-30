import { Addbank } from './Components/Pages/Addbank';
import './common.css';
import Navbar from './Components/Pages/Navbar';
import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./Components/Pages/Home";
import OnlineBanking from "./Components/Pages/OnlineBanking";
import SearchBank from "./Components/Pages/SearchBank";
import ContactUs from "./Components/Pages/ContactUs"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/onlinebanking' element={<OnlineBanking/>}/>
      <Route path='/searchbank' element={<SearchBank/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      {/* <Route path='/onlinebanking/debit' element={<Debit/>}/> */}
    </Routes>
    </BrowserRouter>

    
    
  );
}

export default App;


  
 
