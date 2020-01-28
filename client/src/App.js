import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Using Pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'

import BookContext from './utils/BookContext'
import BookAPI from './utils/BookAPI'
const { getBooks, addBook, updateBook, deleteBook } = BookAPI


const App = () => {
  //Functions and such for State
  const [bookState, setBookState] = useState({
    searchedBook: '',
    searchedBooks: [],
    savedBooks: [],
  })

  //Searchbar input change.
  bookState.handleInputChange = (event) => {
    setBookState({...bookState, [event.target.name]: event.target.value})
  }

  //Search submit
  bookState.findBooks = (event) => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.searchedBook}`)
    .then(({data})=>{
      console.log(data.items)
      setBookState({...bookState, searchedBooks: data.items})
    })
    .catch(e=>console.error(e))
  }

  //Save a book function
  bookState.saveBook = (book) => {
    addBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.previewLink,
    })
      .then(({ data: book })=>{
        let savedBooks = JSON.parse(JSON.stringify(bookState.savedBooks))
        savedBooks.push(book)
        setBookState({...bookState, savedBooks})
      })
      .catch((e)=>{console.error(e)})
  }
  
  //Remove a book function.
  bookState.handleRemoveBook = (id) => {
    deleteBook(id)
    .then(() => {
      let savedBooks = JSON.parse(JSON.stringify(bookState.savedBooks))
      let booksFiltered = savedBooks.filter(book => book._id !== id)
      setBookState({ ...bookState, savedBooks: booksFiltered })
    })
    .catch(e => console.log(e))
  }
  
  //update savedBooks whenever book is saved or deleted
  useEffect(() => {
    getBooks()
      .then(({data: savedBooks}) => {
        setBookState({...bookState, savedBooks})
      })
      .catch(e=>console.error(e))
  }, [])

  //Render Pages
  return (
    <BookContext.Provider value = {bookState}>
      <Router>
        <div class="container">
          <Link to="/">Search </Link>
          <Link to="/saved">Saved </Link>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
    </BookContext.Provider>
  );
}

export default App;
