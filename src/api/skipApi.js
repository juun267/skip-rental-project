// src/api/skipApi.js

export const getSkips = async () => {
  const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching skip data:", error);
    // Optionally, return default/fallback data or rethrow the error.
    throw error;
  }
};
