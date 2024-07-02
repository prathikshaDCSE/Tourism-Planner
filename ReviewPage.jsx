import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ name: '', image_url: '', review: '', rating: 0 });
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:4000/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/addreview', formData);
            setStatusMessage(response.data.message);
            setFormData({ name: '', image_url: '', review: '', rating: 0 });
            // Refresh reviews list
            const reviewsResponse = await axios.get('http://localhost:4000/reviews');
            setReviews(reviewsResponse.data);
        } catch (error) {
            setStatusMessage(error.response.data.message);
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen">
            {/* Header */}
            <header className="py-12 custom-header">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Customer Testimonials & Reviews</h1>
                    <p className="mt-4 text-lg">Hear what our customers have to say about their experiences.</p>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <div className="container mx-auto py-16">
                    {/* Review Form */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 animate__animated animate__fadeInUp">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Leave a Review</h2>
                        {statusMessage && <p className="text-center mb-4">{statusMessage}</p>}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Image URL</label>
                                <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Image URL" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Review</label>
                                <textarea name="review" value={formData.review} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Review"></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-700">Rating</label>
                                <input type="number" name="rating" value={formData.rating} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Rating (0-5)" min="0" max="5" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit Review</button>
                            </div>
                        </form>
                    </div>

                    {/* Reviews List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src={review.image_url} alt={review.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h3 className="text-xl font-semibold">{review.name}</h3>
                                        <div className="flex">
                                            {review.rating && [...Array(review.rating)].map((_, index) => (
                                                <span key={index} className="text-yellow-500">&#9733;</span>
                                            ))}
                                            {review.rating && [...Array(5 - review.rating)].map((_, index) => (
                                                <span key={index} className="text-gray-400">&#9733;</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{review.review}</p>
                                {review.image_url && (
                                    <img src={review.image_url} alt="Review" className="w-full rounded-lg" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 custom-header">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 TrekTrove. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Testimonials;
