const { model, Schema } = require('mongoose')

module.exports = {
  Book: require('./Book.js')(model, Schema)
}
