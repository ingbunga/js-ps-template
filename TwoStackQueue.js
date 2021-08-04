class TwoStackQueue{
    front = []
    back  = []
    get length(){
        return this.front.length + this.back.length;
    }
    enqueue(x){
        this.back.push(x);
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


