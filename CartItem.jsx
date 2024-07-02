import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:4000/cart');
            setCartItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching cart items:', error);
            setLoading(false);
        }
    };

    const removeFromCart = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/removefromcart/${id}`);
            fetchCartItems(); // Refresh the cart items after removal
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Cart Details</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item._id} className="mb-4 list-none">
                                <div className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                                    {item.image && (
                                        <img 
                                            src={item.image} 
                                            alt={item.City} 
                                            className="w-24 h-24 mr-4 object-cover rounded"
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-xl font-bold">{item.City}</h3>
                                        <p className="text-gray-700">Ratings: {item.Ratings}</p>
                                        <p className="text-gray-700">Ideal Duration: {item.Ideal_duration}</p>
                                        <button 
                                            onClick={() => removeFromCart(item._id)}
                                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-all">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="text-center">
                <button 
                    onClick={() => navigate('/procced')}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
