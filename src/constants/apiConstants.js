export const API_CONSTANTS = {
  // API endpoints
  ENDPOINTS: {
    SKIPS: process.env.REACT_APP_SKIP_API_URL || '/api/skips',
  },
  
  // API base URL from environment variable
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  
  // API headers
  HEADERS: {
    'Content-Type': 'application/json'
  },
  
  // API response status codes
  STATUS: {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  },

  // API query parameters
  QUERY: {
    POSTCODE: 'NR32',
  }
}; 