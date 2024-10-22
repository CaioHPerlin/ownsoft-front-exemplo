import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Future routes should be inserted here */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
