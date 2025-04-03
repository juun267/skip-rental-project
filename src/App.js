// src/App.js

import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { getSkips } from './api/skipApi';

// Fallback local data in case the API call fails
const fallbackSkipData = [
  { id: 4, title: '4 Yards', name: '4 Yard Skip', price: 216, disabled: false, warnings: [] },
  { id: 5, title: '5 Yards', name: '5 Yard Skip', price: 260, disabled: false, warnings: [] },
  { id: 6, title: '6 Yards', name: '6 Yard Skip', price: 296, disabled: false, warnings: [] },
  { id: 8, title: '8 Yards', name: '8 Yard Skip', price: 294, disabled: false, warnings: [] },
  { id: 10, title: '10 Yards', name: '10 Yard Skip', price: 369, disabled: true, warnings: ['Private Property Only', 'Not Suitable for Heavy Waste'] },
  { id: 12, title: '12 Yards', name: '12 Yard Skip', price: 407, disabled: true, warnings: ['Private Property Only', 'Not Suitable for Heavy Waste'] },
];

const App = () => {
  const [skips, setSkips] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const data = await getSkips();
        // Map the API response to the format expected by the Card component.
        const formattedData = data.map((item) => ({
          id: item.id,
          title: `${item.size} Yards`,
          name: `${item.size} Yard Skip`,
          price: item.price_before_vat,
          disabled: !item.allowed_on_road || !item.allows_heavy_waste,
          warnings: [
            !item.allowed_on_road && 'Private Property Only',
            !item.allows_heavy_waste && 'Not Suitable for Heavy Waste',
          ].filter(Boolean),
        }));
        setSkips(formattedData);
      } catch (error) {
        console.error('Error fetching skip data, using fallback data.', error);
        setSkips(fallbackSkipData);
      }
    };

    fetchSkips();
  }, []);

  const handleSelect = (id) => {
    if (id !== selected) {
      setSelected(id);
    }
  };

  // Render API data if available; otherwise, fallback to local data.
  const dataToRender = skips.length > 0 ? skips : fallbackSkipData;

  return (
    <div className="p-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataToRender.map((skip) => (
          <Card key={skip.id} skip={skip} selected={selected} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default App;
