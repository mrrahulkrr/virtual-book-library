import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLibrary } from '../context/LibraryContext';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { FaBook, FaSearch } from 'react-icons/fa';

const HomePage = () => {
  const { books } = useLibrary();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <FaBook className="mr-3 text-blue-600" />
          Book Catalog
        </h1>
        <Link
          to="/my-library"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center"
        >
          <FaBook className="mr-2" />
          My Library
        </Link>
      </div>
      <div className="mb-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;