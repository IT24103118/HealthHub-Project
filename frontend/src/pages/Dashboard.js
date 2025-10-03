import React from 'react';
import { useApp } from '../context/AppContext'; // Corrected import
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useApp(); // Use the custom hook

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to your Dashboard</h1>
        {user ? (
          <p className="mt-2 text-lg text-gray-600">
            Hello, <span className="font-semibold">{user.username}</span>!
          </p>
        ) : (
          <p className="mt-2 text-lg text-gray-600">Loading user data...</p>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

            <Link to="/health-data" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
              <h3 className="text-xl font-bold">Health Data</h3>
              <p className="mt-2">Input or update your health metrics.</p>
            </Link>

            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">View Diet Plan</h3>
              <p className="mt-2">Check your current diet plan.</p>
            </div>
            <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Schedule Checkup</h3>
              <p className="mt-2">Book an appointment.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;