// var routes = require('../models/route.default');

var graph = {};

const routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

function lowestCostNode(costs, visited) {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!visited.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

function recursive(graph) {
    // lowest cost for each node in the graph
    const costs = Object.assign({ finish: Infinity }, graph.start);
    
    // track paths { visiting_node: from_this_node}
    const parents = { finish: null };
    for (let child in graph.start) {
        parents[child] = 'start';
    }
    // track nodes that have already been visited
    const visited = [];
    let node = lowestCostNode(costs, visited);

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

        visited.push(node);
        node = lowestCostNode(costs, visited);
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
    console.log(results);
    return results;
};

function find (startPoint, finishPoint){
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

    var result = recursive(graph);
    return result;
}

find('E', 'E');