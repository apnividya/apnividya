const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://apnividyacom:vidya-123apni@cluster0.fdvcyrs.mongodb.net/Apni-Vidya'

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('MongoDB connection failed');
});

connection.on('connected', () => {
    console.log('MongoDB connection successful');
});

module.exports = mongoose;