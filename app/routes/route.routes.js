module.exports = function (app) {
    const routeController = require('../controllers/route.controller');

    app.get('/object', (req, res) => {
        routeController.findCostForGivenRoute(req, res);
    });
};