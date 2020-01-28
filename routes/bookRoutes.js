const { Book } = require('../models')

module.exports = app => {
  //Get all books.
  app.get('/books', (req, res) => {
    Book.find({})
      .then(books => res.json(books))
      .catch(e => console.error(e))
  })
  
  //Post one book.
  app.post('/books', (req, res) => {
    Book.create(req.body)
      .then(book => res.json(book))
      .catch(e => console.error(e))
  })
  
  //UPDATE one book.
  app.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  //DELETE one book.
  app.delete('/books/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
}