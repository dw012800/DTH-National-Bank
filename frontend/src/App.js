import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Tron from './Components/Form';
import Home from './pages/home';
import MyForm from './pages/Create';
import Transactions from './pages/Trans';
import Login from './pages/LoginPage';
import { useState, useEffect } from "react";
import Real from './pages/Trans2';
import Per from './pages/PerUser';
import ApiPage from './pages/trans3';

function App() {
  const [user, setUser] = useState(null);
  const URL = "http://localhost:3000/all/";

  useEffect(() => {
    // Fetch user data
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Create" element={<MyForm />} />
        <Route exact path="/Transaction/:id" element={<Per />} />
        <Route exact path="/Log" element={<Login />} />
        <Route exact path="/all" element={<Real />} />
        {/* Map through the user data and create routes for each user */}
        {user && user.map(userData => (
          <Route key={userData.id} path={`/Transaction/${userData.id}`} element={<Per userData={userData} />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;