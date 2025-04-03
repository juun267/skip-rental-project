// src/api/skipApi.js
import { API_CONSTANTS } from '../constants/apiConstants';

const API_URL = `${API_CONSTANTS.ENDPOINTS.SKIPS}?postcode=${API_CONSTANTS.QUERY.POSTCODE}&area=${API_CONSTANTS.QUERY.AREA}`;

export const getSkips = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: API_CONSTANTS.HEADERS
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching skips:', error);
    throw error;
  }
};
