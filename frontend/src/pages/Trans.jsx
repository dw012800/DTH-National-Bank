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
           
          
           <h2 id="account">Checking Account</h2>
           <h4 id="account1">Balance: $50,000</h4>
        </div>
      );
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















































































































































                                                                                                                       
 
                                                                                                                                                                                                                                                                                                                                                                                                                     