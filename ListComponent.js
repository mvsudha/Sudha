
import React, { useState, useEffect } from 'react';
import CitiesListComponent from './CitiesListComponent';

const ListComponent = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Fetch the list of states from the API
  useEffect(() => {
    fetch('http://api.minebrat.com/api/v1/states')
      .then(response => response.json())
      .then(data => setStates(data))
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  // Handle state selection
  const handleStateChange = (event) => {
    setSelectedState(event.target.key);
    setSelectedCity('');
  };

  // Handle city selection
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/result?selectedState=${selectedState}&selectedCity=${selectedCity}`;
  };

  return (
    <div>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        <option>
        {states.map((state) => (
          <option key={state.stateId}>{state.stateName}</option>
        ))}
      </option>
      </select>

      <CitiesListComponent
        selectedState={selectedState}
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ListComponent;
