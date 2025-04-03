export const CARD_CONSTANTS = {
  // Image related constants
  IMAGES: {
    DEFAULT_URL: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800",
  },
  
  // Text content constants
  TEXT: {
    HIRE_PERIOD: "14 day hire period",
    PRICE_PERIOD: "per week",
    SELECT_BUTTON: "Select This Skip",
    SELECTED_BUTTON: "Selected",
    ARROW: "→"
  },
  
  // Warning types and messages
  WARNINGS: {
    TYPES: {
      HEAVY_WASTE: "Not Suitable for Heavy Waste"
    },
    COLORS: {
      HEAVY_WASTE: "text-orange-600",
      DEFAULT: "text-yellow-400"
    }
  },
  
  // Style classes
  STYLES: {
    CARD: {
      BASE: "bg-gray-800 text-white rounded-lg shadow-lg transition-all p-8",
      SELECTED: "border-2 border-blue-800",
      UNSELECTED: "border-2 border-gray-500",
      DISABLED: "bg-gray-600 cursor-not-allowed opacity-50",
      ENABLED: "cursor-pointer",
      MAX_WIDTH: {
        SMALL: "max-w-xs",
        MEDIUM: "sm:max-w-sm",
        LARGE: "md:max-w-md"
      }
    },
    BUTTON: {
      DISABLED: "bg-gray-500 text-gray-450 rounded-lg py-3 px-4 cursor-not-allowed w-full text-center flex items-center justify-center",
      ENABLED: "rounded-lg py-3 px-4 flex items-center justify-center w-full text-center",
      SELECTED: "bg-blue-700 hover:bg-blue-800",
      UNSELECTED: "bg-gray-600 hover:bg-gray-500"
    },
    TITLE: {
      CONTAINER: "absolute top-2 right-2 bg-blue-600 text-white rounded-full px-4 py-1 text-lg font-bold"
    },
    CHECK_ICON: {
      CONTAINER: "absolute -top-3 -right-3 text-blue-600"
    }
  }
}; 