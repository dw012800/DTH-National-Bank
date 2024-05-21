import Header from './Components/Header';
import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Tron from './Components/Form';
import { User } from './pages/LoginPage';
import Home from './pages/home';
import Registration from './pages/Create';
import Transactions from './pages/Trans';



function App() {
  const URL = "http://localhost:3000/";
  return (
 <div className="App">   
 
      
 <Routes>
 <Route exact path="/" element={<Home/>}/>
<Route exact path="/user" element={<User/>}/>
<Route exact path="/Create" element={<Registration/>}/>
<Route exact path="/Transaction" element={<Transactions/>}/>
</Routes>
 
        



   </div>
  );
}

export default App;
