// src/components/Card.js

import React from 'react';

const Card = ({ skip, selected, onSelect }) => {
  return (
    <div
      onClick={() => !skip.disabled && onSelect(skip.id)} // Disable click for disabled cards
      className={`bg-gray-800 text-white rounded-lg shadow-lg transition-all p-8 ${
        selected === skip.id ? 'border-2 border-blue-500' : 'border-2 border-gray-500'
      } ${skip.disabled ? 'bg-gray-600 cursor-not-allowed opacity-50' : 'cursor-pointer'} max-w-xs sm:max-w-sm md:max-w-md`} // Moved cursor-pointer to conditional
    >
      <div className="relative">
        {/* Yard Text */}
        <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-4 py-1 text-lg font-bold">
          {skip.title}
        </div>

        {/* Check Icon for Selected Card */}
        {selected === skip.id && (
          <div className="absolute -top-3 -right-3 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}

        <img
          className="w-full h-48 object-cover rounded-t-lg md:h-64" // Responsive image size
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          alt={skip.name}
        />

        {/* Disabled Card Warnings */}
        {skip.disabled && (
          <div className="absolute inset-0 bg-black bg-opacity-50">
            {/* Vertical Textboxes */}
            <div className="absolute bottom-4 left-4 space-y-2">
              {skip.warnings.map((warning, index) => (
                <div
                  key={index}
                  className={`bg-black p-1 rounded-md flex items-center ${
                    warning === 'Not Suitable for Heavy Waste' ? 'text-orange-600' : 'text-yellow-400'
                  }`}
                >
                  <span
                    className={`mr-2 ${
                      warning === 'Not Suitable for Heavy Waste' ? 'text-orange-600' : 'text-yellow-400'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2l9 18H3L12 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v4m0 4h.01"
                      />
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
          <h3 className="text-xl sm:text-2xl font-semibold">{skip.name}</h3>
        </div>
        <p className="text-gray-400 text-lg pt-3">14 day hire period</p>
        <div className="pt-3">
          <span className="text-blue-800 font-bold text-3xl">£{skip.price}</span>
          <span className="text-lg pl-1"> per week</span>
        </div>

        {/* Button */}
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
                selected === skip.id ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-600 hover:bg-gray-500'
              } text-white`}
              onClick={() => onSelect(skip.id)}
            >
              {selected === skip.id ? 'Selected' : 'Select This Skip'}
              {selected !== skip.id && <span className="ml-2">→</span>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
