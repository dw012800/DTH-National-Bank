import Header from "../Components/Header"
import Login from "./LoginPage"
import { useParams } from "react-router";

const Transactions = () => 
{
     const cern =  fetch("http://localhost:3000/all") 
    .then(response => response.json())
    .then(data => console.log(data));



  const params = useParams()

    return(
         
<>

<Header/>

<h1>Welcome </h1>

</>
    )





}





export default Transactions