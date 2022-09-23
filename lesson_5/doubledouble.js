/*
P.
  input: int
  output: int
  rules:
    - multiply int by 2 unless it is a double number
    - double numbers are...
      -even in length
      -same left and right side digits
      - exp: 33, 5555, 103103
E.
  twice(37) => 37
  twice(334433) => 668866
  twice(444)   => 888
  twice(44)    => 44
  twice(107)   => 214
  twice(103103) => 103103

D. 
  numbers and strings

A.
  -declare a variable and assign it length of num
  -conditional to check length of num === even...
    - find value of right
    - ind value of left
      - if same => return num
      - else => return num * 2


  -return num * 2 if length is odd
*/ 

function twice(num) {
  const strNum = num.toString();

  if (strNum.length % 2 === 0) {
    let mid = strNum.length / 2;
    let left = Number(strNum.slice(0, mid));
    let right = Number(strNum.slice(mid - strNum.length - 1));
    return left === right ? num : num * 2;
  }

  return num * 2;
}