import Header from "../Components/Header"
import Login from "./LoginPage"
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import './Show.css'



let index = 0;

function Transactions () 
{     
    let [stuffs, setStuff] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/all')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setStuff(data);
           
            console.log(setStuff)
            console.log(stuffs)
            
          });
         
      }, []);

      return(
        
    
       <h1>Welcome:{stuffs.forEach}</h1>
        
        
       
        
        
      )
}
   

  // <div>   <div className="Debit">
//
  //          </div>
    //          <div className="FundsDisplay">
      //          <h1>Name's Checking Account</h1>
        //      </div>
         // </div> <ul className="transactions"></ul>
         //</div> 


export default Transactions;

 //<div>
        //<h1>Featured Products</h1>
        //<div className='item-container'>
          //{stuffs.map((element, index) => (
            //<div className='card'>
              //<h3>{element.Username}</h3>
              //<p>{element.name}</p>
            //</div>
          //))}
        //</div>
      //</div>















































































































































                                                                                                                       
 
                                                                                                                                                                                                                                                                                                                                                                                                                     