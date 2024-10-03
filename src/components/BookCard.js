import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-sm text-gray-500">{book.genre}</p>
      <p className="text-sm text-yellow-500">Rating: {book.rating}</p>
      <Link
        to={`/book/${book.id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;