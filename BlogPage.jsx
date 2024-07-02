import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TravelBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:4000/blogs');
                if (Array.isArray(response.data)) {
                    setBlogs(response.data);
                } else {
                    setBlogs([]);
                    console.error('API response is not an array:', response.data);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="bg-gradient-to-b from-blue-200 to-blue-500 min-h-screen">
            {/* Header */}
            <header className="py-12 custom-header animate__animated animate__fadeInDown">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Travel Guides & Blogs</h1>
                    <p className="mt-4 text-lg">Explore travel tips, destination highlights, and personal experiences from our community.</p>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Hardcoded Blog Cards */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInLeft blog-card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67VHjL6jfbKLhopczf9Rq2dqf-sPcZw15rg&usqp=CAU"
                                alt="Blog Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">10 Must-Visit Destinations in Southeast Asia</h2>
                                <p className="text-gray-600">Discover the top destinations to explore in Southeast Asia, from vibrant cities to serene beaches.</p>
                                <div className="mt-4">
                                    <a
                                        href="https://www.planetware.com/asia/best-places-to-visit-in-southeast-asia-tha-1-49.htm"
                                        className="text-blue-500 font-semibold hover:text-blue-700 read-more"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInLeft blog-card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_1zEt7k0709z7BjtOjXreangIKJ7Kym38Q&usqp=CAU"
                                alt="Blog Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Exploring the Beauty of the Swiss Alps</h2>
                                <p className="text-gray-600">Join us as we take a journey through the stunning landscapes of the Swiss Alps.</p>
                                <div className="mt-4">
                                    <a
                                        href="https://www.myglobalviewpoint.com/best-things-to-do-in-the-swiss-alps/"
                                        className="text-blue-500 font-semibold hover:text-blue-700 read-more"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInLeft blog-card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrmziD5r19QlfU8J4F4hSMOVLlc7WqmiMXpvvsmNfCsWtynYnkelKjyArPr2I_CxOY-A&usqp=CAU"
                                alt="Blog Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">A Food Lover's Guide to Italy</h2>
                                <p className="text-gray-600">Experience the rich culinary traditions of Italy with our comprehensive food guide.</p>
                                <div className="mt-4">
                                    <a
                                        href="https://www.thespruceeats.com/food-lovers-travel-guide-to-florence-italy-2019225"
                                        className="text-blue-500 font-semibold hover:text-blue-700 read-more"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Dynamically Fetched Blog Cards */}
                        {Array.isArray(blogs) && blogs.map((blog) => (
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInLeft blog-card" key={blog._id}>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                                    <p className="text-gray-600">{blog.description}</p>
                                    <div className="mt-4">
                                        <a
                                            href={blog.link}
                                            className="text-blue-500 font-semibold hover:text-blue-700 read-more"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 custom-footer">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="contact-card p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                            <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
                            <p className="text-gray-200 mb-4">1234 Travel Road, Adventure City, India 56789</p>
                            <p className="text-gray-200">Operating Hours: 9 AM - 6 PM, Monday to Friday</p>
                        </div>
                        <div className="contact-card p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight">
                            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                                    <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" alt="facebook" className="w-8 h-8" />
                                </a>
                                <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="twitter" className="w-8 h-8" />
                                </a>
                                <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800">
                                    <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                                    <img src="https://cdn-icons-png.flaticon.com/128/61/61109.png" alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8">&copy; 2024 TrekTrove. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default TravelBlog;
