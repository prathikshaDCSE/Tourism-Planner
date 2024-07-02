import React from 'react';
import { Link } from 'react-router-dom';

const TravelWebsite = () => {
  return (
    <div className="relative h-screen">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-between items-start text-white p-4" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="flex items-start justify-between w-full mb-8">
          <header className="text-3xl md:text-4xl font-bold">TrekTrove</header>
          <nav className="flex space-x-4">
            <Link to="/destinations" className="hover:text-gray-400 text-lg">Destinations</Link>
            <Link to="/aboutus" className="hover:text-gray-400 text-lg">Contact Us</Link>
            <Link to="/reviews" className="hover:text-gray-400 text-lg">Reviews</Link>
            <Link to="/gallery" className="hover:text-gray-400 text-lg">Gallery</Link>
            <Link to="/signup" className="hover:text-gray-400 text-lg">Sign Up</Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <main className="text-center animate__animated animate__fadeInUp" style={{ maxWidth: '600px', margin: '0 auto', zIndex: '1', position: 'relative', color: 'white' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Your Travel Dreams With Us!</h1>
          <p className="text-lg md:text-xl mb-8">Discover the world's most adventurous destinations. Life is too short not to travel.</p>
          <Link to="/categories" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded shadow-lg mb-8">GET STARTED</Link>
        </main>
      </div>
      <footer className="text-center" style={{ zIndex: '1', position: 'relative', color: 'white' }}>© 2024 TrekTrove</footer>
    </div>
  );
}

export default TravelWebsite;
