var routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

function findPossibleRoutes(inputRoute) {
    inputRoute = inputRoute.split("");
    var cost = 0;
    inputRoute.forEach((stop, index) => {
        var searchingRoute = stop + inputRoute[index + 1];
        routes.forEach((route) => {
            if (route.includes(searchingRoute)) {
                route = route.replace(searchingRoute, '00');
                cost += parseInt(route);
            }
        })
    })
    console.log(cost);
    return cost;
}

findPossibleRoutes('ABE');
findPossibleRoutes('AD');
findPossibleRoutes('EACF');
findPossibleRoutes('AFD');