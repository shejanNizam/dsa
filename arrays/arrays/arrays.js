/*
const my_array = [1, 2, 3, 4, 5];

// Accessing elements
console.log(my_array[0]); // Output: 1
console.log(my_array[2]); // Output: 3
*/

// ------------------------------------

const my_array = [7, 12, 9, 4, 11];

let minValue = my_array[0];

//  Way - 1
// for (let i of my_array) {
//   if (i < minValue) {
//     minValue = i;
//   }
// }

//  Way - 2
for (let i = 0; i < my_array.length; i++) {
  if (my_array[i] < minValue) {
    minValue = my_array[i];
  }
}

console.log("Minium Value: ", minValue);

// --------------------------------------------
