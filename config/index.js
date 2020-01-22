//config/index.js
const MONGODB_URI = "mongodb://localhost/reactbooksdb";
module.exports = require('mongoose')
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })