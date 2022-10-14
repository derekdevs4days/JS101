/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

Examples:
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


input: string of commands
output: depends on the commands

Algorithm:
- declare a vairable named stack and initialize it to an empty array.
- declare a vairable named register and initialize it to 0.
- split string arguement into an array
- iterate through the array
  - ...various conditionals
*/
function minilang(instructions) {
  let register = 0;
  let stack = [];
  instructions = instructions.split(' ');

  for (let ops of instructions) {
    if (!Number.isNaN(Number(ops))) {
      register = Number(ops);
      continue;
    }
    if (ops === 'PUSH') {
      stack.push(register);
      continue;
    }
    if (ops === 'ADD') {
      register += stack.pop();
      continue;
    }
    if (ops === 'SUB') {
      register -= stack.pop();
      continue;
    }
    if (ops === 'MULT') {
      register *= stack.pop();
      continue;
    }
    if (ops === 'DIV') {
      register /= stack.pop();
      continue;
    }
    if (ops === 'REMAINDER') {
      register %= stack.pop();
      continue;
    }
    if (ops === 'POP') {
      register = stack.pop();
      continue;
    }
    if (ops === 'PRINT') {
      console.log(register);
      continue;
    }
  }

}
//minilang('PRINT');
//minilang('5 PUSH 3 MULT PRINT');
//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
//minilang('5 PUSH POP PRINT');
//minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
//minilang('3 PUSH PUSH 7 DIV MULT PRINT');
//minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
//minilang('-3 PUSH 5 SUB PRINT');
//minilang('6 PUSH');
function minilang(program) {
  let stack = [];
  let reg = 0;

  const OPERATION_OF = {
    'PUSH'     : () => stack.push(reg),
    'ADD'      : () => reg += stack.pop(),
    'SUB'      : () => reg -= stack.pop(),
    'MULT'     : () => reg *= stack.pop(),
    'DIV'      : () => reg = Math.floor(reg / stack.pop()),
    'REMAINDER': () => reg = reg % stack.pop(),
    'POP'      : () => reg = stack.pop(),
    'PRINT'    : () => console.log(reg),
  };
  const LOAD = (n) => reg = n;

  program.split(' ').forEach((token) => {
    (OPERATION_OF[token] || LOAD)(Number(token));
  });
}