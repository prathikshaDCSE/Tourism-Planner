// SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/adduser', formData);
      console.log(response.data);
      alert('Sign up successful!'); // Alert message
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error - show error message to user or redirect to error page
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232171.jpg?t=st=1717951615~exp=1717955215~hmac=e353cc2f88fc8805537afe84c8072df966bb494eab0d43c9835cff79e7a262e0&w=360)' }}></div>
        <form onSubmit={handleSubmit} className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lightblue-300 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition transform hover:-translate-y-1"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
