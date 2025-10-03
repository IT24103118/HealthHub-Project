import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HealthData = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    activitylevel: '',
    healthConditions: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the health data to our backend API
      await axios.post('http://localhost:8080/healthdata', formData);
      alert('Health data saved successfully!');
      navigate('/dashboard'); // Go back to the dashboard after saving
    } catch (error) {
      console.error('Error saving health data!', error);
      alert('Failed to save health data. Please check your inputs and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Enter Your Health Data</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="age" className="text-sm font-medium text-gray-700">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight (kg)</label>
            <input
              id="weight"
              name="weight"
              type="number"
              step="0.1"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="height" className="text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              id="height"
              name="height"
              type="number"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="activitylevel" className="text-sm font-medium text-gray-700">Activity Level</label>
            <select
              id="activitylevel"
              name="activitylevel"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              value={formData.activitylevel}
              onChange={handleChange}
            >
              <option value="">Select one...</option>
              <option value="Sedentary">Sedentary (little or no exercise)</option>
              <option value="Lightly Active">Lightly Active (light exercise/sports 1-3 days/week)</option>
              <option value="Moderately Active">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
              <option value="Very Active">Very Active (hard exercise/sports 6-7 days a week)</option>
              <option value="Extra Active">Extra Active (very hard exercise/sports & physical job)</option>
            </select>
          </div>
          <div>
            <label htmlFor="healthConditions" className="text-sm font-medium text-gray-700">Existing Health Conditions (e.g., Diabetes, High Blood Pressure)</label>
            <textarea
              id="healthConditions"
              name="healthConditions"
              rows="3"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
              value={formData.healthConditions}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Save Health Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthData;