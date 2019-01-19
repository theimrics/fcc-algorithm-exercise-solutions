// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const startIndex = alphabetStr.indexOf(str[0]);
    const alphabetSegment = alphabetStr.slice(startIndex, str.length + startIndex);
  
    for(let i of alphabetSegment) {
      if(!str.includes(i)) {
        return i;
      }
    }
    
    return undefined;
  }
  
  fearNotLetter("stvwx");