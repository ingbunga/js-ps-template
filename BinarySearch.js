function bsearch(arr, el) {
    let front=0, 
        back=arr.length-1, 
        mid;
    
        while (front <= back) {
        mid = Math.floor((front+back)/2);
        if (arr[mid] === el) return mid;
        else if (arr[mid] > el) back = mid-1;
        else front = mid+1;
    }

    return -1;
}









// @test =========================================================
const SIZE = 1000000;
const arr = [...new Array(SIZE)].map((e,i)=>i);

let successCnt=0, 
    failCnt=0;

for (let i = 0; i < SIZE; i++) {
    if (bsearch(arr,i)===i) successCnt++;
    else failCnt++;
}

console.log('success: ', successCnt);