// given an unsorted array of integers find the maximum difference
// between two consecutive elements in it's sorted form

// this implementation is at least O (n log n) time because of the sorting
function bigGap(arr){
    arr.sort((a,b) => a-b);  // this is O(n log n)
    let maxGap = 0;
    
    // USING REDUCER 
    let maxGapReducer = arr.reduce((accumulator, curr,index,arr) => {
        if(accumulator < arr[index+1] - curr){
        accumulator = arr[index+1]-curr;
        }
        return accumulator;
    }, 0);

    // USING FOR LOOP
    for(let i=1; i < arr.length; i++){  // this is O(n)
        let currentDiff = arr[i] - arr[i-1];
        maxGap = Math.max(maxGap,currentDiff);
    }

    console.log(maxGap);
    console.log(maxGapReducer);
}


const arr = [10,3,5,6,2];
const arr2 = [10,-3,5,6.5,2];
const arr3 = [10,3];
const arr4 = [10];
const arr5 = [-2,0.5,7,4.47,3,1.56,2.5];

bigGap(arr);
bigGap(arr2);
bigGap(arr3);
bigGap(arr4);
bigGap(arr5);

