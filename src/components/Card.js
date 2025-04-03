// src/components/Card.js

import React from 'react';
import { CARD_CONSTANTS } from '../constants/cardConstants';

/**
 * Card component that displays skip information with selection functionality
 * @param {Object} props - Component props
 * @param {Object} props.skip - Skip data object
 * @param {string} props.selected - Currently selected skip ID
 * @param {Function} props.onSelect - Callback function when skip is selected
 */
const Card = ({ skip, selected, onSelect }) => {
  return (
    <div
      onClick={() => !skip.disabled && onSelect(skip.id)}
      className={`${CARD_CONSTANTS.STYLES.CARD.BASE} ${
        selected === skip.id ? CARD_CONSTANTS.STYLES.CARD.SELECTED : CARD_CONSTANTS.STYLES.CARD.UNSELECTED
      } ${skip.disabled ? CARD_CONSTANTS.STYLES.CARD.DISABLED : CARD_CONSTANTS.STYLES.CARD.ENABLED} 
      ${CARD_CONSTANTS.STYLES.CARD.MAX_WIDTH.SMALL} ${CARD_CONSTANTS.STYLES.CARD.MAX_WIDTH.MEDIUM} ${CARD_CONSTANTS.STYLES.CARD.MAX_WIDTH.LARGE}`}
    >
      <div className="relative">
        {/* Skip title badge */}
        <div className={CARD_CONSTANTS.STYLES.TITLE.CONTAINER}>
          {skip.title}
        </div>

        {/* Selection check icon */}
        {selected === skip.id && (
          <div className={CARD_CONSTANTS.STYLES.CHECK_ICON.CONTAINER}>
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

        {/* Skip image */}
        <img
          className="w-full h-48 object-cover rounded-t-lg md:h-64"
          src={CARD_CONSTANTS.IMAGES.DEFAULT_URL}
          alt={skip.name}
        />

        {/* Warning overlay for disabled skips */}
        {(
          <div className="absolute inset-0 bg-black bg-opacity-50">
            {/* Warning messages */}
            <div className="absolute bottom-4 left-4 space-y-2">
              {skip.warnings.map((warning, index) => (
                <div
                  key={index}
                  className={`bg-black p-1 rounded-md flex items-center ${
                    warning === CARD_CONSTANTS.WARNINGS.TYPES.HEAVY_WASTE 
                      ? CARD_CONSTANTS.WARNINGS.COLORS.HEAVY_WASTE 
                      : CARD_CONSTANTS.WARNINGS.COLORS.DEFAULT
                  }`}
                >
                  <span
                    className={`mr-2 ${
                      warning === CARD_CONSTANTS.WARNINGS.TYPES.HEAVY_WASTE 
                        ? CARD_CONSTANTS.WARNINGS.COLORS.HEAVY_WASTE 
                        : CARD_CONSTANTS.WARNINGS.COLORS.DEFAULT
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

      {/* Skip details section */}
      <div className="pt-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl sm:text-2xl font-semibold">{skip.name}</h3>
        </div>
        <p className="text-gray-400 text-lg pt-3">{CARD_CONSTANTS.TEXT.HIRE_PERIOD}</p>
        <div className="pt-3">
          <span className="text-blue-800 font-bold text-3xl">£{skip.price}</span>
          <span className="text-lg pl-2">{CARD_CONSTANTS.TEXT.PRICE_PERIOD}</span>
        </div>

        {/* Action button */}
        {skip.disabled ? (
          <div className="mt-4 flex justify-between items-center">
            <div
              className={CARD_CONSTANTS.STYLES.BUTTON.DISABLED}
              disabled
            >
              {CARD_CONSTANTS.TEXT.SELECT_BUTTON}
              <span className="ml-2">{CARD_CONSTANTS.TEXT.ARROW}</span>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex justify-between items-center">
            <button
              className={`${CARD_CONSTANTS.STYLES.BUTTON.ENABLED} ${
                selected === skip.id ? CARD_CONSTANTS.STYLES.BUTTON.SELECTED : CARD_CONSTANTS.STYLES.BUTTON.UNSELECTED
              } text-white`}
              onClick={() => onSelect(skip.id)}
            >
              {selected === skip.id ? CARD_CONSTANTS.TEXT.SELECTED_BUTTON : CARD_CONSTANTS.TEXT.SELECT_BUTTON}
              {selected !== skip.id && <span className="ml-2">{CARD_CONSTANTS.TEXT.ARROW}</span>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
