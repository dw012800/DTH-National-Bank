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

index.findIndex(render)
console.log(stuff)
//stuff.forEach()

      return (
       <div>
          
          {stuff
          .map((stuff) => (
            <>
            <h1>Welcome {stuff.Username}</h1>
            <h1>{stuff.name}</h1>
            </>
          ))}
        </div>
      );
    };
function render(index)
{



    return(
        <h1></h1>
    )
}

    







export default Transactions;