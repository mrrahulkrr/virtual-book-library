import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import { LibraryProvider } from './context/LibraryContext';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center my-8">Virtual Book Library</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/my-library" element={<MyLibraryPage />} />
          </Routes>
        </div>
      </Router>
    </LibraryProvider>
  );
}

export default App;