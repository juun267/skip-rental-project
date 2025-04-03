// src/App.js

import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { CARD_CONSTANTS } from './constants/cardConstants';
import { API_CONSTANTS } from './constants/apiConstants';

function App() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(`${API_CONSTANTS.BASE_URL}${API_CONSTANTS.ENDPOINTS.SKIPS}`, {
          headers: API_CONSTANTS.HEADERS
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSkips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSkipSelect = (skipId) => {
    setSelectedSkip(skipId);
  };

  if (loading) return <div className="text-center text-2xl mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-2xl mt-10">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Select Your Skip</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skips.map((skip) => (
            <Card
              key={skip.id}
              skip={skip}
              selected={selectedSkip}
              onSelect={handleSkipSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
