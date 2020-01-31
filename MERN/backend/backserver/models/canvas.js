const mongoose = require('mongoose')

const canvasSchema =  new mongoose.Schema({
        image : {
            type : String
        },
        name : {
            type : String
        },
        bio : String,

})

const canvas = mongoose.model('canvas', canvasSchema)

module.exports = canvas