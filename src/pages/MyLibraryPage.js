import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';
import { FaTrash, FaHome, FaBook, FaStar, FaInfoCircle } from 'react-icons/fa';
import BookDetailsModal from '../components/BookDetailsModal';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useLibrary();
  const [selectedBook, setSelectedBook] = useState(null);

  const openBookDetails = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <FaBook className="mr-3 text-blue-600" />
        My Library
      </h2>
      {myLibrary.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-8 text-center">
          <p className="text-xl text-gray-600 mb-6">Your library is empty. Add some books from the home page.</p>
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <FaHome className="mr-2" />
            Go to Home Page
          </Link>
        </div>
      ) : (
        <ul className="space-y-4">
          {myLibrary.map((book) => (
            <li key={book.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-gray-600">{book.author}</p>
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{book.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{book.genre}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => openBookDetails(book)}
                    className="text-blue-500 hover:text-blue-700 transition duration-300 mr-4"
                    aria-label="View book details"
                  >
                    <FaInfoCircle size={20} />
                  </button>
                  <button
                    onClick={() => removeFromLibrary(book.id)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                    aria-label="Remove book"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {myLibrary.length > 0 && (
        <Link
          to="/"
          className="mt-8 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      )}
      {selectedBook && <BookDetailsModal book={selectedBook} onClose={closeBookDetails} />}
    </div>
  );
};

export default MyLibraryPage;