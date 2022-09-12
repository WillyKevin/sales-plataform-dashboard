import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './presentation/home/components/home';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}
