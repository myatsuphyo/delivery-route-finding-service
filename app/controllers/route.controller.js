// const Route = require('../models/route.model');
var routes = require('../models/route.default');

exports.findCostForGivenRoute = (req, res) => {
    var givenRoute = req.params.givenRoute.split("");
    var cost = 0;
    for (i = 0; i < givenRoute.length - 1; i++) {
        var searchingRoute = givenRoute[i] + givenRoute[i + 1];
        for (j = 0; j < routes.length; j++) {
            if (routes[j].includes(searchingRoute)) {
                newCost = routes[j].replace(searchingRoute, '00');
                cost += parseInt(newCost);
                break;
            }
        }
    }
    if (res !== '') {
        res.json({ data: { route: req.params.givenRoute, cost: cost } }).status(200)
    } else {
        return cost;
    }
}   

const findCheapestRoutesService = require('../services/cheapest.route.service')
exports.findCheapestRoute = (req, res) => {
    try {
        let cheapestRoute = findCheapestRoutesService.find(req.params.start, req.params.end);
        res.json({ data: cheapestRoute }).status(200)
    } catch (error) {
        res.json({ error: { code: 500, message: error.message } }).status(200);
    }
}