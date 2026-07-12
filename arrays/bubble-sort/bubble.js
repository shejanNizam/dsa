//  Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.

const myArray = [64, 34, 25, 12, 22, 11, 90, 5]; // length = 8

const n = myArray.length;

for (let i = 0; i < n - 1; i++) {
  for (j = 0; j < n - i - 1; j++) {
    if (myArray[j] > myArray[j + 1]) {
      if (myArray[j] > myArray[j + 1]) {
        [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
      }
    }
  }
}

console.log("Sorted Array: ", myArray);
