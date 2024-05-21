import Login from "../Components/Form"
import Header from "../Components/Header";
import Withdraw from "../Components/Withdrawl";
import Deposit from "../Components/Deposit";
import React, { useState } from 'react'





export function User(props)
{
  console.log(props.name) 

  const [User] = useState(null);

  return(

    <>
   
<Header/>
    <h1>Made it to Login</h1>

 <Withdraw/>
<Deposit/>
    </>   
  )


}

export default User;