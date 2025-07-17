import React from 'react';
import { Link } from 'react-router-dom';

const NotAvailable = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Link Not Available</h1>
      <p className="text-gray-600 mb-6">
        Oops! This page or feature isn't available yet. We're still working on it!
      </p>
      <Link to="/" className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default NotAvailable;
