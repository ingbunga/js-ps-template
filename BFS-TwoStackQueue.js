class TwoStackQueue{
    front = []
    back  = []
    get length(){
        return this.front.length + this.back.length;
    }
    enqueue(...x){
        this.back.push(...x);
    }
    dequeue(){
        if (this.front.length <= 0){
            while (this.back.length > 0) {
                this.front.push(this.back.pop());
            }
        }
        return this.front.pop();
    }
    front() {
        return (this.front[this.front.length] !== undefined) 
            ? this.front[this.front.length] 
            : this.back[0];
    }
    back() {
        return (this.front[0] !== undefined) 
            ? this.front[0]
            : this.back[this.back.length];
    }
}


function BFS(graph, start_node) {
    const visited = new Set();
    const queue = new TwoStackQueue();

    queue.enqueue(start_node);

    while (queue.length > 0) {
        const node = queue.dequeue();
        if (!visited.has(node)) {
            visited.add(node);
            queue.enqueue(...graph[node]);
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
console.log(BFS(graph, 'A'));