import React, { useState, useEffect } from 'react';
import Header from "../Components/Header"

export function Fetch() {
  let [user, setUser] = useState([]);
let setter = "";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/all');
      const json = await response.json();
      user = json[0];
setter = user;
      console.log(setter)
    };
  
    fetchData();
  }, []);

  return (
    <>
    <Header></Header>
    {console.log(Fetch.setter)}
    <div>
   {<h1>Welcome: {setter.Username}</h1>}
    </div>
    <div>
     <img class="creditCard" src="https://t3.ftcdn.net/jpg/03/89/93/32/360_F_389933228_BPMlKUev7J1u8AhZNhWAwRQqmoYwLDIM.jpg"></img>
      <h3 id="creditCard"> Your Name</h3>
    </div>

  <div>
    <h2 id="account">Checking Account</h2>
      <h4 id="account1">Balance: {setter.Money}</h4>
  </div>
    </>
  );
}