// src/App.js

import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { getSkips } from './api/skipApi';

const App = () => {
  const [skips, setSkips] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const data = await getSkips();
        // Map the API response to the format expected by the Card component
        const formattedData = data.map((item) => ({
          id: item.id,
          title: `${item.size} Yards`,
          name: `${item.size} Yard Skip`,
          price: item.price_before_vat ?? 0.0,
          disabled: !item.allows_heavy_waste,
          warnings: [
            !item.allowed_on_road && 'Private Property Only',
            !item.allows_heavy_waste && 'Not Suitable for Heavy Waste',
          ].filter(Boolean),
        }));
        setSkips(formattedData);
      } catch (error) {
        console.error('Error fetching skip data:', error);
        setError('Failed to load skip data. Please try again later.');
      }
    };

    fetchSkips();
  }, []);

  const handleSelect = (id) => {
    if (id !== selected) {
      setSelected(id);
    }
  };

  if (error) {
    return (
      <div className="p-10 flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skips.map((skip) => (
          <Card key={skip.id} skip={skip} selected={selected} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default App;
