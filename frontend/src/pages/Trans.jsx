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
       <div id="transactionPage">   
        <Header />
          <h2>Bank Accounts</h2>
            <div>
                <div className="Debit">

                </div>
                <div className="FundsDisplay">
                    Name's Checking Account
                </div>
            </div>
            <img class="creditCard" src="https://t3.ftcdn.net/jpg/03/89/93/32/360_F_389933228_BPMlKUev7J1u8AhZNhWAwRQqmoYwLDIM.jpg"></img>
            <h3 id="creditCard"> Your Name</h3>
            <ul className="transactions"></ul>
           
          {stuff
          .map((stuff) => (
            <>
            <h1>Welcome {stuff.Username}</h1>
            <h1>{stuff.name}</h1>
            </>
          ))}
           <h2 id="account">Checking Account</h2>
           <h4 id="account1">Balance: $50,000</h4>
        </div>
      );
   

  
        

} 

    







export default Transactions;