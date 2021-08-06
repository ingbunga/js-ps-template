const fs = require('fs')
const stdin = fs.readFileSync('dev/stdin').toString().split('\n');
 
// INPUT FOR BOJ. works like input in python.
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// works like reversed in python.
const reversed = l => [...l].reverse();


function stableSort(arr,key=e=>e){
    return arr.map((e,i)=>[e,i]).sort((a,b)=>key(a[0])===key(b[0])?a[1]-b[1]:key(a[0])-key(b[0])).map(e=>e[0]);
}











