var defaultRoutes = require('../models/route.default');

var graph = {};

function lowestCostNode (costs, processed) {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

// find the cheapest route using Dikjstra's algorithm
function recursive (graph) {
    const costs = Object.assign({ finish: Infinity }, graph.start);
    
    const parents = { finish: null };
    for (let child in graph.start) {
        parents[child] = 'start';
        console.log(parents[child]);
    }

    const processed = [];

    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
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
    let parent = parents.finish;
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();
    const results = {
        cost: costs.finish,
        // route: optimalPath
    };
    return results;
};

exports.find = (startPoint, finishPoint) => {
    graph = {};
    defaultRoutes.forEach((route) => {
        if (route[0] === startPoint) {
            var find = 'start';
        } else {
            var find = route[0];
        }

        var stop = parseInt(route.slice(2, route.length));
        if (graph[find] === undefined) {
            graph[find] = {};
            if (route[1] == finishPoint) {
                graph[find]['finish'] = stop;
            } else {
                graph[find][route[1]] = stop;
            }
        } else {
            if (route[1] == finishPoint) {
                graph[find]['finish'] = stop;
            } else {
                graph[find][route[1]] = stop;
            }
        }
    });

    var result = recursive(graph);
    return result;
}