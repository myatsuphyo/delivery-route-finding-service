var routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

const problem = {
    start: {},
    A: { B: 1, C: 4, D: 10 },
    B: { finish: 3 },
    C: { D: 4, F: 2 },
    D: { finish: 1 },
    E: { B: 3, A: 2 },
    F: { D: 1 },
    finish: {}
};

// 
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
    }

    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs.finish,
        path: optimalPath
    };

    return results;
};

console.log(dijkstra(problem));