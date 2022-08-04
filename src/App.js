import './common.css';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./Components/Pages/Home";
import Administration from "./Components/Pages/Administration";
import SearchBank from "./Components/Pages/SearchBank";
import ContactUs from "./Components/Pages/ContactUs"
// import Debit from './Components/Pages/Debit';
import AddBranch from "./Components/Administration/AddBranch";
import ShowBranch from './Components/Administration/ShowBranch';
// import Debit from './Components/Pages/Deposit';
import ShowItems from './Components/Pages/ShowItems';
import Deposit from './Components/Pages/Deposit';
import CreateAcc from './Components/CreateAccount/CreateAcc';
import { ManageAccount } from './Components/Account/Manage_Account';
import UserDyta from './Components/Account/UserDyta';
import Transaction from './Components/Account/Transaction';
import { Login } from './Components/Account/Login';
import Account from './Components/Pages/Account';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login/manageaccount' element={<ManageAccount/>}/>
      <Route path='/Administration' element={<Administration/>}/>
      {/* <Route path='/searchbank' element={<SearchBank/>}/> */}
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/account' element={<Account/>}/>
      {/* <Route path='/account/manageaccount' element={<ManageAccount/>}/> */}
      <Route path='/components/pages/AddBranch' element={<AddBranch />}/>
      <Route path='/components/pages/showbranch' element={<ShowBranch/>}/>
      <Route path='/components/pages/deposit' element={<Deposit/>}/>
      <Route path='/components/pages/showitems' element={<ShowItems/>}/>
      <Route path='/components/account/userdyta' element={<UserDyta/>}/>
      <Route path='/components/account/transaction' element={<Transaction/>}/>
      <Route path='/components/createaccount/createacc' element={<CreateAcc/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


    // <div className="App">
    //   <Addbank/>
    
    // </div>
 
