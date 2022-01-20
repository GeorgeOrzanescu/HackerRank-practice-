/**

Suppose there is a circle. There are  petrol pumps on that circle.
 Petrol pumps are numbered 0 to n-1 (both inclusive). You have two pieces of information corresponding to each of the petrol pump:
  (1) the amount of petrol that particular petrol pump will give,
  and (2) the distance from that petrol pump to the next petrol pump.

Initially, you have a tank of infinite capacity carrying no petrol.
You can start the tour at any of the petrol pumps.
Calculate the first point from where the truck will be able to complete the circle. C
onsider that the truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.
**/

// PUMP --> given petrol    distance to next
// 1 liter --> 1 kilometer



let data = [
  [1, 5],
  [10, 3],
  [3, 4]
];


let data2 = [
  [1, 5],
  [3, 3],
  [6, 1],
  [3, 4]
];

// imposible test
let data3 = [
  [1, 1],
  [2, 2],
  [3, 5],
  [1, 11],
  [1, 2]
]

function truckTour(petrolpumps) {
  // Write your code here
  let curPetrol = 0;
  let candidate = 0;

  for (let i = 0; i < petrolpumps.length; i++) {
    curPetrol += (petrolpumps[i][0] - petrolpumps[i][1]);
    if (curPetrol < 0) {
      candidate = i + 1;
      curPetrol = 0;
    }
  }
  return candidate;

}




console.log(truckTour(data));
console.log(truckTour(data2));
console.log(truckTour(data3));
