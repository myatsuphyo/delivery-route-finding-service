var routesGraph = require('../models/route.default');

function lowestCostNode(costs, processed) {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

function dijkstra(routesGraph, startPoint, finishPoint) {

    // track lowest cost to reach each node
    // const costs = Object.assign({ finishPoint: Infinity }, routesGraph.startPoint);
    const costs = {};
    costs[finishPoint] = Infinity;

    // track paths
    const parents = {};
    parents[finishPoint] = null;

    for (let child in routesGraph[startPoint]) {
        parents[child] = startPoint;
        costs[child] = routesGraph[startPoint][child];
    }

    // track nodes that have already been processed
    const processed = [];

    let node = lowestCostNode(costs, processed);

    while (node) {
        console.log(node);
        let cost = costs[node];
        let children = routesGraph[node];
        for (let n in children) {
            let newCost = cost + children[n];
            if (!costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }

        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = [];
    let parent = parents[finishPoint];
    while (parent && parent !== startPoint) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();
    optimalPath = [startPoint, ...optimalPath, finishPoint];
    const results = {
        cost: costs[finishPoint],
        // route: optimalPath
    };
    return results;
};

find(
    'E',
    'D'
);
function find(startPoint, finishPoint) {
    var result = dijkstra(routesGraph, startPoint, finishPoint);
    return result;
}