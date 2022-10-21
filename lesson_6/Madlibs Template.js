/*
Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text templates. Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll define for yourself.

Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them there without quotes.


 */
const replacement = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
};

const template1 = ['The',['adjective'], 'brown', ['noun'],['adverb'], ['verb'], 'the',['adjective'], 'yellow', ['noun'], ',', 'who', ['adverb'], ['verb'], 'his', ['noun'],'and', 'looks', 'around', '.'];

function madlibs(template) {
  let final = "";
  for (let word of template) {
    if (Array.isArray(word)) {
      let choices = replacement[word];
      let pick = choices[Math.floor(Math.random() * choices.length )];
      final += pick;
      final += ' ';
    } else {
      final += word;
      final += ' ';
    }
  }
  return final;
}
console.log(madlibs(template1));