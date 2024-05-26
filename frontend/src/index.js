import React from 'react';
import ReactDOM from 'react-dom/client' 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";

  
function Index(props) {

  const loaded = () => {
    return props.User.map((member) => (
     
      <div key={member.Username} className="Member">
        <Link to={`/members/${member._id}`}><h1>{member.name}</h1></Link>
        <img src={member.image} alt={member.name} />
        <h3>{member.title}</h3>
      </div> 
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.member ? loaded() : loading()

 
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default Index;