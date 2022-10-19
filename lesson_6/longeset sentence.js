/*
Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

Problem:
  - input: string
  - output: string and number
  Rules:
  - log the longest sentence based on numbers of words + its number
  - sentences ends in a . ? !
  - 'words' are separated by spaces.
Examples:

longestSentence(longText);
 Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

 The longest sentence has 30 words.

 ----------------------------------------------

 longestSentence(longerText);
 It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

 The longest sentence has 86 words.

 ----------------------------------------------
 longestSentence("Where do you think you're going? What's up, Doc?");
 Where do you think you're going?

 The longest sentence has 6 words.

----------------------------------------------
 longestSentence("To be or not to be! Is that the question?");
 To be or not to be!

 The longest sentence has 6 words.

Data Structure:
  - array

Algortithm:
  - replace all ! and ? with .
  - declare an array 'allSentences' from string input where each element is a sentence.
  - declare a variable 'wordCount' and initialize it to 0;
  - declare a variable 'finalSentence' and initialize it to '';
  - Iterate through the array
    - if not ''
    - Convert el into an array and count words within
    - if word count > previous
     - reassign wordCount to new word count
     - reassign finalSentence to a new sentence
  console.log(finalSentence)
  cosole.log(wordCount)
 */
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

function longestSentence(passage) {
  const modPassage = passage.replaceAll('!', '.').replaceAll('?', '.');
  const allSentences = modPassage.split('.');
  let wordCount = 0;
  let finalSentence;
  allSentences.forEach(sentence => {
    sentence = sentence.trim();
    let currCount = sentence.split(' ').length;
    if (currCount > wordCount) {
      wordCount = currCount;
      finalSentence = sentence;
    }
  });
  const punc = passage[passage.indexOf(finalSentence) + finalSentence.length];
  console.log(finalSentence + punc);
  console.log(`The longest sentence has ${wordCount} words.`);
}

// longestSentence(longText);
// longestSentence(longerText);
// longestSentence("Where do you think you're going? What's up, Doc?");
// longestSentence("To be or not to be! Is that the question?");