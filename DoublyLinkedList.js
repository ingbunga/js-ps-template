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
