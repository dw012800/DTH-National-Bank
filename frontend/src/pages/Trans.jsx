import Header from "../Components/Header"
import Login from "./LoginPage"
import { useParams } from "react-router";
import { useState, useEffect } from 'react';





function Transactions () 
{     
    const [stuff, setStuff] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/all')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setStuff(data);
          });
      }, []);
let id = [1];
const index = [1,2,3,4,5,6]


console.log(stuff)
//stuff.forEach()

      return (
       <div>   
        <Header />
          <h2>Bank Accounts</h2>
            <div>
                <div className="Debit">

                </div>
                <div className="FundsDisplay">
                    Name's Checking Account
                </div>
            </div>
            <ul className="transactions"></ul>
          {stuff
          .map((stuff) => (
            <>
            <h1>Welcome {stuff.Username}</h1>
            <h1>{stuff.name}</h1>
            </>
          ))}
        </div>
      );
   

  
        

} 

    







export default Transactions;