import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import  { Redirect } from 'react-router-dom'
 

import { Form, Container, Row, Col } from "react-bootstrap";

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [Money, setMoney] = useState('')
  
  const navigate = useNavigate()

  const onButtonClick = () => {
    
      
  
    console.log(username)
    console.log(password)
navigate("/user")
  
  }
  return (
      <div className={'mainContainer'}>
        <div className={'titleContainer'}>
          <div>Login</div>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={username}
            placeholder="Enter A Cool Username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={'inputBox'}
          />
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
          />
        </div>
        <br />
        <div className={'inputContainer'}>
        <input
            value={Money}
            placeholder="Enter your inital deposit"
            onChange={(ev) => setMoney(ev.target.value)}
            className={'inputBox'}
          />
          <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div>
      </div>
       
    )








  }


export default Login