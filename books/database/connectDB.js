const mongoose = require('mongoose');
const connectDB = async () => {
    const connection = await mongoose.connect('mongodb+srv://i8amry:99890700@cluster0.txe41o8.mongodb.net/?retryWrites=true&w=majority');
    console.log(`MongoDB connected:${mongoose.connection.host}`);

};
    module.exports = connectDB; 