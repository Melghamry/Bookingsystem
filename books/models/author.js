const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        
    }
})
module.exports= mongoose.model('author', authorSchema);