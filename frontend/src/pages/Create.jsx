import Header from "../Components/Header";
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import User from "./LoginPage";


 


 function Registration(props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [LoanOfficer, setOfficer] = useState('')
    const [creditApp, setCreditapp] = useState('')
    const [creditScore, setCreditScore] = useState('')
    const [CheckingAccount, setAccount] = useState('')
    const [name, setName] = useState('')

  const navigate = useNavigate()
  

    const onButtonClick = (props) => {
       
        
    
      console.log(username)
      console.log(password)
      console.log(email)
      console.log(phoneNumber)
      console.log(LoanOfficer)
      console.log(creditApp)
      console.log(creditScore)
      console.log(CheckingAccount)
      console.log(name)  
      navigate("/User")
     return(
<h1>{setName}</h1>
     ) 
     

    
   }




    return(
        <>
        <Header/>
        <div>
         
            <form action="post">
            <ul>
            <h1>Registration</h1>
           <li> <label>Username</label></li>
            <input type="text" onChange={(ev) => setUsername(ev.target.value)}  > 
            </input>
            <li>   <label>password</label> </li>
            <input type="password" onChange={(ev) => setPassword(ev.target.value)} ></input>
          <li>  <label>name</label></li>
            <input type="text" onChange={(ev) => setName(ev.target.value)}></input>
            <li>   <label>email</label> </li>
            <input type="email" onChange={(ev) => setEmail(ev.target.value)} ></input>
            <li>  <label>phone number</label> </li>
            <input type="number"onChange={(ev) => setPhoneNumber(ev.target.value)} ></input>
            <li>   <label>loanOfficer</label> <input type="checkbox"onChange={(ev) => setOfficer(ev.target.value)} ></input>  </li>
             <li><label> hasLoanApplicationPending</label><input type="checkbox"onChange={(ev) => setCreditapp(ev.target.value)} ></input></li>
            
           <li><label> creditScore</label></li> 
            <input type="number" onChange={(ev) => setCreditScore(ev.target.value)} ></input>
            <li><label> checkingAccount</label></li>
            <input type="number"onChange={(ev) => setAccount(ev.target.value)} ></input>
            <li> <input className={'inputButton'} type="button" onClick={onButtonClick} value={'submit'}  /></li> 
           </ul> 
          
            </form>
        </div>
      <img src = "https://media4.giphy.com/media/AuG7qwUzshT7lXy7FB/200w.webp?cid=ecf05e47dod613zffn3655qeibdwvj9xcykkeyac3uyvb1g3&ep=v1_gifs_related&rid=200w.webp&ct=g"/>
      <img src =  "https://media3.giphy.com/media/8xoZGp16eCZoN7KJ1d/200w.webp?cid=ecf05e47dod613zffn3655qeibdwvj9xcykkeyac3uyvb1g3&ep=v1_gifs_related&rid=200w.webp&ct=g"/>
        </>



    )

}
 

export default Registration;
