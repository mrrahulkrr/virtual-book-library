import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';
import { FaStar, FaCalendarAlt, FaBookOpen, FaArrowLeft } from 'react-icons/fa';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { books, addToLibrary, myLibrary } = useLibrary();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="text-center text-2xl mt-10">Book not found</div>;
  }

  const isInLibrary = myLibrary.some((b) => b.id === book.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h2>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <div className="flex items-center mb-4">
            <FaBookOpen className="text-blue-600 mr-2" />
            <span className="text-lg text-gray-700">{book.genre}</span>
          </div>
          <div className="flex items-center mb-6">
            <FaStar className="text-yellow-500 mr-2" />
            <span className="text-lg font-semibold">{book.rating}</span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">{book.description}</p>
          <div className="flex items-center mb-8">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-600">Published: {book.publication_year}</span>
          </div>
          <div className="flex items-center">
            {!isInLibrary && (
              <button
                onClick={() => addToLibrary(book)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 mr-4"
              >
                Add to My Library
              </button>
            )}
            <Link
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;