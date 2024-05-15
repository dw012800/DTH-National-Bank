import Header from './Components/Header';
import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Tron from './Components/Form';
import { Form, Container, Row, Col } from "react-bootstrap";



function App() {
  return (
 <div className="App">   
 <BrowserRouter>
  <Header/>

 <app-body/>

       <h1>
        Welcome to the DTH Bank
       </h1>   
       
     

      <img src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG0zNTMzcnlwcXFkaGh5ZDh5OGdvYnR0aDJtMHlzNWthdWt5cHk3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pxj2KTQfem75GWBxjo/giphy.gif"/>
<Routes>
<Route exact path="/user" element={<loginPage/>}/>

</Routes>
  <Tron/>
   </BrowserRouter>     



   </div>
  );
}

export default App;
