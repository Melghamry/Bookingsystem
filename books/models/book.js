const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    title: {
        type: String,
        required: true,

    },
    author: {
        type: String,
        ref: 'author',
        
    }

});
module.exports = mongoose.model('Book', bookSchema);