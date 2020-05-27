const Route = require('../models/route.model');

exports.findCostForGivenRoute = (req, res) => {
    // temporarily setting up
    var routes = [
        'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
    ];
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
    res.json({cost: cost}).status(200);
}   

exports.findCheapestRoutes = require('./../../findCheapestRoutes');