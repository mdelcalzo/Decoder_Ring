// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 
  
  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    if (encode === false) {
      shift = shift * -1;
    }
    
    let message = input.toLowerCase().split("")
    let solved = ""

    for(let i = 0; i < message.length; i++) {
      const asciiNum = message[i].charCodeAt()
      if (asciiNum < 97){
        solved += String.fromCharCode(asciiNum)
      } 
      else if (asciiNum > 33 && asciiNum < 96) {
        solved += String.fromCharCode(asciiNum)
      } 
      else if (asciiNum >= 97 && asciiNum <= 122) {
        let letterShift = asciiNum + shift;
        if (letterShift < 97) {
          letterShift +=26;
        } else if (letterShift > 122) {
          letterShift -= 26;
        }
        solved += String.fromCharCode(letterShift)
      }

    }

    return solved
  }

  return {
    caesar,
  };
})();

module.exports =  { caesar: caesarModule.caesar };
