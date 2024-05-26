import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [Username, setU] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [LoanOfficer, setOff] = useState("");
  const [creditApp, setApp] = useState("");
  const [creditScore, setScore] = useState("");
  const [CheckingAccount, setCheck] = useState("");
  const [name, setName] = useState("");
  


  const  handleSubmit = async (event,) => {
    event.preventDefault();
    console.log(`The name enter is :  ${name}`)
    console.log(`The Username choosen was: ${Username}`)
    const res = await fetch ("http://localhost:3000/User", {
        method: "POST",  
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
          },
          body: JSON.stringify({
            Username,
            email,
            phoneNumber,
            LoanOfficer,
            creditApp,
            creditScore,
            CheckingAccount,
            name
          })
        })
        const data = await res.json();
        if(res.status === 422 || !data){
          console.log("error")
        }else{
          console.log("success!!!!!")
        }
        console.log(name)
      }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Username:
        <input 
          type="text" 
          value={Username}
          onChange={(e) => setU(e.target.value)}
        />
      </label>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your Email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>Enter your Phonenumber:
        <input 
          type="text" 
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>Are you a loan officer:
        <input 
          type="text" 
          value={LoanOfficer}
          onChange={(e) => setOff(e.target.value)}
        />
      </label>
      <label>Do you have an Creditapp?:
        <input 
          type="text" 
          value={creditApp}
          onChange={(e) => setApp(e.target.value)}
        />
      </label>
      <label>Enter your credit score:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setScore(e.target.value)}
        />
      </label>
      <label>Enter your CheckingAccount number:
        <input 
          type="text" 
          value={CheckingAccount}
          onChange={(e) => setCheck(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default MyForm ;