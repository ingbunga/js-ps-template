class Node {
    data = null;
    before = null;
    next = null;

    constructor(data) {
        this.data = data;
    }

    sucide() {
        if (this.next === null)
            this.next.before = this.before;
        if (this.before === null)
            this.before.next = this.next;
    }
}

class LinkedList{
    head = null;
    tail = null;
    length = 0;

    push(x) {
        const node = new Node(x);

        if (this.length <= 0) {
            this.tail = this.head = node;
        }
        else{
            this.tail.next = node;
            node.before = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        const temp = this.tail;

        if (this.length <= 0) {
            return undefined;
        } 
        else if (this.length == 1) {
            this.tail = this.head = null;
        }
        else {
            const newTail = this.tail.before;
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
        return temp.data;
    }

    pushLeft(x) {
        const node = new Node(x);

        if (this.length <= 0) {
            this.tail = this.head = node;
        }
        else{
            this.head.before = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    popLeft() {
        const temp = this.head;

        if (this.length <= 0) {
            return undefined;
        }
        else if (this.length == 1) {
            this.tail = this.head = null;
        }
        else {
            const newHead = this.head.next;
            newHead.before = null;
            this.head = newHead;
        }
        this.length--;
        return temp.data;
    }

    toList() {
        const returnList = [];
        
        for(let node = this.head; node !== null; node = node.next){
            returnList.push(node.data);    
        }

        return returnList;
    }

    extend(l) {
        for(let i of l){
            this.push(i);
        }
    }

    clear(){
        this.head = this.tail = null;
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
    const deque = new LinkedList();

    deque.push(start_node);

    while (deque.length > 0) {
        const node = deque.popLeft();
        const {x, y} = node;

        if ((0 <= x && x < M) && (0 <= y && y < N) && !visited[y][x] && /* is valid */
            ( map[y][x] === BLOCK.BLANK ) /* real expression */
        ) {
            visited[y][x] = true;
            deque.extend([
                {x: node.x+1, y: node.y},
                {x: node.x-1, y: node.y},
                {x: node.x, y: node.y+1},
                {x: node.x, y: node.y-1}
            ]);
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