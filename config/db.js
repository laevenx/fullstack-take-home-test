const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/data"

function dbConnect() {
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false,useFindAndModify: false });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('We connected to mongoose')
    });
}

module.exports = dbConnect;