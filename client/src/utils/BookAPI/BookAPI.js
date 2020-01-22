//client/utils/BookAPI.js
import axios from 'axios'

const BookAPI = {
   //this will RETURN the data; whenever we call BookAPI.getBooks() we can write a .then and .catch
  getBooks: () => axios.get('/books'),

  addBook:  (book) =>axios.post('/books', book),

  //we probably don't need this one, unless we want comments!
  updateBook:  (id, values) =>axios.put(`/books/${id}`, values),

  deleteBook:  (id) =>axios.delete(`/items/${id}`),
}

export default BookAPI