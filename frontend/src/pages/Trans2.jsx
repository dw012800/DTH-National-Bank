import React, { useState, useEffect } from 'react';

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
    {console.log(Fetch.setter)}
    <div>
   {<h1>Welcome: {setter.Username}</h1>}
    </div>
    </>
  );
}