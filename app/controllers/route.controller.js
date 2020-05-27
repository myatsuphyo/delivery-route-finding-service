// const Route = require('../models/route.model');
var routes = require('../models/route.default');

exports.findCostForGivenRoute = (req, res) => {
    var givenRoute = req.params.givenRoute.split("");
    var cost = 0;
    for (i = 0; i < givenRoute.length - 1; i++) {
        var searchingRoute = givenRoute[i] + givenRoute[i + 1];
        for (j = 0; j < routes.length; j++) {
            if (routes[j].includes(searchingRoute)) {
                routes[j] = routes[j].replace(searchingRoute, '00');
                cost += parseInt(routes[j]);
                break;
            }
        }
    }
    res.json({ data: { route: req.params.givenRoute, cost: cost || 'No route found!' } }).status(200)
}   

exports.findCheapestRoutes = require('./../../findCheapestRoutes');