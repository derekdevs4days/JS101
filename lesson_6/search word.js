/*
input: string that is the target and a string that is a sentence.
output: number
Rules: 
- return a number representing the amount of times our first arguement appears in the second arguement
- assume that word and text will always be inputed
- words are separated by spaces.

Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. Also assume that the search is case-insensitive.


Exam

searchWord('sed', text);      // 3
 */
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(target, paragraph) {
  let highlighted = "";
  let arr = paragraph.split(' ');
  for (let char of arr) {
    if (char.toLowerCase() === target) {
      highlighted += `**${char}** `;
    } else {
      highlighted += `${char} `;
    }
  }
  return highlighted.trim();
}
console.log(searchWord('sed', text));