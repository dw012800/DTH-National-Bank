import React, { useState, useEffect } from 'react';
import './Show.css';

const URL = "http://localhost:3000/all/";

function Real() {
    // Define state to hold the fetched data
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editIndex, setEditIndex] = useState(null); // Track the index of the card being edited
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        money: '',
        creditScore: '',
        email: ''
    });

    useEffect(() => {
        // Define an asynchronous function to fetch data
        const fetchData = async () => {
            try {
                // Fetch data from an API
                const response = await fetch(URL);
                
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

    // Function to handle deletion of a card
    const deleteCard = async (id, index) => {
        try {
            // Make DELETE request to the API
            await fetch(`http://localhost:3000/all/${id}`, {
                method: 'DELETE'
            });
            // Update state to remove the deleted card
            const updatedCards = [...cards];
            updatedCards.splice(index, 1);
            setCards(updatedCards);
        } catch (error) {
            // Handle errors
            console.error('Error deleting card:', error);
        }
    };

    // Function to handle editing of a card
    const editCard = (index) => {
        setEditIndex(index);
        setFormData({
            username: cards[index].Username,
            name: cards[index].name,
            money: cards[index].Money,
            creditScore: cards[index].creditScore,
            email: cards[index].email
        });
    };

    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make PUT request to the API to update the card
            await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Username: formData.username,
                    name: formData.name,
                    Money: formData.money,
                    creditScore: formData.creditScore,
                    email: formData.email
                })
            });
    
            // Update state with the edited card data
            const updatedCards = [...cards];
            updatedCards[editIndex] = {
                ...updatedCards[editIndex],
                Username: formData.username,
                name: formData.name,
                Money: formData.money,
                creditScore: formData.creditScore,
                email: formData.email
            };
            setCards(updatedCards);
            setEditIndex(null);
    
            // Call updatePeople to update the backend
            await updatePeople(formData, updatedCards[editIndex]._id);
        } catch (error) {
            // Handle errors
            console.error('Error updating card:', error);
        }
    };
    // Function to update people
    const updatePeople = async (person, id) => {
        try {
            // Make PUT request to update person
            await fetch(`${URL}${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            });
        } catch (error) {
            // Handle errors
            console.error('Error updating person:', error);
        }
    };

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
                        {editIndex === index ? (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="money"
                                    value={formData.money}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="creditScore"
                                    value={formData.creditScore}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <button type="submit">Save</button>
                            </form>
                        ) : (
                            <>
                                <h2>Username:{card.Username}</h2>
                                <p>Real Name:{card.name}</p>
                                <p>Available balance: ${card.Money}</p>
                                <p>Credit Score: {card.creditScore}</p>
                                <p>Email address: {card.email}</p>
                                <img src={card.pic}/>
                                <button onClick={() => deleteCard(card._id, index)}>Delete</button>
                                <button onClick={() => editCard(index)}>Edit</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Real;