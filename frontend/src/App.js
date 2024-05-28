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
import Index from '.';
import Real from './pages/Trans2';
import ApiPage from './pages/trans3';





function App(props) {
  const [User, setUser] = useState(null);

  const URL = "http://localhost:3000/all/";

  const GetUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const stuff = data;
    console.log(stuff.name)
    
    return(
      <h1>data[0].name</h1>
    )
  };








  const createMember = async (member) => {
    // make post request to create people
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });
    // update list of people
    GetUser();
  };

 // useEffect(async() => GetUser(), []);
  useEffect(() =>{GetUser()}, []);
let id = [1 , 2 , 3]


  return (
 <div className="App">   
 
      
 <Routes>
 <Route exact path="/" element={<Home/>}/>
<Route exact path="/Create" element={<MyForm/>}/>
<Route exact path="/Transaction/:id" element={<ApiPage/>}/>
<Route exact path="/Log" element={<Login/>}/>
<Route exact path="/try"  element={<ApiPage/>}/>
</Routes>
 
        



   </div>
  );

  };

export default App;
