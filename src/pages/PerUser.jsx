import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Show.css';

function Per() {
    const { id } = useParams(); // Extract id from URL and rename it to id
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/all/${id}`); // Use id from URL
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); // Dependency is the id from URL

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No data found for ID: {id}</div>; // Change message to indicate id
    }
let x = id;
    return (
        
            <div className='item-container'>
                <h1>Bank User:</h1>
            {console.log(x)}
            
            <div className="card-container">
                <div className='card'>
            <h2>Username: {data[x].Username}</h2>
            <h2>Name: {data[x].name}</h2>
            <h2>Email: {data[x].email}</h2>
            <h2>Funds: {data[x].Money}</h2>
            <h2>PhoneNumber: {data[x].phonenumber}</h2>
            <h2>Credit Score: {data[x].creditScore}</h2>
            <h2>Account Number: {data[x].CheckingAccount}</h2>
            <img src={data[x].pic}/>
            
           </div> 
           </div>

            </div>
    );
}

export default Per;