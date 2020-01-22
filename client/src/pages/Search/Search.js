import React, {useContext} from 'react'

const Search = () =>{
  
  // const { searchedBooks, handleSearchBook, handleInputChange } = useContext(SearchedBookContext)


  return (
    <> 
      <div>
        {/* HEADER */}
        <h1>(React) Google Books Search</h1>
        <p>Search for and save books of interest.</p>
      </div>

      <form>
        {/* SEARCH FORM */}
        <p>
          <label htmlFor="book">book</label>
          <input 
            type="text"
            name="book"
            id="book"
            // value={book}
            // onChange={handleInputChange}
            />
        </p>
        <p>
          <button 
            // onClick={findBooks}
          >
              Search for book</button>
        </p>
      </form>

      <div>
        {/* RENDER BOOKS */}

      </div>
    </>
  )
}

export default Search