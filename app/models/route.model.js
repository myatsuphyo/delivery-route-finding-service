const mongoose = require('mongoose');

const RouteSchema = mongoose.Schema({
    route: String
});

module.exports = mongoose.model('Route', RouteSchema);
