const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cg19', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  module.exports.canvas = require('./canvas')
