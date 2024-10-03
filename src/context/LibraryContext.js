import React, { createContext, useContext, useState } from "react"
import booksData from "../data/books.json"

const LibraryContext = createContext();

export const useLibrary = () => useContext(LibraryContext)
export const LibraryProvider = ({children}) => {
    const [books] = useState(booksData.books)
    const [myLibrary, setMyLibrary] = useState([])

    const addToLibrary = (book) => {
        if(!myLibrary.find((b) => b.id == book.id)){
            setMyLibrary([...myLibrary, book]);
        }
    }

    const removeFromLibrary = (bookId) => {
        setMyLibrary(myLibrary.filter((book) => book.id !== bookId));
      };

      return (
        <LibraryContext.Provider value={{books, myLibrary, addToLibrary, removeFromLibrary}}>
            {children}
        </LibraryContext.Provider>
      )
}