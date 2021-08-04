const fs = require('fs')
const stdin = fs.readFileSync('dev/stdin').toString().split('\n');
 
const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const reversed = l => [...l].reverse();













