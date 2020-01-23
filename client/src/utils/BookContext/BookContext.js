import React, { createContext } from 'react'

const BookContext = createContext({
  searchedBook: '',
  searchedBooks: [],
  savedBooks: [],
  handleInputChange: () => {},
  findBooks: () => {},
  saveBook: ()=>{},
})

export default BookContext