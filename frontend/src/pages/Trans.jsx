import Header from "../Components/Header"
import Login from "./LoginPage"
import { useParams } from "react-router";
import { useState, useEffect } from 'react';



let index = 0;

function Transactions () 
{     
    let [stuff, setStuff] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/all')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setStuff(data.json);
           
            console.log(stuff)
            
          });
         
      }, []);

      return (
        
    
        <div>
      <> 
        {stuff.map((stuff) => (
       <h1>hello: {stuff.Username}</h1>
        ))}</>
      </div>
       
        
        
       
        
        
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

















































































































































                                                                                                                       
 
                                                                                                                                                                                                                                                                                                                                                                                                                     