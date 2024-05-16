import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const Deposit = (props) => {
    const [Deposit, addamount] = useState('')
   
    
    const navigate = useNavigate()
  
    const onButtonClick = () => {
      
        
    
      console.log(Deposit)
      
  navigate("/user")
    
    }
    return (
        <div className={'mainContainer'}>
          <div className={'titleContainer'}>
            <div>Deposit</div>
          </div>
          <br />
          <div className={'inputContainer'}>
            <input
              value={Deposit}
              placeholder="how much you want to deposit;"
              onChange={(ev) => addamount(ev.target.value)}
              className={'inputBox'}
            />
          </div>
          <br />
          <br />
          <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={onButtonClick} value={'deposit'} />
          </div>
        </div>
         
      )
  
  
  
  
  
  
  
  
    }
  

    export default Deposit