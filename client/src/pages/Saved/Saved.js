import React, {useContext} from 'react'
import BookContext from '../../utils/BookContext'

const Saved = () =>{
  const { savedBooks, handleRemoveBook } = useContext(BookContext)

  return (
    <>
      <h1>Saved Books</h1>

      {/* Show all saved books */}
      {
        savedBooks.length ? savedBooks.map(book => (
          <div class="col s12 m6">
            <div class="card horizontal">
              <div class="card-image">
                <img class="responsive-img" src={book.image}/>
              </div>
              <div class="card-content">
                <h6 class="card-title">{book.title}</h6>
                <h6>Author(s):{book.authors}</h6>
              </div>
              <div class="card-action">
                <a class="right-align" href={book.link}>Preview link</a>
                <button class="right-align" onClick={()=>handleRemoveBook(book._id)}>Delete</button>
              </div>
            </div>
          </div>
        )) : null
      }
    </>
  )
}

export default Saved