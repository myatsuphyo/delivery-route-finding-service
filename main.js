var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// // Configuring the database
// const dbConfig = require('./app/config/mongodb.config.js');
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url)
//     .then(() => {
//         console.log("Successfully connected to MongoDB.");
//     }).catch(err => {
//         console.log('Could not connect to MongoDB.');
//         process.exit();
//     });

// temporarily setting up routes in localStorage
var routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

require('./app/routes/route.routes.js')(app);

// Create a Server
var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port
    console.log('listening on 8080');
})

module.exports = app;
