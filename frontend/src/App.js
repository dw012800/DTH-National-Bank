import Header from './Components/Header';
import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Tron from './Components/Form';
import Home from './pages/home';
import MyForm from './pages/Create';
import Transactions from './pages/Trans';
import Login from './pages/LoginPage';
import { useEffect, useState } from "react";




function App(props) {
  const [User, setUser] = useState(null);

  const URL = "http://localhost:3000/all/";

  const GetUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setUser(data);
  };




  useEffect(() =>{ GetUser()}, []);







  return (
 <div className="App">   
 
      
 <Routes>
 <Route exact path="/" element={<Home/>}/>
<Route exact path="/Create" element={<MyForm/>}/>
<Route exact path="/Transaction" element={<Transactions/>}/>
<Route exact path="/Log" element={<Login/>}/>

</Routes>
 
        



   </div>
  );

  };

export default App;
