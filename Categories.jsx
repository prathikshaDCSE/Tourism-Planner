// src/Components/CategoryPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you save the CSS styles in Dashboard.css

const CategoryPage = () => {
  return (
    <div className="dashboard min-h-screen overflow-hidden relative">
      <video className="background-video" autoPlay muted loop>
        <source src="https://videocdn.cdnpk.net/cdn/content/video/free/video0538/large_preview/_import_6307109ae2a604.50913487.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container mx-auto py-20 relative z-10">
        <h1 className="text-3xl font-semibold mb-8 text-center text-white">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard 
            title="Contact Us" 
            description="Find tips and tricks for budget-friendly travel." 
            link="/aboutus" 
          />
          <CategoryCard 
            title="Expenses" 
            description="Learn how to manage and track your travel expenses." 
            link="/expenses"
          />
          <CategoryCard 
            title="Packing List" 
            description="Discover essential items to pack for your next trip." 
            link="/packinglist" 
          />
          <CategoryCard 
            title="Activity" 
            description="Explore fun and adventurous activities to do during your travels." 
            link="/activities" 
          />
          <CategoryCard 
            title="Destination" 
            description="Learn about exciting destinations to visit around the world." 
            link="/destinations" 
          />
          <CategoryCard 
            title="Review" 
            description="Read reviews and upload reviews for the customers." 
            link="/reviews" 
          />
          <CategoryCard 
            title="Travel Blog" 
            description="Learn about exciting destinations to visit around the world." 
            link="/blog" 
          />

          <CategoryCard 
            title="Weather Prediction" 
            description="know about the weather to travel exciting destinations to visit around the world." 
            link="/weather" 
          />

          <CategoryCard 
            title="Cart Page " 
            description="wishlist destinations to visit around the world." 
            link="/cart" 
          />    
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ title, description, link }) => {
  return (
    <Link to={link} className="card p-6 bg-gray-300 rounded shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl no-underline">
      <h2 className="text-xl font-bold mb-2 text-primary relative z-1">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
        Learn More
      </button>
    </Link>
  );
};

export default CategoryPage;
