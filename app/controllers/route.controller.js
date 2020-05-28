// const Route = require('../models/route.model');
var routes = require('../models/route.default');

/**
* GET route /api/cost/:givenRoute.
* Method - GET
* params - givenRoute(String) 
* response - json { cost: (int)}
**/
exports.findCostForGivenRoute = (req, res) => {
    var givenRoute = req.params.givenRoute.split("");
    var cost = 0;
    var notFoundRoute = [];
    for (i = 0; i < givenRoute.length - 1; i++) {
        var searchingRoute = givenRoute[i] + givenRoute[i + 1];
        for (j = 0; j < routes.length; j++) {
            if (routes[j].includes(searchingRoute)) {
                newCost = routes[j].replace(searchingRoute, '00');
                cost += parseInt(newCost);
                found = true;
                break;
            } else {
                notFoundRoute.push(searchingRoute);
            }
        }
    }

    if (notFoundRoute.length === 0) {
        cost = 0;
    }

    if (res!== '') {
        res.json({ data: { route: req.params.givenRoute, cost: cost } }).status(200)
    } else {
        // for console
        return cost;
    }
}   

/**
* GET route /api/cost/cheapest/:start/:end.
* Method - GET
* params - start(String), end(String)
* response - response - json { cost: (int)}
**/
const findCheapestRoutesService = require('../services/cheapest.route.service')
exports.findCheapestRoute = (req, res) => {
    try {
        let cheapestRoute = findCheapestRoutesService.find(req.params.start, req.params.end);
        if (res !== '') {
            res.json({ data: cheapestRoute }).status(200)
        } else {
            // for console
            return cheapestRoute.cost;
        }
    } catch (error) {
        res.json({ error: { code: 500, message: error.message } }).status(200);
    }
}