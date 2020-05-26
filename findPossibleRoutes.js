var routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

function findPossibleRoutes(inputRoute) {
    inputRoute = inputRoute.split("");
    var cost = 0;
    for (i = 0; i < inputRoute.length - 1; i++) {
        var searchingRoute = inputRoute[i] + inputRoute[i + 1];
        for (j = 0; j < routes.length; j++) {
            if (routes[j].includes(searchingRoute)) {
                routes[j] = routes[j].replace(searchingRoute, '00');
                cost += parseInt(routes[j]);
                break;
            }
        }
    }
    console.log(cost);
    return cost;
}

findPossibleRoutes('ABE');
findPossibleRoutes('AD');
findPossibleRoutes('EACF');
findPossibleRoutes('AFD');