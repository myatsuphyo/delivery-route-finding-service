var routes = require('../models/route.default');

var graph = {
    A: { B: 1, C: 4, D: 10 },
    B: { E: 3 },
    C: { D: 4, F: 2 },
    D: { E: 1 },
    E: { B: 3, A: 2 },
    F: { D: 1 }
};


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

function dijkstra (graph, startPoint, finishPoint) {

    // track lowest cost to reach each node
    const costs = Object.assign({ finish: Infinity }, graph.start);
    
    // track paths
    const parents = { finishPoint: null };
    console.log(parents);
    for (let child in graph.startPoint) {
        parents[child] = startPoint;
    }

    // track nodes that have already been processed
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
        // console.log(processed);
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
    routes.forEach((route) => {
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

    var result = dijkstra(graph, startPoint, finishPoint);
    return result;
}