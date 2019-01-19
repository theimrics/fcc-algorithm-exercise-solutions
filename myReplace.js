// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  let arr = str.split(' ');
  let newStr = '';
  for(let word of arr) {
    if(word === before) {
      newStr = arr.slice(0, arr.indexOf(word));
      if(before[0] === before[0].toUpperCase()) {
        newStr.push(after[0].toUpperCase().concat(after.slice(1)));
      } else {
        newStr.push(after);
      }
      newStr = newStr.concat(arr.slice(arr.indexOf(word) + 1));
      break;
    }
  } 
  newStr = newStr.join(' ');
  return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
