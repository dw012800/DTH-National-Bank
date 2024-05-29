import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const Withdraw = (props) => {
    const [withdraw, addamount] = useState('')
   
    
    const navigate = useNavigate()
  
    const onButtonClick = () => {
      
        
    
      console.log(withdraw)
      
  navigate("/user")
    
    }
    return (
        <div className={'mainContainer'}>
          <div className={'titleContainer'}>
            <div>Withdraw</div>
          </div>
          <br />
          <div className={'inputContainer'}>
            <input
              value={withdraw}
              placeholder="how much you want to withdraw;"
              onChange={(ev) => addamount(ev.target.value)}
              className={'inputBox'}
            />
          </div>
          <br />
          <br />
          <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={onButtonClick} value={'withdraw'} />
          </div>
        </div>
         
      )
  
  
  
  
  
  
  
  
    }
  

    export default Withdraw