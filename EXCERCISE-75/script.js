mainFunction = () => {
  let usrText = document.getElementById("usrSentence").value;
  let splitText = usrText.split(" ");
  let suffix = document.getElementById("findWord").value;
  let filteredSuffix = suffix.replace(/\s/g, '');
  filteredSuffix = filteredSuffix.toLowerCase();
  let result = checkForSuffix(splitText, filteredSuffix);
}
checkForSuffix = (arr, suffText) => {
  let filteredArray = arr.filter(e => e);
  let lastElement = filteredArray.splice(-1).toString();
  lastElement = lastElement.toLowerCase();
  if (lastElement === suffText) {
    document.getElementById("dispOutput").innerHTML = `The Suffix Exists In The String`;
  }
  else {
    document.getElementById("dispOutput").innerHTML = `The Suffix Isnt Found In the String`;
  }
}
//changes DONE !

