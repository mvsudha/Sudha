
import React, { useState, useEffect } from 'react';

const CitiesListComponent = ({ selectedState, selectedCity, onCityChange }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      fetch(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
        .then(response => response.json())
        .then(data => setCities(data))
        .catch(error => console.error('Error fetching cities:', error));
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <select value={selectedCity} onChange={onCityChange}>
      <option value="">Select a city</option>
      {cities.map((state) => (
        <option key={cities.cityName} value={state.city.cityName}>
          {cities.cityName}
        </option>
      ))}
    </select>
  );
};

export default CitiesListComponent;
