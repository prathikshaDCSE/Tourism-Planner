import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const ReportIssuePage = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send the data to a server
    // and navigate to another page upon success
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Report Cleanliness Issue</h2>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-semibold mb-2">Photo:</label>
          <input type="file" id="photo" onChange={(e) => setPhoto(e.target.files[0])} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" accept="image/*" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Submit</button>
      </form>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/report-issue" element={<ReportIssuePage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
