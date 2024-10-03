import React from 'react';
import { FaStar, FaCalendarAlt, FaBookOpen, FaTimes } from 'react-icons/fa';

const BookDetailsModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{book.title}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">by {book.author}</p>
            <div className="flex items-center justify-center mt-2">
              <FaBookOpen className="text-blue-600 mr-2" />
              <span className="text-sm text-gray-700">{book.genre}</span>
            </div>
            <div className="flex items-center justify-center mt-2">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="text-sm font-semibold">{book.rating}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{book.description}</p>
            <div className="flex items-center justify-center mt-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">Published: {book.publication_year}</span>
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;