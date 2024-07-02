import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/addcontact', formData);
            setStatusMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatusMessage(error.response ? error.response.data.message : 'An error occurred');
        }
    };

    return (
        <div className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 min-h-screen">
            <header className="py-12 custom-header">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-lg">We're here to help you. Reach out to us through any of the following channels.</p>
                </div>
            </header>

            <main>
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="contact-card p-6 rounded-lg shadow-lg bg-white animate__animated animate__fadeInLeft">
                            <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
                            <p className="text-gray-700 mb-4">Feel free to email us with any inquiries or feedback.</p>
                            <a href="mailto:support@trektrove.com" className="text-blue-500 hover:underline">support@trektrove.com</a>
                        </div>
                        <div className="contact-card p-6 rounded-lg shadow-lg bg-white animate__animated animate__fadeInRight">
                            <h2 className="text-2xl font-semibold mb-4">Call Us</h2>
                            <p className="text-gray-700 mb-4">We are available by phone from 9 AM to 6 PM, Monday to Friday.</p>
                            <a href="tel:918838249335" className="text-blue-500 hover:underline">+918838249335</a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 animate__animated animate__fadeInUp">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h2>
                        {statusMessage && <p className="text-center mb-4">{statusMessage}</p>}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Email" required />
                            </div>
                            <div>
                                <label className="block text-gray-700">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
                            </div>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="contact-card p-6 rounded-lg shadow-lg bg-white animate__animated animate__fadeInLeft">
                            <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
                            <p className="text-gray-700 mb-4">1234 Travel Road, Adventure City, India 56789</p>
                            <p className="text-gray-700">Operating Hours: 9 AM - 6 PM, Monday to Friday</p>
                        </div>
                        <div className="contact-card p-6 rounded-lg shadow-lg bg-white animate__animated animate__fadeInRight">
                            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                            <div className="flex space-x-4">
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
                </div>
            </main>

            <footer className="py-6 custom-header">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 TrekTrove. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;
