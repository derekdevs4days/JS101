/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Examples:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

input: 3 numbers that are angles
output: type of triangle or invalid

algorithm:
- delcare a varible name angles and initialize it to an array containing arguments
- return invalid if
 - angles don't add up to 180
 - any angle is 0

 return right if one angle is 90
 return obtuse if one anlge is greater than 90
 else return acute
 */

function triangle(a1, a2, a3) {
  let angles = [a1, a2, a3];
  if (angles.reduce((a,c) => a + c, 0) < 180) return 'invalid';
  if (angles.includes(0)) return 'invalid';

  if (angles.includes(90)) return 'right';
  if (angles.some(deg => deg > 90)) return 'obtuse';
  return 'acute';
}
console.log(triangle(60, 70, 50) === 'acute');
console.log(triangle(30, 60, 90) === 'right');
console.log(triangle(120, 50, 10) === 'obtuse');
console.log(triangle(0, 90, 90) === 'invalid');
console.log(triangle(50, 50, 50) === 'invalid');