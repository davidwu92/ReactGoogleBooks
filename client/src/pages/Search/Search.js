import React, {useContext} from 'react'
import BookContext from '../../utils/BookContext'

const Search = () =>{
  
  const { searchedBook, searchedBooks, handleInputChange, findBooks, saveBook } = useContext(BookContext)

  return (
    <> 
        {/* HEADER */}
      <div class="container">
        <h2>(React) Google Books Search</h2>
        <h3>Search for and save books of interest.</h3>
      </div>

      {/* SEARCH FORM */}
      <div class="container">
        <form>
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
      </div>

      <div class="row">
        {/* RENDER BOOKS */}
        {
          searchedBooks.length ? searchedBooks.map(book => (
            <div class="col s12 m6">
              <div class="card horizontal">
                <div class="card-image">
                  <img class="responsive-img" src={book.volumeInfo.imageLinks.smallThumbnail}/>
                </div>
                <div class="card-content">
                  <h6 class="card-title">{book.volumeInfo.title}</h6>
                  <h6>Author(s):{book.volumeInfo.authors}</h6>
                </div>
                <div class="card-action">
                  <a class="right-align" href={book.volumeInfo.previewLink}>Preview link</a>
                  <button class="right-align" onClick={()=>saveBook(book)}>Save this book</button>
                </div>
              </div>
            </div>
          )) : null
        }
      </div>
    </>
  )
}

export default Search