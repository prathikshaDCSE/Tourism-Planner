import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { toast } from 'sonner';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        axios.get('http://localhost:4000/destinations')
            .then(response => {
                console.log('Fetched destinations:', response.data); // Debugging
                setDestinations(response.data);
            })
            .catch(error => console.error('Error fetching destinations:', error));
    }, []);

    const addToCart = async (destinationId, destinationCity) => {
        try {
            const response = await axios.post('http://localhost:4000/addtocart', { destinationId });
            console.log('Item added to cart:', response.data.data); // Log added item
            toast.success(`Booked ${destinationCity} successfully!`);
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast.error('Failed to book destination. Please try again.');
        }
    };

    const toggleDropdown = (index) => {
        setExpanded(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Most Visited Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
                        <img src={destination.image} alt={destination.City} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{destination.City}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-700">⭐ {destination.Ratings}</span>
                                <span className="text-gray-700">{destination.Ideal_duration} days</span>
                            </div>
                            <button 
                                onClick={() => addToCart(destination._id, destination.City)}
                                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all">
                                Book Now
                            </button>
                            <button 
                                onClick={() => toggleDropdown(index)}
                                className="w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-all">
                                {expanded[index] ? 'Hide Details' : 'Show Details'}
                            </button>
                            {expanded[index] && (
                                <div className="mt-4 bg-gray-100 p-4 rounded">
                                    {destination.best_time_to_visit && (
                                        <p className="text-gray-800 mb-2"><strong>Best Time to Visit:</strong> {destination.best_time_to_visit}</p>
                                    )}
                                    <p className="text-gray-800"><strong>Description:</strong> {destination.City_desc}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
