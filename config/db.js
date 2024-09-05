const mongoose = require('mongoose')

const options = {
    user: '',
    pass: ''
}

const url = `mongodb://localhost:27017/valuelabs`

const initMongoDB = async () => {
    try {
        await mongoose.connect(url, options)
        console.log('connected to db');
    } catch (error) {
        throw error
    }
}

module.exports = {
    initMongoDB
}

