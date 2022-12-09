function checkPart(part) {
  let word = part.split("");
  let isPalindrome = false;

  word.forEach((_, index) => {
    let wordToCheck = [...word];
    wordToCheck.splice(index, 1);

    if (wordToCheck.join("") === wordToCheck.reverse().join("")) {
      isPalindrome = true;
    }
  });

  return isPalindrome;
}