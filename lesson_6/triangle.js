/*

A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Examples:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

input: 3 num arguements representing sides of a triangle.
output: string representing type of triangle

algorithm:
- declare a variable name sides and append the three parameters to it.
- return invalid if any are 0
- sort sides ascending
- return invalid if sides[0] + sides[1] < sides[3]
if all sides === return equlateral
else if sides !== return scalene
else return isoceles

 */

let triangle = function(s1, s2, s3) {
  let sides = [s1,s2,s3].sort((a,b) => a - b);
  if (sides.includes(0)) return "invalid";
  if (sides[0] + sides[1] < sides[2]) return "invalid";

  if (sides[0] === sides[1] && sides[0] === sides[2]) {
    return "equilateral";
  } else if (sides[0] !== sides[1] && sides[1] !== sides[2] && sides[0] !== sides[2]) {
    return "scalene";
  } else {
    return "isosceles";
  }
};

console.log(triangle(3,3,3) === "equilateral");
console.log(triangle(3,3,1.5) === "isosceles");
console.log(triangle(3,4,5) === "scalene");
console.log(triangle(0,3,3) === "invalid");
console.log(triangle(3,1,1) === "invalid");