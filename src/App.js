import React, { useState } from 'react';

// Define the card data
const skipData = [
  { id: 4, title: '4 Yards', name: '4 Yard Skip', price: 216, disabled: false, warnings: [] },
  { id: 5, title: '5 Yards', name: '5 Yard Skip', price: 260, disabled: false, warnings: [] },
  { id: 6, title: '6 Yards', name: '6 Yard Skip', price: 296, disabled: false, warnings: [] },
  { id: 8, title: '8 Yards', name: '8 Yard Skip', price: 294, disabled: false, warnings: [] },
  { id: 10, title: '10 Yards', name: '10 Yard Skip', price: 369, disabled: true, warnings: ['Private Property Only', 'Not Suitable for Heavy Waste'] },
  { id: 12, title: '12 Yards', name: '12 Yard Skip', price: 407, disabled: true, warnings: ['Private Property Only', 'Not Suitable for Heavy Waste'] },
];

// Main App Component
const App = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    if (id !== selected) {
      setSelected(id); // Only set selected if it's not already selected
    }
  };

  return (
    <div className="p-10 flex justify-center">
      <div className="grid grid-cols-3 gap-8">
        {skipData.map((skip) => (
          <div
            key={skip.id}
            onClick={() => !skip.disabled && handleSelect(skip.id)} // Disable click for disabled cards
            className={`bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer transition-all p-8 ${
              selected === skip.id ? 'border-2 border-blue-500' : 'border-2 border-gray-500'
            } ${skip.disabled ? 'bg-gray-600 cursor-not-allowed' : ''}`} // Apply disabled state to whole card
          >
            <div className="relative">
              {/* Yard Text */}
              <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-4 py-1 text-lg font-bold">
                {skip.title}
              </div>
              <img className="w-72 h-48 object-cover rounded-t-lg" src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800" alt={skip.name} />

              {/* Check Icon for Selected Card */}
              {selected === skip.id && (
                <div className="absolute top-1 right-1 text-blue-500">
                  ✔
                </div>
              )}

              {/* Disabled Card Warnings */}
              {skip.disabled && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
                  {/* Vertical Textboxes */}
                  <div className="space-y-2">
                    {skip.warnings.map((warning, index) => (
                      <div
                        key={index}
                        className={`bg-black text-white p-1 rounded-md flex items-center ${
                          warning === 'Not Suitable for Heavy Waste' ? 'text-orange-500' : 'text-yellow-400'
                        }`}
                      >
                        <span className="mr-2 text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 18H3L12 2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01" />
                          </svg>
                        </span>
                        {warning}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-5">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">{skip.name}</h3>
              </div>
              <p className="text-gray-400 text-lg pt-3">14 day hire period</p>
              <div className="pt-3">
                <span className="text-blue-800 font-bold text-3xl">
                  £{skip.price}
                </span>
                <span className="text-lg pl-1"> per week</span>
              </div>

              {/* Button for Non-Disabled Cards */}
              {skip.disabled ? (
                <div className="mt-4 flex justify-between items-center">
                  <div
                    className="bg-gray-500 text-gray-450 rounded-lg py-3 px-4 cursor-not-allowed w-full text-center flex items-center justify-center"
                    disabled
                  >
                    Select This Skip
                    <span className="ml-2">→</span>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex justify-between items-center">
                  <button
                    className={`rounded-lg py-3 px-4 flex items-center justify-center w-full text-center ${
                      selected === skip.id ? 'bg-blue-700' : 'bg-gray-600 hover:bg-gray-500'
                    } text-white`}
                    onClick={() => handleSelect(skip.id)}
                  >
                    {selected === skip.id ? 'Selected' : 'Select This Skip'}
                    {selected !== skip.id && <span className="ml-2">→</span>}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
