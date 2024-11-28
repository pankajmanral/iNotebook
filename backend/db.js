const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/?directConnection=true'

const connectMongoDB = async() => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected");
    } catch (error) {   
        console.log("Error ", error);
    }
}

module.exports = connectMongoDB;