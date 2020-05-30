const routeController = require('./app/controllers/route.controller');

console.log('Welcome to console app of Eko delivery service!');
console.log('Currently, the following routes are used as default routes to use the service.');
console.log('A->B', '\nA->C', '\nA->D', '\nB->E', '\nC->D', '\nC->F', '\nD->E', '\nE->B', '\nE->A', '\nF->D');
console.log('Type 1 to find the cost of given route. \n' +
    'Type 3 to find the cheapest route from given destinations.');

chooseType();
function chooseType() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Please, choose a type = ', (type) => {
        if (type == 1) {
            console.clear();
            rl.question('Type a route to find its cost = ', (route) => {
                let req = {};
                req.params = { 'givenRoute': route };
                var output = routeController.findCostForGivenRoute(req, '');
                console.clear();
                if (output == 0) {
                    console.log('NO SUCH ROUTE');
                } else {
                    console.log('The cost of route ' + route + ' = ' + output);
                }
            })
        } else if (type == 3) {
            console.clear();
            rl.question('Type the start point = ', (start) => {
                console.clear();
                rl.question('Type the end point from start point ' + start + ' = ', (end) => {
                    let req = {};
                    req.params = { 'start': start, 'end': end };
                    var output = routeController.findCheapestRoute(req, '');
                    console.clear();
                    console.log('The cost of cheapest route from ' + start + ' to ' + end + ' = ' + output);
                })
            })
        } else {
            rl.close();
            console.log("Please, choose a valid type");
            chooseType();
        }
    });
}

