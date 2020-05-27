var routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

var problem = {};

// var problem = {
//     A: { B: 1, C: 4, finish: 10 },
//     B: { E: 3 },
//     C: { finish: 4, F: 2 },
//     D: { E: 1 },
//     start: { B: 3, A: 2 },
//     F: { D: 1 },
//     // start: { A: 0 },
//     finish: {}
// };

// findCheapestRoutes('E', 'E');
// findCheapestRoutes('E', 'D');
findCheapestRoutes('E', 'D');

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
    console.log(problem);
}

const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

// function that returns the minimum cost and path to reach Finish
const dijkstra = (graph) => {

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
    return results;
};

console.log(dijkstra(problem));