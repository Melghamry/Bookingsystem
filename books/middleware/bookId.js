const { request } = require('express');
const mongoose = require('mongoose');
const book = require('../models/book');
module.exports = async function (req, res, next) {
    const { bookId } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(bookId)) {
    //     return res.status(404).send({ error: 'Invalid book id' });
    // }
    try {
        const foundBook = await book.findById(bookId);
        if (!book) {
            return res.status(404).send({ error: 'Book not found' });
        
        }
        req.foundBook = foundBook;
        next();
    } catch (err) {
        console.log(err)
    }
}
