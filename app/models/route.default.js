const routes = [
    'AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'
];

function structureGraph() {
    var graph = {};
    routes.forEach((route) => {
        var find = route[0];

        var stop = parseInt(route.slice(2, route.length));
        if (graph[find] === undefined) {
            graph[find] = {};
        }

        graph[find][route[1]] = stop;
    });
    console.log(graph);
    return graph;
}

module.exports = structureGraph(routes);