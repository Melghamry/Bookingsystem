const express = require('express');
const author = require('../models/author');
const router = express.Router();
router.post('/', async(req, res) => {
    const { name } = req.body;
    let foundAuthor = await author.findOne({ name: name })
    if (foundAuthor) {
        return res.status(403).send( "massage: there is already an author")
    }
    let newAuthor = await author.create({ name })
    res.json(newAuthor)
})
router.get('/', async (req, res) => {
    res.send(`hello world`);
});
module.exports = router;