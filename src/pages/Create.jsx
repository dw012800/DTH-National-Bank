import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "../Components/Header";

export function MyForm(props) {
  const [Username, setU] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [loanOfficer, setOff] = useState("");
  const [creditApp, setApp] = useState("");
  const [creditScore, setScore] = useState("");
  const [CheckingAccount, setCheck] = useState("");
  const [name, setName] = useState("");
  const [_id, setID] = useState("");
  const [Money, setMoney] = useState("");
  


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
            name,
            _id,
            Money
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
        
        
        <>
      <Header/>
        <form onSubmit={handleSubmit}>
      <ul className='formList'>
        <li>
          <label>Username
            <br></br>
            <input
              type="text"
              value={Username}
              onChange={(e) => setU(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Name
            <br></br>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Email
            <br></br>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Phone Number
            <br></br>
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Are you a Loan Officer?
            <br></br>
            <input
              type="boolean"
              value={loanOfficer}
              onChange={(e) => setOff(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Do you have a Credit App?
            <br></br>
            <input
              type="text"
              value={creditApp}
              onChange={(e) => setApp(e.target.value)} />
          </label>
        </li>

        <li>
          <label>Credit Score
            <br></br>
            <input
              type="number"
              value={creditScore}
              onChange={(e) => setScore(e.target.value)} />

          </label>
        </li>
        <li>
          <label>Checking Account Number
            <br></br>
            <input
              type="text"
              value={CheckingAccount}
              onChange={(e) => setCheck(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Enter your ID number:
            <input
              type="number"
              value={_id}
              onChange={(e) => setID(e.target.value)} />
          </label>
        </li>
        <li>
          <label>Please enter start balance:
            <input
              type="number"
              value={Money}
              onChange={(e) => setMoney(e.target.value)} />
          </label>
        </li>
        <input type="submit" />
        <input id="sub" type="submit" value="Create Account"/>
      </ul>
    </form>
    {/*<img src="http://www.gifbay.com/gif/after_5_years_of_college_i_realize_that_i_probably_wont_work_in_the_field_of_my_study-123985/" alt="pic" />*/}
    </> 

  )
}

export default MyForm;

