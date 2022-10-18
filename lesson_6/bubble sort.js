/*
Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

Examples:
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
 */

function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] <= arr[i]) continue;
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([115,68,25,69,58,95,1,6,5,1,397,4845,115,668,148487,6,87,29,29,184,1516,4884612,35,4,89,38,49794,194416,15,2,679,15,77,1,58,68,129,65,15,11,1816,850,753,951,64513977,3512,184,30,75,9,845,31164,54,257,13,46,87,29,29,184,1516,4884612,51806,35,4,89,6,41,3,9794,54,812,0,689,156,81,8,35,15,75,9461,55,511,979,4161,984,564,649,45,4,4,79841,64,37,976519,244,8791,3311,97446,115,68,25,69,58115,68,25,69,58,95,1,6,5,1,397,4845,115,668,148487,6,87,29,29,184,1516,4884612,35,4,89,38,49794,194416,15,2,679,15,77,1,58,68,129,65,15,11,1816,850,753,951,64513977,3512,184,30,75,9,845,31164,54,257,13,46,87,29,29,184,1516,4884612,51806,35,4,89,6,41,3,9794,54,812,0,689,156,81,8,35,15,75,9461,55,511,979,4161,984,564,649,45,4,4,79841,64,37,976519,244,8791,3311,97446,115,68,25,69,58,95,1,6,5,1,397,4845,115,668,148487,6,87,29,29,184,1516,4884612,35,4,89,38,49794,194416,15,2,679,15,77,1,58,68,129,65,15,11,1816,850,753,951,336,1211,205,36,457,4,694,5,1,6,4884612,51806,35,4,89,6,41,3,9794,54,812,0,689,156,81,8,35,15,75,9461,55,511,979,4161,984,564,649,45,4,4,79841,64,37,976519,244,8791,3311,97446,115,68,25,69,58115,68,25,69,58,95,1,6,5,1,397,4845,115,668,148487,6,87,29,29,184,1516,4884612,35,4,89,38,49794,194416,15,2,679,15,77,1,58,68,129,65,15,11,1816,850,753,951,64513977,3512,184,30,75,9,845,31164,54,257,13,46,87,29,29,184,1516,4884612,51806,35,4,89,6,41,3,9794,54,812,0,689,156,81,8,35,15,75,9461,55,511,979,4161,984,564,649,45,397,4845,115,668,1484,649,19423,69,4,1,6549,3,4654,297,97,3646,1512,35412,45,753,498,784,313,49794,194,15 ,1,6549,3,4654,297,97,3646,1512,35412,45,753,498,784,313,49794,95,1,6,5,1,394,564,649,45,4,4,79841,64,37,976519,244,8791,3311,97446,115,68,25,69,58115,68,25,69,58,95,1,6,5,1,397,4845,115,668,148487,6,87,297,4845,115,668,148487,6,87,29,29,184,1516,4884612,35,4,89,38,49794,194416,15,2,679,15,77,1,58,68,129,65,15,11,1816,850,753,951,336,1211,205,36,457,4,694,5,1,397,4845,115,668,1484,649,19423,69,4,1,6549,3,4654,297,97,3646,1512,35412,45,753,498,784,313,49794,194,15 ,1,6549,3,4654,297,97,3646,1512,35412,45,753,498,784,313,49794]));