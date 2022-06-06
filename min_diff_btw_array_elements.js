let arr = [1, 19, -4, 31, 38, 25, 100];
let sortedArr = arr.sort();
let difference;
let leastDifference = Math.abs(sortedArr[0]-sortedArr[1]);

for(let a = 0; a < sortedArr.length; a++) {
  difference = Math.abs(sortedArr[a]-sortedArr[a+1]);
  if(difference < leastDifference) {
    leastDifference = difference;
  }
}
console.log(leastDifference);
