
import React from 'react';

const ResultComponent = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedState = urlParams.get('selectedState');
  const selectedCity = urlParams.get('selectedCity');

  return (
    <h1>You Have selected {selectedCity}, {selectedState}</h1>
  );
};

export default ResultComponent;
