const express = require('express');
const uuid = require('uuid');
const cors = require('cors');
const connectDB = require('./database/connectDB');
connectDB()
const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/api/book', require('./routes/book'))
app.use('/api/author', require('./routes/author'))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(` server listening on ${PORT}`);
});