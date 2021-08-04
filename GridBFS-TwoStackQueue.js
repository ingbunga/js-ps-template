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



const BLOCK = {
    WALL: 1,
    BLANK: 0,
}
Object.freeze(BLOCK);



// Node = {x: 0, y:0}
function BFS(map, start_node) {

    const [N, M] = [map.length, map[0].length];
    const visited = [...new Array(N)].map(()=>[...new Array(M)].map(()=>false));
    const queue = new TwoStackQueue();

    queue.enqueue(start_node);

    while (queue.length > 0) {
        const node = queue.dequeue();
        const {x, y} = node;

        if ((0 <= x && x < M) && (0 <= y && y < N) && !visited[y][x] && /* is valid */
            ( map[y][x] === BLOCK.BLANK ) /* real expression */
        ) {
            visited[y][x] = true;
            queue.enqueue(
                {x: node.x+1, y: node.y},
                {x: node.x-1, y: node.y},
                {x: node.x, y: node.y+1},
                {x: node.x, y: node.y-1}
            );
        }
    }
    
    return visited;
}












/// TEST
const stdin = [
    '0 0',
    '0 1',
    '1 1',
    '1 2',
    '1 0',
    '2 2',
    '2 3',
    '2 4',
    '3 4',
    '4 4',
    '4 5',
]
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


const [M, N, K] = [10, 10, 10]
let cnt = 0;

var map = [...new Array(N)].map(()=>[...new Array(M)].map(()=>BLOCK.WALL));

for (let __ = 0; __ < K; __++) {
    const [X, Y] = input().split(' ').map(e=>+e);
    map[Y][X] = BLOCK.BLANK;
}

console.log(BFS(map, {y:0, x:0}));




//for debug
function stringfyMap(map){
    return map.map(e=>e.join('')).join('\n');
}