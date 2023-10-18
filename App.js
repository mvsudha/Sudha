import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListComponent from './ListComponent';
import ResultComponent from './ResultComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListComponent />} />
          <Route path="/result" element={<ResultComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
