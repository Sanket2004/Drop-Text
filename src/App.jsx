import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DataPage from './components/DataPage';
import AddText from './components/AddText';
import GetText from './components/GetText';
import Preloader from './components/Preloader'; // Assuming you have a Preloader component
import ErrorPage from './components/ErrorPage'; // Assuming you have an ErrorPage component

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <Router>
      {!loaded ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addText" element={<AddText />} />
          <Route path="/getText" element={<GetText />} />
          <Route path="/:uuidParam" element={<DataPage />} />
          {/* Error page for unmatched routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
