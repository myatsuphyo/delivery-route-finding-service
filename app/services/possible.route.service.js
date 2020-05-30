const routes = require('../models/route.default');

graph = {};

function findCost(path) {
    let deliveryCost = 0;
    const pathArray = [...path];

    for (let index = 1; index < pathArray.length; index++) {
        const startPoint = pathArray[index - 1];
        const endPoint = pathArray[index];

        // stop if start node is notfound
        if (!graph[startPoint]) {
            return null;
        }

        // stop if end node is notfound
        const edge = graph[startPoint][endPoint];
        if (!edge) {
            return null;
        }

        deliveryCost += edge;
    }

    return deliveryCost;
}

exports.find = (startPoint, endPoint, stop = null, sameRouteCost = null) => {
    // rearrange a graph
    routes.forEach((route) => {
        var find = route[0];

        var stop = parseInt(route.slice(2, route.length));
        if (graph[find] === undefined) {
            graph[find] = {};
        }

        graph[find][route[1]] = stop;
    });
    console.log()
    const possibleDeliveryRoutes = recursive(startPoint, endPoint, stop, sameRouteCost);
    var result =possibleDeliveryRoutes.map(possibleDeliveryRoute => ({
        route: possibleDeliveryRoute,
        cost: findCost(possibleDeliveryRoute, graph),
    }));
    return result.length;
}

function recursive(startPoint, endPoint, stop = null, sameRouteCost = null, visitedRoute = '', currentCost = 0) {
    const nodesOfstartPoint = graph[startPoint];
    let route = visitedRoute;

    if (!route && !nodesOfstartPoint) {
        return [];
    }

    if (sameRouteCost !== null && currentCost >= sameRouteCost) {
        return '';
    }

    // found the end point
    if (route && startPoint === endPoint) {
        route += endPoint;

        if (sameRouteCost !== null && currentCost < sameRouteCost && graph[endPoint]) {
            const routeArray = Object.keys(graph[endPoint])
                .map(node => {
                    const edge = nodesOfstartPoint[node];

                    if (edge === 0) {
                        return '';
                    }

                    return recursive(node, endPoint, stop, sameRouteCost, route, currentCost + edge,
                    );
                })
                .filter(route => route !== '');

            return [route, ...routeArray];
        }

        return route;
    }

    const skipDuplicatedRoute = [...route].splice(-1) + startPoint;
    if (sameRouteCost !== null && route.includes(skipDuplicatedRoute)) {
        return '';
    }

    route += startPoint;

    // stop if stop of route is more that limit stop
    if (stop !== null && route.length > stop) {
        return '';
    }

    const routeArray = Object.keys(nodesOfstartPoint)
        .map(node => {
            const edge = nodesOfstartPoint[node];

            // stop if edge of node is 0
            if (edge === 0) {
                return '';
            }

            return recursive(
                node,
                endPoint,
                stop,
                sameRouteCost,
                route,
                currentCost + edge,
            );
        })
        .filter(route => route !== '');

    return [].concat.apply([], routeArray);
}
