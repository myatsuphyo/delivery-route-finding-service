module.exports = function (app) {
    const routeController = require('../controllers/route.controller');

    app.get('/api/cost/:givenRoute', (req, res) => {
        routeController.findCostForGivenRoute(req, res);
    });

    app.get('/api/cheapest/:start/:end', (req, res) => {
        routeController.findCheapestRoute(req, res);
    });

    app.get('/api/possible/:start/:end/', (req, res) => {
        routeController.findPossibleRoutes(req, res);
    });

    app.get('/api/possible/:start/:end/:stop', (req, res) => {
        routeController.findPossibleRoutes(req, res);
    });

    app.get('/api/possible/:start/:end/:stop/:sameRoute', (req, res) => {
        routeController.findPossibleRoutes(req, res);
    });
    
    app.get("/", function (req, res) {
        res.send(
            "The app is running"
        );
    });
};