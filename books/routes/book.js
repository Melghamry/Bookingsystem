const { response } = require('express');
const express = require('express');
const book = require('../models/book');
const bookId = require('../middleware/bookId');
const router = express.Router();
// add new book
router.post('/', async (req, res) => {
    try {
        const { name, title, author } = req.body;
        const foundBook = await book.findOne({ name, title,author});
        if (foundBook) {
            return res.status(403).json('already created book')
        }
        const newBook = await book.create({ name, title, author });
        res.json(newBook);
        
    } catch (err) {
        console.log(err);
    }
});
router.get('/', async (req, res) => {
    let data = await book.find({});
    res.json(data);

});
router.get('/:id', bookId, async (req, res) => {  // [63152b71a15db60c12b6ceeb]
   res.json(req.foundBook);
})

module.exports = router;
