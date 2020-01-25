module.exports = (model, Schema) => {
  const Book = new Schema({
    title: String,
    authors: [{ type: String }],
    image: String,
    link: String,
  })

  return model('Book', Book)
}
