var routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

var problem = {};

findCheapestRoutes('E', 'D');

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

function dijkstra (graph) {

    // track lowest cost to reach each node
    const costs = Object.assign({ finish: Infinity }, graph.start);
    
    // track paths
    const parents = { finish: null };
    for (let child in graph.start) {
        parents[child] = 'start';
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
        path: optimalPath
    };
    // console.log(results);
    return results;
};

function findCheapestRoutes(startPoint, finishPoint) {
    routes.forEach((route) => {

        if (route[0] === startPoint) {
            var find = 'start';
        } else {
            var find = route[0];
        }

        var stop = parseInt(route.slice(2, route.length));
        if (problem[find] === undefined) {
            problem[find] = {};
            if (route[1] == finishPoint) {
                problem[find]['finish'] = stop;
            } else {
                problem[find][route[1]] = stop;
            }
        } else {
            if (route[1] == finishPoint) {
                problem[find]['finish'] = stop;
            } else {
                problem[find][route[1]] = stop;
            }
        }
    });
    dijkstra(problem);
}
// console.log(dijkstra(problem));