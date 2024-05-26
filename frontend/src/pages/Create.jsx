import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm(props) {
  const [Username, setU] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [loanOfficer, setOff] = useState("");
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
            loanOfficer,
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


    <><form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label>Enter your Username:
            <input
              type="text"
              value={Username}
              onChange={(e) => setU(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Enter your Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Enter your Phonenumber:
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Are you a loan officer:
            <input
              type="boolean"
              value={loanOfficer}
              onChange={(e) => setOff(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Do you have an Creditapp?:
            <input
              type="text"
              value={creditApp}
              onChange={(e) => setApp(e.target.value)} />
          </label>
        </li>

        <li>
          <label>Enter your credit score:
            <input
              type="text"
              value={creditScore}
              onChange={(e) => setScore(e.target.value)} />

          </label>
        </li>
        <li>
          <label>Enter your CheckingAccount number:
            <input
              type="text"
              value={CheckingAccount}
              onChange={(e) => setCheck(e.target.value)} />
          </label>
        </li>
        <input type="submit" />
      </ul>
    </form><img src="http://www.gifbay.com/gif/after_5_years_of_college_i_realize_that_i_probably_wont_work_in_the_field_of_my_study-123985/" alt="pic" /></>

  )
}

export default MyForm ;

