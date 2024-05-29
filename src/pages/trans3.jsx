import React, { useState, useEffect } from 'react';
import './Show.css'
;

export function ApiPage() {
    // Define state to hold the fetched data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define state to hold the list of items
    const [items, setItems] = useState([]);
    // Define state to hold the form input values
    const [inputValue, setInputValue] = useState('');
    // Define state to hold the ID of the item being edited
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        // Define an asynchronous function to fetch data
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const response = await fetch('http://localhost:3000/all');
                
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                // Parse the JSON response
                const jsonData = await response.json();

                // Update state with the fetched data
                setData(jsonData);
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
 
    // Function to handle form input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
        
    // Function to handle form submission (Create and Update)
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim() === '') {
            return; // Prevent submission if input value is empty
        }

        if (editId !== null) {
            // If editId is not null, update existing item
            const updatedItems = items.map(item => {
                if (item.id === editId) {
                    return { id: item.id, text: inputValue };
                }
                return item;
            });
            setItems(updatedItems);
            setEditId(null); // Reset editId after updating
        } else {
            // Otherwise, add new item
            const newItem = {
                id: new Date().getTime(), // Generate unique ID
                text: inputValue
            };
            setItems([...items, newItem]);
        }
    
        setInputValue(''); // Clear input value after submission
    };
        
    // Function to handle item deletion
    const handleDelete = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    // Function to handle item editing
    const handleEdit = (id) => {
        const itemToEdit = items.find(item => item.id === id);
        setInputValue(itemToEdit.text);
        setEditId(id);
    };

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Filter data to render only one element per unique id
    const uniqueIds = [...new Set(data.map(item => item.id))];
    const uniqueData = uniqueIds.map(id => data.find(item => item.id === id));

    // Render the component
    return (
        <div className='item-container'>
            {uniqueData.map((item, index) => (
                <div className='card-container' key={index}>
                    <div className='card'>
                        <h1>Bank Username: {item.Username}</h1>
                        <p>Real name: {item.name}</p>
                        <h2>Balance: {item.Money}</h2>
                        <h2>Credit Score: {item.creditscore}</h2>
                        <h1>Item ID: {item._id}</h1>
                        {/* Render other properties as needed */}
                    </div>
                    
                </div>
            ))}

            <div>
                <h1>CRUD Example</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Enter text..." 
                    />
                      <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Enter text..." 
                    />
                      <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Enter text..." 
                    />
                      <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Enter text..." 
                    />
                    <button type="submit">{editId !== null ? 'Update' : 'Add'}</button>
                </form>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.text}
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ApiPage;