const titleCase  = function(text) {
  let str = text.toLowerCase();
  let arrayOfWords = str.split(' ');
  let strTitleCase = '';
  arrayOfWords.forEach(element => {
    let word = element.split('');
    if (word.length !== 0){
      word[0] = word[0].toUpperCase();
      strTitleCase += word.join('').concat(' ');
    } return word;
  });
  console.log(strTitleCase);
  return strTitleCase;
}

titleCase("this is an example") // should return "This Is An Example"
// titleCase("test") // should return "Test"
// titleCase("i r cool") // should return "I R Cool"
// titleCase("WHAT HAPPENS HERE") // should return "What Happens Here"
// titleCase("")  // should return ""
// titleCase("A") // should return "A"
