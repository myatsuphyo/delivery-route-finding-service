module.exports = function (app) {
    const routeController = require('../controllers/route.controller');

    app.get('/api/cost/:givenRoute', (req, res) => {
        routeController.findCostForGivenRoute(req, res);
    });

<<<<<<< HEAD
    app.get('/api/cost/cheapest/:start/:end', (req, res) => {
=======
    app.get('/api/cheapest/:start/:end', (req, res) => {
>>>>>>> parent of f094bb2... Clean before adding frontend
        routeController.findCheapestRoute(req, res);
    });
    
    app.get("/", function (req, res) {
        res.send(
            "Working"
        );
    });
};