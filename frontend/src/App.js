import Header from './Components/Header';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
 <div className="App">   
<BrowserRouter>
  <Header/>
       <h1>
        Welcome to the DTH Bank
       </h1>   
       
     

      <img src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG0zNTMzcnlwcXFkaGh5ZDh5OGdvYnR0aDJtMHlzNWthdWt5cHk3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pxj2KTQfem75GWBxjo/giphy.gif"/>
   </BrowserRouter> 
   </div>
  );
}

export default App;
