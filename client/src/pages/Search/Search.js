import React, {useContext} from 'react'
import BookContext from '../../utils/BookContext'

const Search = () =>{
  
  const { searchedBook, searchedBooks, handleInputChange, findBooks, saveBook } = useContext(BookContext)

  return (
    <> 
      <div>
        {/* HEADER */}
        <h1>(React) Google Books Search</h1>
        <h3>Search for and save books of interest.</h3>
      </div>

      <form>
        {/* SEARCH FORM */}
        <p>
          <label htmlFor="searchedBook">Search for a book</label>
          <input 
            type="text"
            name="searchedBook"
            id="searchedBook"
            value={searchedBook}
            onChange={handleInputChange}
            />
        </p>
        <p>
          <button 
            onClick={findBooks}
          >
              Search</button>
        </p>
      </form>

      <div>
        {/* RENDER BOOKS */}
        {
          searchedBooks.length ? searchedBooks.map(book => (
            <div>
              <h3>Title: {book.volumeInfo.title}</h3>
              <h2>Author(s): {book.volumeInfo.authors}</h2>
              {/* <p>Description: </p> */}
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Photo"/>
              <a href={book.volumeInfo.previewLink}>Preview link</a>
              <button onClick={()=>saveBook(book)}>Save this book</button>
            </div>
          )) : null
        }
      </div>
    </>
  )
}

export default Search