import React, { useState, useEffect } from 'react';
import './Show.css'

function Real() {
    // Define state to hold the fetched data
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define an asynchronous function to fetch data
        const fetchData = async () => {
            try {
                // Fetch data from an API
                const response = await fetch('http://localhost:3000/all');
                
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                // Parse the JSON response
                const jsonData = await response.json();

                // Update state with the fetched data
                setCards(jsonData);
                setLoading(false);
            } catch (error) {
                // Handle errors
                setError(error.message);
                setLoading(false);
            }
        };

        // Call the async function
        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render fetched data as cards
    return (
        <div className='item-container'>
            <h1>Fetched Cards</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <h2>{card.Username}</h2>
                        <p>{card.name}</p>
                        <p>$:{card.Money}</p>
                        {/* Add more elements as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Real;