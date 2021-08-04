
function DFS(graph, start_node) {
    const visited = new Set();
    const stack = [];

    stack.push(start_node);

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            stack.push(...graph[node]);
        }
    }
    
    return visited.keys();
}



















// Test ==================================================
graph = {
    'A': ['B'],
    'B': ['A', 'C', 'H'],
    'C': ['B', 'D'],
    'D': ['C', 'E', 'G'],
    'E': ['D', 'F'],
    'F': ['E'],
    'G': ['D'],
    'H': ['B', 'I', 'J', 'M'],
    'I': ['H'],
    'J': ['H', 'K'],
    'K': ['J', 'L'],
    'L': ['K'],
    'M': ['H']
}
console.log(DFS(graph, 'A'));