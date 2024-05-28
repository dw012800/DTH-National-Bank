import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import './styles/Login.css'
import './Login.scss'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import Header from "../Components/Header"





function Login()
{
 const [Username, setU] = useState("");
 const [Password, setP] = useState("");  
 const [ID, setID] = useState("");  
 
 let newID = "";
    const navigate = useNavigate()  

//   const sub = (event) => {
//   event.preventDefault(); 
//   console.log(`${Username}`)
//   newID = ID;
//   if (Username === "tevon64")
//   {
// console.log("step 1")
// alert("Login successful, Redirecting....")
// navigate("/Transaction/" + newID)

//   }
// else
//   {
//   console.log("missed")
//   }


//   }

const sub = async (event) => {
  event.preventDefault();
  try {
      const response = await fetch('http://localhost:3000/loguser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: Username})
      });

      const data = await response.json();

      if (data.success) {
          setID(data.id);
          alert("Login successful, Redirecting....");
          navigate("/Transaction/" + data.id);
      } else {
          alert(data.message);
      }
  } catch (error) {
      console.error(error);
      alert("An error occurred during login.");
  }
};


return(
  

    <> 
  <Header></Header>
  <div className="Custom-Part">
  
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="User"  onChange={(e) => setU(e.target.value)}  value={Username}  required/>
            <FaUserLarge />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" onChange={(e) => setP(e.target.value)}  value={Password}  required/>
            <RiLockPasswordLine />
          </div>
          <div className="input-box">
            <input type="number" placeholder="ID" onChange={(e) => setID(e.target.value)}  value={ID}  required/>
            <RiLockPasswordLine />
          </div>
          <button onClick={sub} type ="submit">Login</button>

          <div className="register-link">
            <p>Dont have a bank account? <a href = "/create">Register</a></p>
          </div>
        </form>

      </div>
      </div>
      </>
    )
  





}
export default Login;