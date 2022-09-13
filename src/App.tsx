import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './presentation/home/components/home';
import { CardVideoPage } from './presentation/cardVideo/cardVideo_page';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/video" element={<CardVideoPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}
