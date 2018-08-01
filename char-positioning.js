function positionLetters(string) {
  var output = {};
  var noSpaces = string.split(' ').join('');
  var letters = /^[A-Za-z]+$/;

  for (var i = 0; i < noSpaces.length; i++) {
    if (noSpaces[i].match(letters)) {
      if (output[`${noSpaces[i]}`] == undefined) {
        output[`${noSpaces[i]}`] = [(i)];
      } else {
        output[`${noSpaces[i]}`].push(i);
      }
    }
  }
  return output;
}

console.log(positionLetters("lighthouse in the house"));
