/*
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

 */
function merge(arr1, arr2) {
  let result = [];
  let reference = [...arr1, ...arr2];
  let num = 0;

  while (reference.length > 0) {
    let index = reference.indexOf(num);
    if (index !== -1) {
      result.push(num);
      reference.splice(index,1);
    } else {
      num++;
    }
  }
  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));